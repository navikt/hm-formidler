import { rest } from "msw"
import { BehovsmeldingType, SoknadInfo } from "../../interfaces/SoknadInfo"
import { API_PATH } from "../../services/rest-service"
import { sakerMock } from "../mockdata/saker"

const soknadsbehandlingDbHandlers = [
    rest.get<{}, {}, SoknadInfo[]>(`${API_PATH}/soknad/innsender`, (req, res, ctx) => {

        const rolle = req.url.searchParams.get('formidler')

        let saker = sakerMock
        if (rolle === 'false') {
            saker = saker.filter((sak) => {return sak.behovsmeldingType === BehovsmeldingType.BESTILLING})
        }

        return res(ctx.json(saker))
    }),
    rest.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/abc887bc-5a95-49c2-a123-f0e0f7c32df3`, (req, res, ctx) => {
        return res(
            ctx.json({
                soknadId: 'b3b15dd3-38d8-4968-a5fa-09263deaad9f',
                datoOpprettet: '2021-04-28T18:59:13.992+00:00',
                datoOppdatert: '2021-04-28T18:59:13.992+00:00',
                status: 'BESTILLING_AVVIST',
                fullmakt: 'false',
                fnrBruker: '12345678910',
                navnBruker: 'Vegard Beider',
                er_digital: true,
                behovsmeldingType: 'BESTILLING',
                valgteÅrsaker: ['Duplikat av en annen bestilling'],
                søknadsdata: {
                    bruker: {
                        etternavn: 'Beider',
                        fnummer: '12345678910',
                        fornavn: 'Vegard',
                        telefonNummer: '12345678',
                        adresse: 'Trandemveien 29',
                        postnummer: '4235',
                        poststed: 'Hebnes',
                        boform: 'Hjemme',
                        bruksarena: 'DAGLIGLIVET',
                        funksjonsnedsettelser: ['BEVEGELSE'],
                        signatur: 'BRUKER_BEKREFTER',
                        brukernummer: '1234567',
                    },
                    formidler: {
                        navn: 'Hans Hansen',
                        arbeidssted: 'Suldal kommune avd. fysioterapi',
                        stilling: 'Fysioterapeut',
                        adresse: 'Suldal kommune  Eidsvegen 7 4230 Strand',
                        telefon: '47907715',
                        treffestEnklest: 'Onsdager 08-12',
                        epost: 'Hans.Hansen@suldal.kommune.no',
                        kommunenavn: 'SULDAL',
                    },
                    hjelpemidler: [
                        {
                            antall: 1,
                            beskrivelse: 'Topro Terskeleliminator',
                            hjelpemiddelkategori: 'Terskeleliminatorer og ramper',
                            hmsNr: '014117',
                            tilleggsinformasjon: null,
                            rangering: '1',
                            utlevertFraHjelpemiddelsentralen: false,
                            vilkarliste: [],
                            tilbehorListe: [],
                            begrunnelse: null,
                            kanIkkeTilsvarande: false,
                            navn: 'Topro Terskeleliminator',
                        },
                    ],
                    hjelpemiddelTotalAntall: 1,
                    oppfolgingsansvarlig: null,
                    levering: {
                        kontaktPerson: { navn: null, telefon: null, kontaktpersonType: 'HJELPEMIDDELBRUKER' },
                        leveringsmaate: 'FOLKEREGISTRERT_ADRESSE',
                        adresse: null,
                        merknad: 'Ta også kontakt med meg dvs. formidler ved utlevering',
                    },
                },
            })
        )
    }),
    rest.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/fec887bc-5a95-49c2-a123-f0e0f7c32df3`, (req, res, ctx) => {
        return res(
            ctx.json({
                soknadId: 'b3b15dd3-38d8-4968-a5fa-09263deaad9f',
                datoOpprettet: '2021-04-28T18:59:13.992+00:00',
                datoOppdatert: '2021-04-28T18:59:13.992+00:00',
                status: 'BESTILLING_AVVIST',
                fullmakt: 'false',
                fnrBruker: '12345678910',
                navnBruker: 'Trude Luth',
                er_digital: true,
                behovsmeldingType: 'BESTILLING',
                valgteÅrsaker: ['Annet'],
                søknadsdata: {
                    bruker: {
                        etternavn: 'Luth',
                        fnummer: '12345678910',
                        fornavn: 'Trude',
                        telefonNummer: '12345678',
                        adresse: 'Trandemveien 29',
                        postnummer: '4235',
                        poststed: 'Hebnes',
                        boform: 'Hjemme',
                        bruksarena: 'DAGLIGLIVET',
                        funksjonsnedsettelser: ['BEVEGELSE'],
                        signatur: 'BRUKER_BEKREFTER',
                    },
                    formidler: {
                        navn: 'Hans Hansen',
                        arbeidssted: 'Suldal kommune avd. fysioterapi',
                        stilling: 'Fysioterapeut',
                        adresse: 'Suldal kommune  Eidsvegen 7 4230 Strand',
                        telefon: '47907715',
                        treffestEnklest: 'Onsdager 08-12',
                        epost: 'Hans.Hansen@suldal.kommune.no',
                        kommunenavn: 'SULDAL',
                    },
                    hjelpemidler: [
                        {
                            antall: 1,
                            beskrivelse: 'Topro Terskeleliminator',
                            hjelpemiddelkategori: 'Terskeleliminatorer og ramper',
                            hmsNr: '014117',
                            tilleggsinformasjon: null,
                            rangering: '1',
                            utlevertFraHjelpemiddelsentralen: false,
                            vilkarliste: [],
                            tilbehorListe: [],
                            begrunnelse: null,
                            kanIkkeTilsvarande: false,
                            navn: 'Topro Terskeleliminator',
                        },
                    ],
                    hjelpemiddelTotalAntall: 1,
                    oppfolgingsansvarlig: null,
                    levering: {
                        kontaktPerson: { navn: null, telefon: null, kontaktpersonType: 'HJELPEMIDDELBRUKER' },
                        leveringsmaate: 'FOLKEREGISTRERT_ADRESSE',
                        adresse: null,
                        merknad: 'Ta også kontakt med meg dvs. formidler ved utlevering',
                    },
                },
            }))
    }),
    rest.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/fec887bc-5a95-49c2-a098-f0e0f7cd73hf`, (req, res, ctx) => {
        return res(
            ctx.json({
                soknadId: 'b3b15dd3-38d8-4968-a5fa-09263deaad9f',
                datoOpprettet: '2021-04-28T18:59:13.992+00:00',
                datoOppdatert: '2021-04-28T18:59:13.992+00:00',
                status: 'GODKJENT',
                fullmakt: 'false',
                fnrBruker: '12345678910',
                navnBruker: 'Nasse Nøff',
                er_digital: true,
                behovsmeldingType: 'BESTILLING',
                valgteÅrsaker: [],
                søknadsdata: {
                    bruker: {
                        etternavn: 'Nøff',
                        fnummer: '12345678910',
                        fornavn: 'Nasse',
                        telefonNummer: '12345678',
                        adresse: 'Trandemveien 29',
                        postnummer: '4235',
                        poststed: 'Hebnes',
                        boform: 'Hjemme',
                        bruksarena: 'DAGLIGLIVET',
                        funksjonsnedsettelser: ['BEVEGELSE'],
                        signatur: 'BRUKER_BEKREFTER',
                    },
                    formidler: {
                        navn: 'Hans Hansen',
                        arbeidssted: 'Suldal kommune avd. fysioterapi',
                        stilling: 'Fysioterapeut',
                        adresse: 'Suldal kommune  Eidsvegen 7 4230 Strand',
                        telefon: '47907715',
                        treffestEnklest: 'Onsdager 08-12',
                        epost: 'Hans.Hansen@suldal.kommune.no',
                        kommunenavn: 'SULDAL',
                    },
                    hjelpemidler: [
                        {
                            antall: 1,
                            beskrivelse: 'Topro Terskeleliminator',
                            hjelpemiddelkategori: 'Terskeleliminatorer og ramper',
                            hmsNr: '014117',
                            tilleggsinformasjon: null,
                            rangering: '1',
                            utlevertFraHjelpemiddelsentralen: false,
                            vilkarliste: [],
                            tilbehorListe: [],
                            begrunnelse: null,
                            kanIkkeTilsvarande: false,
                            navn: 'Topro Terskeleliminator',
                        },
                    ],
                    hjelpemiddelTotalAntall: 1,
                    oppfolgingsansvarlig: null,
                    levering: {
                        kontaktPerson: { navn: null, telefon: null, kontaktpersonType: 'HJELPEMIDDELBRUKER' },
                        leveringsmaate: 'FOLKEREGISTRERT_ADRESSE',
                        adresse: null,
                        merknad: 'Ta også kontakt med meg dvs. formidler ved utlevering',
                    },
                },
            }))
    }),
    rest.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/:id`, (req, res, ctx) => {
        return res(
            ctx.json({
                soknadId: 'b3b15dd3-38d8-4968-a5fa-09263deaad9f',
                datoOpprettet: '2021-04-28T18:59:13.992+00:00',
                datoOppdatert: '2021-04-28T18:59:13.992+00:00',
                status: 'VENTER_GODKJENNING',
                fullmakt: 'false',
                fnrBruker: '12345678910',
                navnBruker: 'Arne Arnesen',
                er_digital: true,
                søknadsdata: {
                    bruker: {
                        etternavn: 'Arnesen',
                        fnummer: '12345678910',
                        fornavn: 'Arne',
                        telefonNummer: '12345678',
                        adresse: 'Trandemveien 29',
                        postnummer: '4235',
                        poststed: 'Hebnes',
                        boform: 'Hjemme',
                        bruksarena: 'DAGLIGLIVET',
                        funksjonsnedsettelser: ['BEVEGELSE'],
                        signatur: 'BRUKER_BEKREFTER',
                        brukernummer: '1234567',
                    },
                    formidler: {
                        navn: 'Hans Hansen',
                        arbeidssted: 'Suldal kommune avd. fysioterapi',
                        stilling: 'Fysioterapeut',
                        adresse: 'Suldal kommune  Eidsvegen 7 4230 Strand',
                        telefon: '47907715',
                        treffestEnklest: 'Onsdager 08-12',
                        epost: 'Hans.Hansen@suldal.kommune.no',
                        kommunenavn: 'SULDAL',
                    },
                    hjelpemidler: [
                        {
                            antall: 2,
                            beskrivelse: 'Topro Terskeleliminator',
                            hjelpemiddelkategori: 'Terskeleliminatorer og ramper',
                            hmsNr: '014117',
                            tilleggsinformasjon: null,
                            rangering: '1',
                            utlevertFraHjelpemiddelsentralen: false,
                            vilkarliste: [],
                            tilbehorListe: [],
                            begrunnelse: null,
                            kanIkkeTilsvarande: false,
                            navn: 'Topro Terskeleliminator',
                        },
                        {
                            antall: 1,
                            beskrivelse: 'ROHO Quadtro Select lavprofil sb 56',
                            hjelpemiddelkategori: 'Sitteputer',
                            hmsNr: '171264',
                            tilleggsinformasjon: null,
                            rangering: '1',
                            utlevertFraHjelpemiddelsentralen: false,
                            vilkarliste: [{ vilkaarTekst: 'Forebygge trykksår', tilleggsInfo: null }],
                            tilbehorListe: [],
                            begrunnelse: null,
                            kanIkkeTilsvarande: false,
                            navn: 'ROHO Quadtro Select lavprofil sb 56',
                        },
                        {
                            antall: 1,
                            beskrivelse: 'Maxi 550',
                            hjelpemiddelkategori: 'Ganghjelpemidler',
                            hmsNr: '096445',
                            tilleggsinformasjon: null,
                            rangering: '3',
                            utlevertFraHjelpemiddelsentralen: false,
                            vilkarliste: [],
                            tilbehorListe: [],
                            begrunnelse: 'Bruker veier nærmere 100 kg',
                            kanIkkeTilsvarande: false,
                            navn: 'Maxi 550',
                        },
                    ],
                    hjelpemiddelTotalAntall: 4,
                    oppfolgingsansvarlig: null,
                    levering: {
                        kontaktPerson: { navn: null, telefon: null, kontaktpersonType: 'HJELPEMIDDELBRUKER' },
                        leveringsmaate: 'FOLKEREGISTRERT_ADRESSE',
                        adresse: null,
                        merknad: 'Ta også kontakt med meg dvs. formidler ved utlevering',
                    },
                },
            }))
    })
]

export default soknadsbehandlingDbHandlers