import { http, HttpResponse } from 'msw'
import { BehovsmeldingType } from '../../interfaces/CommonTypes'
import type { SoknadInfo } from '../../interfaces/SoknadInfo'
import { API_PATH } from '../../services/rest-service'
import { sakerMock } from '../mockdata/saker'
import { arneArnesenDorautomatikkMock } from '../mockdata/soknadInnsender/arneArnesenDorautomatikk'
import { byttelizeBottesenMock } from '../mockdata/soknadInnsender/byttelizeBottesen'
import { dorautoMatikkMock } from '../mockdata/soknadInnsender/dorautoMatikk'
import { giovanniVarmevottiMock } from '../mockdata/soknadInnsender/giovanniVarmevotti'
import { nasseNoffMock } from '../mockdata/soknadInnsender/nasseNoff'
import { rullaTorMock } from '../mockdata/soknadInnsender/rullaTor'
import { rulleStolbakkenMock } from '../mockdata/soknadInnsender/rulleStolbakken'
import { trudeLuthMock } from '../mockdata/soknadInnsender/trudeLuth'
import { vegardBeiderMock } from '../mockdata/soknadInnsender/vegardBeider'

const behovsmeldingerUnderEndring = new Map<string, { status: string; startedAt: number }>()

const mockPdfBase64 =
  'JVBERi0xLjEKMSAwIG9iago8PCAvVHlwZSAvQ2F0YWxvZyAvUGFnZXMgMiAwIFIgPj4KZW5kb2JqCjIgMCBvYmoKPDwgL1R5cGUgL1BhZ2VzIC9LaWRzIFsgMyAwIFIgXSAvQ291bnQgMSA+PgplbmRvYmoKMyAwIG9iago8PCAvVHlwZSAvUGFnZSAvUGFyZW50IDIgMCBSIC9NZWRpYUJveCBbMCAwIDMwMCAxNDRdIC9Db250ZW50cyA0IDAgUiAvUmVzb3VyY2VzIDw8IC9Gb250IDw8IC9GMSA1IDAgUiA+PiA+PiA+PgplbmRvYmoKNCAwIG9iago8PCAvTGVuZ3RoIDQ0ID4+CnN0cmVhbQpCVCAvRjEgMTIgVGYgNTAgOTAgVGQgKE1vY2sgUERGIGZvciBmb3Jow6VuZHN2aXNuaW5nKSBUaiBFVAplbmRzdHJlYW0KZW5kb2JqCjUgMCBvYmoKPDwgL1R5cGUgL0ZvbnQgL1N1YnR5cGUgL1R5cGUxIC9CYXNlRm9udCAvSGVsdmV0aWNhID4+CmVuZG9iagp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTAgMDAwMDAgbiAKMDAwMDAwMDA1MyAwMDAwMCBuIAowMDAwMDAwMTA5IDAwMDAwIG4gCjAwMDAwMDAyMjUgMDAwMDAgbiAKMDAwMDAwMDMxOSAwMDAwMCBuIAp0cmFpbGVyCjw8IC9TaXplIDYgL1Jvb3QgMSAwIFIgPj4Kc3RhcnR4cmVmCjM5NQolJUVPRgo='

const decodeBase64 = (base64: string): Uint8Array => {
  const binary = atob(base64)
  const bytes = new Uint8Array(binary.length)

  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i)
  }

  return bytes
}

const soknadsbehandlingDbHandlers = [
  http.patch<{ behovsmeldingId: string }>(
    `${API_PATH}/behovsmelding/:behovsmeldingId/brukerbekreftelse-til-fullmakt`,
    async ({ params }) => {
      const { behovsmeldingId } = params

      behovsmeldingerUnderEndring.set(behovsmeldingId, {
        status: 'FULLMAKT_AVVENTER_PDF',
        startedAt: Date.now(),
      })

      setTimeout(() => {
        const entry = behovsmeldingerUnderEndring.get(behovsmeldingId)
        if (entry) {
          entry.status = 'GODKJENT_MED_FULLMAKT'
        }
      }, 6000)

      return HttpResponse.json({ message: 'Endring til fullmakt startet' }, { status: 202 })
    }
  ),

  http.get<{ behovsmeldingId: string }>(
    `${API_PATH}/behovsmelding/:behovsmeldingId/status`,
    async ({ params }) => {
      const { behovsmeldingId } = params
      const entry = behovsmeldingerUnderEndring.get(behovsmeldingId)

      if (!entry) {
        return HttpResponse.json({ error: 'Behovsmelding ikke funnet' }, { status: 404 })
      }

      return HttpResponse.json({
        behovsmeldingId,
        status: entry.status,
      })
    }
  ),
  http.get<{ soknadsid: string }>(`${API_PATH}/soknad/bruker/:soknadsid`, ({ params }) => {
    const randomFagsakId = String(Math.floor(100000 + Math.random() * 900000))

    return HttpResponse.json({
      søknadId: params.soknadsid,
      behovsmeldingType: 'SØKNAD',
      journalpostId: null,
      datoOpprettet: '2024-01-01T10:00:00.000+00:00',
      datoOppdatert: '2024-01-01T10:00:00.000+00:00',
      status: 'VENTER_GODKJENNING',
      fullmakt: false,
      fnrBruker: '12345678910',
      brukerpassbyttedataV2: null,
      er_digital: true,
      soknadGjelder: null,
      ordrelinjer: [],
      fagsakId: randomFagsakId,
      søknadType: 'SØKNAD',
      valgteÅrsaker: [],
      innsenderbehovsmelding: null,
    })
  }),
  http.get<{ fagsakId: string }>(`/hjelpemidler/dinehjelpemidler/api/bruker/dokumenter/:fagsakId`, ({ params }) => {
    return HttpResponse.json([
      {
        journalpostId: `jp-${params.fagsakId}`,
        tittel: 'Vedtaksbrev',
        journalposttype: 'U',
        journalstatus: 'JOURNALFOERT',
        sak: {
          fagsaksystem: 'HOTSAK',
          fagsakId: params.fagsakId,
        },
        kanal: 'NAV_NO',
        relevanteDatoer: [
          {
            datotype: 'DATO_OPPRETTET',
            dato: '2024-01-01T10:00:00.000Z',
          },
        ],
        dokumenter: [
          {
            tittel: 'Vedtak',
            dokumentInfoId: 'dokument-1',
            brevkode: 'vedtaksbrev_hotsak_breveditor',
            dokumentvarianter: [
              {
                variantformat: 'ARKIV',
                brukerHarTilgang: true,
                code: ['ok'],
              },
            ],
          },
        ],
        dato: '2024-01-01T10:00:00.000Z',
      },
    ])
  }),
  http.get<{ journalpostId: string; dokumentInfoId: string }>(
    `${API_PATH}/bruker/arkiv-dokumenter/:journalpostId/:dokumentInfoId/ARKIV`,
    ({ params }) => {
      const pdf = decodeBase64(mockPdfBase64)

      return new HttpResponse(pdf, {
        status: 200,
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `inline; filename="${params.dokumentInfoId}.pdf"`,
        },
      })
    }
  ),
  http.get<{}, {}, SoknadInfo[]>(`${API_PATH}/hjelpemidler/dinehjelpemidler/api/bruker/dokumenter/`, ({ request }) => {
    const rolle = new URL(request.url).searchParams.get('formidler')

    let saker = sakerMock
    if (rolle === 'false') {
      saker = saker.filter((sak) => {
        return sak.behovsmeldingType === BehovsmeldingType.BESTILLING
      })
    }

    return HttpResponse.json(saker)
  }),
  http.get<{}, {}, SoknadInfo[]>(`${API_PATH}/soknad/innsender`, ({ request }) => {
    const rolle = new URL(request.url).searchParams.get('formidler')

    let saker = sakerMock
    if (rolle === 'false') {
      saker = saker.filter((sak) => {
        return sak.behovsmeldingType === BehovsmeldingType.BESTILLING
      })
    }

    return HttpResponse.json(saker)
  }),
  http.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/abc887bc-5a95-49c2-a123-f0e0f7c32df3`, () => {
    return HttpResponse.json(vegardBeiderMock)
  }),
  http.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/fec887bc-5a95-49c2-a123-f0e0f7c32df3`, () => {
    return HttpResponse.json(trudeLuthMock)
  }),
  http.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/fec887bc-5a95-49c2-a098-f0e0f7cd73hf`, () => {
    return HttpResponse.json(nasseNoffMock)
  }),
  http.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/5839bbf1-8842-45c0-a8fd-71718260fce4`, () => {
    return HttpResponse.json(giovanniVarmevottiMock)
  }),
  http.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/fc8ee79a-b234-4201-8735-129c9cff8d0b`, () => {
    return HttpResponse.json(rulleStolbakkenMock)
  }),
  http.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/85be32d6-052e-49e5-84c3-3e8de24687c7`, () => {
    return HttpResponse.json(byttelizeBottesenMock)
  }),
  http.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/a293fae9-262a-4fad-b7be-35715b953511`, () => {
    return HttpResponse.json(rullaTorMock)
  }),
  http.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/6600d6c6-3059-4a52-bcfb-9c5353a78e99`, () => {
    return HttpResponse.json(dorautoMatikkMock)
  }),
  http.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/:id`, () => {
    return HttpResponse.json(arneArnesenDorautomatikkMock)
  }),
]

export default soknadsbehandlingDbHandlers
