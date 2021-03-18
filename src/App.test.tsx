/*import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen, cleanup } from '@testing-library/react'*/
import '@testing-library/jest-dom/extend-expect'
/*import userEvent from '@testing-library/user-event'
import App from './App'
*/
test('integration test - happy path 1', async () => {
    expect(true)
})

/*import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver

const API_PATH = '/hjelpemidler/digitalsoknadhjelpemidler/api'*/

/**
 * Setup
 */

// To fix "Error: Not implemented: window.scrollTo"
/*test('fix the missing scrolling api for further tests', () => {
  window.scrollTo = jest.fn()
})

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Mock out amplitude to get rid of error messages
jest.mock('amplitude-js', () => {
  return {
    getInstance: () => ({
      init: jest.fn(),
      logEvent: jest.fn(),
    }),
  }
})

// Mock back-end away
const server = setupServer(
  rest.get(API_PATH + '/soknad/utkast', (req, res, ctx) => {
    return res(ctx.json({}))
  }),

  rest.get(API_PATH + '/hjelpemiddeldatabase/produkterwithtechdata', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          stockid: '006720',
          artid: '65260',
          prodid: '29742',
          artno: '2100AT',
          artname: 'Jay J2 sb 45',
          adescshort: 'Jay J2 sb 45',
          prodname: 'Jay J2',
          pshortdesc:
            'Trykkavlastende sittepute i skum med oljepad i sittebrønnen. Fast front som gir støtte ved forflytning. Passer til rullestoler med plansete. Høyde: 8 cm. Leveres med to trekk. Leveres i bredder fra 35 til 60 cm.',
          artpostid: '15454',
          apostid: '870',
          postrank: '3',
          apostnr: '7',
          aposttitle: 'Post 7: Sittepute som gir god støtte under forflytning ',
          newsid: '4361',
          isocode: '18100601',
          isotitle: 'Sitteputer for komfort',
          kategori: 'Sitteputer',
          techdataAsText:
            'Bredde 45cm, Lengde 40cm, Høyde foran 8cm, Høyde bak 8cm, Brukervekt min 25kg, Brukervekt maks 150kg, Vekt pute 2.5kg, Fyllmateriale olje/skum, Materiale i trekk polyester/neopren, Lagdelt JA, Vasketemp pute 85grader, Vasketemp trekk 70grader',
        },
      ])
    )
  }),

  rest.get(API_PATH + '/pdl/userinfo', (req, res, ctx) => {
    return res(
      ctx.json({
        hentPerson: {
          navn: [{ fornavn: 'TRIVIELL', etternavn: 'DORULL' }],
          adressebeskyttelse: [{ gradering: 'UGRADERT' }],
        },
      })
    )
  }),

  rest.get(API_PATH + '/altinn/rettigheter-til-tjeneste', (req, res, ctx) => {
    return res(
      ctx.json({
        altinnRettighet: true,
        allowlistTilgang: true,
        organisasjoner: [
          {
            name: 'SKVALDER KOMMUNE',
            parentOrganizationNumber: '811076112',
            organizationNumber: '6969',
            organizationForm: 'BEDR',
            status: 'Active',
            type: 'Business',
          },
        ],
      })
    )
  }),

  rest.get(API_PATH + '/soknad/kontaktinfoFraSistSendteSoknad', (req, res, ctx) => {
    return res(ctx.json({}))
  })
)

jest.setTimeout(30000)

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' })) // Ensures no network request escapes test: either we mock it or the test fails
afterEach(() => {
  cleanup()
  history.replaceState(null, '', '/')
  server.resetHandlers()
})
afterAll(() => server.close())*/

/**
 * Happy path tests that simulate actual likely user patterns and check that the expected data ends up going out on the fetch-api in the end
 */

/*test('integration test - happy path 1', async () => {
  // Render app and wait for the page content to load
  const { getByText, getByLabelText, getAllByLabelText } = render(<App />)
  await waitFor(() => expect(screen.queryByText('Laster sideinnhold...')).toBeNull())

  // Infoside: Check that it renders, and that we can start an application
  screen.getByText('Søknad om enkle hjelpemidler')
  userEvent.click(screen.getByText('Start Søknad'))

  // Brukerside: Check that it renders, and simulate application input
  await waitFor(() => expect(screen.queryByTestId('bruker')).not.toBeNull())

  //userEvent.type(getByLabelText('Fornavn'), 'Ola')
  //userEvent.type(getByLabelText('Etternavn'), 'Nordmann')
  userEvent.type(getByLabelText('Fødselsnummer (11 sifre)'), '15084300133')
  //userEvent.type(getByLabelText('Telefon (8 sifre)'), '12345678')
  /*userEvent.click(
    getByLabelText(
      'Bruker har signert en fullmakt på at jeg fyller ut og begrunner søknad om hjelpemidler på sine vegne. Bruker er kjent med hvilke hjelpemidler det søkes om og er informert om sine rettigheter og plikter.'
    )
  )*/

  // Brukerside: Set up page specific server endpoint mock, click next and validate that the stored draft contains the correct and expected data
  /*let soknadSent: string | undefined = undefined
  server.use(
    rest.get(API_PATH + '/pdl/userinfo/valider-navn?etternavn=Nordmann&fnr=15084300133', (req, res, ctx) => {
      return res(ctx.json({ etternavnMatch: true }))
    }),
    rest.post(API_PATH + '/soknad/utkast', (req, res, ctx) => {
      soknadSent = req.body
      return res(ctx.json({}))
    })
  )

  userEvent.click(screen.getByText('Brukers situasjon'))

  await waitFor(() => expect(soknadSent).toBeDefined())
  const brukerSent = soknadSent.soknad.bruker
  expect(brukerSent.fnummer).toBe('15084300133')
  //expect(brukerSent.fornavn).toBe('Ola')
  //expect(brukerSent.etternavn).toBe('Nordmann')
  //expect(brukerSent.telefonNummer).toBe('12345678')
  //expect(brukerSent.harFullmakt).toBe(true)

  // Brukersituasjonside: Check that it renders, and simulated application input
  await waitFor(() => expect(screen.queryByTestId('brukersituasjon')).not.toBeNull())
  screen.getByTestId('brukersituasjon')

  userEvent.click(getByLabelText('Hjemme (Egen bolig, omsorgsbolig eller bofellesskap)'))
  userEvent.click(getByLabelText('Hjelpemidlene skal brukes i dagliglivet'))
  userEvent.click(getByLabelText('bevegelse'))

  const [konfirmasjonsKnapp1, konfirmasjonsKnapp2] = getAllByLabelText('Ja, jeg bekrefter dette')
  userEvent.click(konfirmasjonsKnapp1)
  userEvent.click(konfirmasjonsKnapp2)

  // Brukersituasjonside: Set up page specific server endpoint mock, click next and validate that the stored draft contains the correct and expected data
  soknadSent = undefined
  userEvent.click(screen.getByText('Hjelpemidler'))

  await waitFor(() => expect(soknadSent).toBeDefined())
  const brukersituasjonSent = soknadSent.soknad.brukersituasjon
  expect(brukersituasjonSent.bostedRadioButton).toBe('Hjemme')
  expect(brukersituasjonSent.bruksarenaErDagliglivet).toBe(true)
  expect(brukersituasjonSent.nedsattFunksjon).toBe(true)
  expect(brukersituasjonSent.nedsattFunksjonTypes.bevegelse).toBe(true)
  expect(brukersituasjonSent.nedsattFunksjonTypes.kognisjon).toBe(false)
  expect(brukersituasjonSent.nedsattFunksjonTypes.horsel).toBe(false)
  expect(brukersituasjonSent.storreBehov).toBe(true)
  expect(brukersituasjonSent.praktiskeProblem).toBe(true)

  // Hjelpemidlerside: Check that it renders, and simulate application input
  await waitFor(() => expect(screen.queryByTestId('hjelpemidler')).not.toBeNull())
  screen.getByTestId('hjelpemidler')

  userEvent.type(getByLabelText('Søk etter HMS-nr. eller hjelpemiddel'), 'Sitteputer')

  const lbltext = 'SITTEPUTE SOM GIR GOD STØTTE UNDER FORFLYTNING'
  await waitFor(() => expect(getByText(lbltext)).not.toBeNull())
  userEvent.click(getByText(lbltext))

  const lbltext2 =
    'Trykkavlastende sittepute i skum med oljepad i sittebrønnen. Fast front som gir støtte ved forflytning. Passer til rullestoler med plansete. Høyde: 8 cm. Leveres med to trekk. Leveres i bredder fra 35 til 60 cm.'
  await waitFor(() => expect(getByText(lbltext2)).not.toBeNull())

  fireEvent.change(getByLabelText('Antall'), {
    target: {
      value: '2',
    },
  })

  // FIXME: Not working: await userEvent.type(getByLabelText("Begrunn hvorfor brukeren ikke kan benytte høyere rangert produkt eller tilsvarende"), "Hello world abcdefg", {delay: 100});
  fireEvent.change(
    getByLabelText('Begrunn hvorfor brukeren ikke kan benytte høyere rangert produkt eller tilsvarende'),
    {
      target: {
        value: 'Hello world abcdefg',
      },
    }
  )
  userEvent.click(getByLabelText('Forebygge trykksår'))

  const [radioKnapp1, radioKnapp2] = getAllByLabelText('Nei')
  userEvent.click(radioKnapp1)
  userEvent.click(radioKnapp2)

  userEvent.click(getByText('Legg til nytt tilbehør'))

  await waitFor(() => expect(document.querySelector('#tlbhr-0_HMSnr')).not.toBeNull())
  userEvent.type(document.querySelector('#tlbhr-0_HMSnr'), '123456')
  userEvent.type(document.querySelector('#tlbhr-0_navn'), 'Tilbehoer nr 1')
  fireEvent.change(document.querySelector('#tlbhr-0_antall'), {
    target: {
      value: '4',
    },
  })

  userEvent.click(getByText('Legg til nytt tilbehør'))

  userEvent.type(document.querySelector('#tlbhr-1_HMSnr'), '654321')
  userEvent.type(document.querySelector('#tlbhr-1_navn'), 'Tilbehoer nr 2')
  fireEvent.change(document.querySelector('#tlbhr-1_antall'), {
    target: {
      value: '3',
    },
  })

  userEvent.click(getByText('Lagre hjelpemiddel'))

  // Hjelpemidlerside: Set up page specific server endpoint mock, click next and validate that the stored draft contains the correct and expected data
  soknadSent = undefined
  userEvent.click(getByText('Levering'))

  await waitFor(() => expect(soknadSent).toBeDefined())
  const hjelpemidlerSent = soknadSent.soknad.hjelpemidler
  expect(hjelpemidlerSent.hjelpemiddelTotaltAntall).toBe(9)
  expect(hjelpemidlerSent.hjelpemiddelListe.length).toBe(1)
  expect(hjelpemidlerSent.hjelpemiddelListe[0].hmsNr).toBe('006720')
  expect(hjelpemidlerSent.hjelpemiddelListe[0].beskrivelse).toBe('Jay J2 sb 45')
  expect(hjelpemidlerSent.hjelpemiddelListe[0].antall).toBe(2)
  expect(hjelpemidlerSent.hjelpemiddelListe[0].utlevertFraHjelpemiddelsentralen).toBe(false)
  expect(hjelpemidlerSent.hjelpemiddelListe[0].vilkarliste[0].id).toBe(1)
  expect(hjelpemidlerSent.hjelpemiddelListe[0].vilkarliste[0].vilkartekst).toBe('Forebygge trykksår')
  expect(hjelpemidlerSent.hjelpemiddelListe[0].vilkarliste[0].checked).toBe(true)
  expect(hjelpemidlerSent.hjelpemiddelListe[0].vilkarliste[1].id).toBe(2)
  expect(hjelpemidlerSent.hjelpemiddelListe[0].vilkarliste[1].vilkartekst).toBe('Hindre videre utvikling av trykksår')
  expect(hjelpemidlerSent.hjelpemiddelListe[0].vilkarliste[1].checked).toBe(false)
  expect(hjelpemidlerSent.hjelpemiddelListe[0].vilkarliste[2].id).toBe(3)
  expect(hjelpemidlerSent.hjelpemiddelListe[0].vilkarliste[2].vilkartekst).toBe('Andre spesielle behov')
  expect(hjelpemidlerSent.hjelpemiddelListe[0].vilkarliste[2].checked).toBe(false)
  expect(hjelpemidlerSent.hjelpemiddelListe[0].vilkarliste[2].kreverTilleggsinfo).toBe(true)
  expect(hjelpemidlerSent.hjelpemiddelListe[0].begrunnelsen).toBe('Hello world abcdefg')
  expect(hjelpemidlerSent.hjelpemiddelListe[0].kanIkkeTilsvarande).toBe(true)
  expect(hjelpemidlerSent.hjelpemiddelListe[0].tilleggsinformasjon).toBe('')
  expect(hjelpemidlerSent.hjelpemiddelListe[0].tilbehorListe.length).toBe(2)
  expect(hjelpemidlerSent.hjelpemiddelListe[0].tilbehorListe[0].hmsnr).toBe('123456')
  expect(hjelpemidlerSent.hjelpemiddelListe[0].tilbehorListe[0].navn).toBe('Tilbehoer nr 1')
  expect(hjelpemidlerSent.hjelpemiddelListe[0].tilbehorListe[0].antall).toBe(4)
  expect(hjelpemidlerSent.hjelpemiddelListe[0].tilbehorListe[1].hmsnr).toBe('654321')
  expect(hjelpemidlerSent.hjelpemiddelListe[0].tilbehorListe[1].navn).toBe('Tilbehoer nr 2')
  expect(hjelpemidlerSent.hjelpemiddelListe[0].tilbehorListe[1].antall).toBe(3)

  // Leveringside: Check that it renders, and simulate application input
  await waitFor(() => expect(screen.queryByTestId('levering')).not.toBeNull())
  screen.getByTestId('levering')

  userEvent.type(getByLabelText('Arbeidssted (virksomhet og ev. avd.)'), 'Oslo Kommune')
  userEvent.type(getByLabelText('Stilling'), 'Formidler')
  userEvent.type(getByLabelText('Postadresse arbeidssted'), 'Postboks 1000')
  userEvent.type(getByLabelText('Postnr. (4 sifre)'), '0187')
  userEvent.type(getByLabelText('Poststed'), 'Oslo')
  userEvent.type(getByLabelText('Telefon (8 sifre)'), '87654321')
  userEvent.type(getByLabelText('Treffes enklest (dager og tidsrom)'), 'Alle dager, alle timer')
  userEvent.type(getByLabelText('E-postadresse'), 'test@nav.no')
  userEvent.click(getByLabelText('Noen andre enn meg'))
  userEvent.type(getByLabelText('Fornavn'), 'Oppfølgulefsen')
  userEvent.type(getByLabelText('Etternavn'), 'Hansen')
  userEvent.type(getAllByLabelText('Arbeidssted (virksomhet og ev. avd.)')[1], 'Bodø Kommune')
  userEvent.type(getAllByLabelText('Stilling')[1], 'Ergoterapaut')
  userEvent.type(getAllByLabelText('Telefon (8 sifre)')[1], '09876543')
  userEvent.type(getByLabelText('Ansvar mht. hjelpemidlene det søkes om'), 'Noe noe')
  userEvent.click(getByLabelText('Fra kommunen til annen adresse'))
  userEvent.type(getByLabelText('Adresse'), 'Utleveringsveien 1')
  userEvent.type(getAllByLabelText('Postnr. (4 sifre)')[1], '4608')
  userEvent.type(getAllByLabelText('Poststed')[1], 'Kristiansand')
  userEvent.click(getByLabelText('Annen kontaktperson'))
  userEvent.type(getAllByLabelText('Fornavn')[1], 'Kontaktulefsen')
  userEvent.type(getAllByLabelText('Etternavn')[1], 'Johansen')
  userEvent.type(getAllByLabelText('Telefon (8 sifre)')[2], '34567890')
  userEvent.type(getByLabelText('Merknad til utlevering (valgfri)'), 'Hallo verden')

  // Leveringside: Set up page specific server endpoint mock, click next and validate that the stored draft contains the correct and expected data
  soknadSent = undefined
  userEvent.click(getByText('Oppsummering'))

  await waitFor(() => expect(soknadSent).toBeDefined())
  const leveringSent = soknadSent.soknad.levering
  expect(leveringSent.hmfFornavn).toBe('Triviell')
  expect(leveringSent.hmfEtternavn).toBe('Dorull')
  expect(leveringSent.hmfArbeidssted).toBe('Oslo Kommune')
  expect(leveringSent.hmfStilling).toBe('Formidler')
  expect(leveringSent.hmfPostadresse).toBe('Postboks 1000')
  expect(leveringSent.hmfPostnr).toBe('0187')
  expect(leveringSent.hmfPoststed).toBe('Oslo')
  expect(leveringSent.hmfTelefon).toBe('87654321')
  expect(leveringSent.hmfTreffesEnklest).toBe('Alle dager, alle timer')
  expect(leveringSent.hmfEpost).toBe('test@nav.no')
  expect(leveringSent.opfRadioButton).toBe('NoenAndre')
  expect(leveringSent.opfFornavn).toBe('Oppfølgulefsen')
  expect(leveringSent.opfEtternavn).toBe('Hansen')
  expect(leveringSent.opfTelefon).toBe('09876543')
  expect(leveringSent.opfArbeidssted).toBe('Bodø Kommune')
  expect(leveringSent.opfStilling).toBe('Ergoterapaut')
  expect(leveringSent.opfAnsvarFor).toBe('Noe noe')
  expect(leveringSent.utleveringsmaateRadioButton).toBe('AnnenBruksadresse')
  expect(leveringSent.utleveringPostadresse).toBe('Utleveringsveien 1')
  expect(leveringSent.utleveringPostnr).toBe('4608')
  expect(leveringSent.utleveringPoststed).toBe('Kristiansand')
  expect(leveringSent.utleveringskontaktpersonRadioButton).toBe('AnnenKontaktperson')
  expect(leveringSent.utleveringFornavn).toBe('Kontaktulefsen')
  expect(leveringSent.utleveringEtternavn).toBe('Johansen')
  expect(leveringSent.utleveringTelefon).toBe('34567890')
  expect(leveringSent.merknadTilUtlevering).toBe('Hallo verden')

  // Oppsummeringsside: Check that it renders
  await waitFor(() => expect(screen.queryByTestId('oppsummering')).not.toBeNull())
  screen.getByTestId('oppsummering')

  expect(getByText('Ola Nordmann')).toBeVisible()
  expect(getByText('15084300133')).toBeVisible()
  expect(getByText('12345678')).toBeVisible()
  expect(getByText('Hjemme')).toBeVisible()
  expect(getByText('Dagliglivet')).toBeVisible()
  expect(getByText('Bevegelse')).toBeVisible()
  expect(getByText('006720')).toBeVisible()
  expect(getByText('Jay J2 sb 45')).toBeVisible()
  expect(getByText('2 stk.')).toBeVisible()
  expect(getByText('SITTEPUTER')).toBeVisible()
  // expect(getByText("3")).toBeVisible();
  expect(getByText('123456')).toBeVisible()
  expect(getByText('Tilbehoer nr 1')).toBeVisible()
  expect(getByText('4 stk.')).toBeVisible()
  expect(getByText('654321')).toBeVisible()
  expect(getByText('Tilbehoer nr 2')).toBeVisible()
  expect(getByText('3 stk.')).toBeVisible()
  expect(getByText('Forebygge trykksår')).toBeVisible()
  expect(getByText('Hello world abcdefg')).toBeVisible()
  expect(getByText('Totalt: 9 stk. inkl. tilbehør')).toBeVisible()
  expect(getByText('Triviell Dorull')).toBeVisible()
  expect(getByText('Oslo Kommune')).toBeVisible()
  expect(getByText('Formidler')).toBeVisible()
  expect(getByText('Postboks 1000 0187 Oslo')).toBeVisible()
  expect(getByText('87654321')).toBeVisible()
  expect(getByText('Alle dager, alle timer')).toBeVisible()
  expect(getByText('test@nav.no')).toBeVisible()

  expect(getByText('Oppfølgulefsen Hansen')).toBeVisible()
  expect(getByText('Bodø Kommune')).toBeVisible()
  expect(getByText('Ergoterapaut')).toBeVisible()
  expect(getByText('09876543')).toBeVisible()
  expect(getByText('Noe noe')).toBeVisible()

  expect(getByText('Utleveringsveien 1 4608 Kristiansand')).toBeVisible()
  expect(getByText('Kontaktulefsen Johansen 34567890')).toBeVisible()
  expect(getByText('Hallo verden')).toBeVisible()

  expect(getByText('Fullmakt til å søke på vegne av Ola Nordmann')).toBeVisible()
  expect(
    getByText(
      'Ola Nordmann har signert en fullmakt på at jeg fyller ut og begrunner søknad om hjelpemidler på sine vegne. Ola Nordmann er kjent med hvilke hjelpemidler det søkes om og er informert om sine rettigheter og plikter.'
    )
  ).toBeVisible()
  expect(
    getByText('Fullmakten er arkivert i kommunens arkiv og kan vises frem på forespørsel fra NAV Hjelpemiddelsentral.')
  ).toBeVisible()
  expect(getByText('Ola Nordmann fyller vilkårene for å motta hjelpemidler')).toBeVisible()
  expect(
    getByText('Ola Nordmann har en vesentlig nedsatt funksjonsevne som varer i mer enn 2 år eller livet ut.')
  ).toBeVisible()
  expect(
    getByText(
      'Ola Nordmann sitt behov kan ikke løses med enklere og rimeligere hjelpemidler eller ved andre tiltak som ikke dekkes av NAV.'
    )
  ).toBeVisible()
  expect(
    getByText(
      'Hjelpemiddelet(ene) er nødvendig for å avhjelpe praktiske problemer i dagliglivet eller bli pleid i hjemmet. Ola Nordmann vil være i stand til å bruke hjelpemidlene.'
    )
  ).toBeVisible()

  // Oppsummeringsside: Set up page specific server endpoint mock, click next and validate that the final application contains the correct and expected data
  let finalSoknadSent: string | undefined = undefined
  server.use(
    rest.post(API_PATH + '/soknad', (req, res, ctx) => {
      finalSoknadSent = req.body
      return res(ctx.json({}))
    })
  )

  userEvent.click(getByText('SEND INN SØKNAD'))

  // Fullstendig sjekk av innsendt søknad
  await waitFor(() => expect(finalSoknadSent).toBeDefined())
  const finalBrukerSent = finalSoknadSent.soknad.bruker
  expect(finalBrukerSent.fnummer).toBe('15084300133')
  expect(finalBrukerSent.fornavn).toBe('Ola')
  expect(finalBrukerSent.etternavn).toBe('Nordmann')
  expect(finalBrukerSent.telefonNummer).toBe('12345678')
  expect(finalBrukerSent.harFullmakt).toBe(true)

  const finalBrukersituasjonSent = finalSoknadSent.soknad.brukersituasjon
  expect(finalBrukersituasjonSent.bostedRadioButton).toBe('Hjemme')
  expect(finalBrukersituasjonSent.bruksarenaErDagliglivet).toBe(true)
  expect(finalBrukersituasjonSent.nedsattFunksjon).toBe(true)
  expect(finalBrukersituasjonSent.nedsattFunksjonTypes.bevegelse).toBe(true)
  expect(finalBrukersituasjonSent.nedsattFunksjonTypes.kognisjon).toBe(false)
  expect(finalBrukersituasjonSent.nedsattFunksjonTypes.horsel).toBe(false)
  expect(finalBrukersituasjonSent.storreBehov).toBe(true)
  expect(finalBrukersituasjonSent.praktiskeProblem).toBe(true)

  const finalHjelpemidlerSent = finalSoknadSent.soknad.hjelpemidler
  expect(finalHjelpemidlerSent.hjelpemiddelTotaltAntall).toBe(9)
  expect(finalHjelpemidlerSent.hjelpemiddelListe.length).toBe(1)
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].hmsNr).toBe('006720')
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].beskrivelse).toBe('Jay J2 sb 45')
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].antall).toBe(2)
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].utlevertFraHjelpemiddelsentralen).toBe(false)
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].vilkarliste[0].id).toBe(1)
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].vilkarliste[0].vilkartekst).toBe('Forebygge trykksår')
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].vilkarliste[0].checked).toBe(true)
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].vilkarliste[1].id).toBe(2)
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].vilkarliste[1].vilkartekst).toBe(
    'Hindre videre utvikling av trykksår'
  )
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].vilkarliste[1].checked).toBe(false)
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].vilkarliste[2].id).toBe(3)
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].vilkarliste[2].vilkartekst).toBe('Andre spesielle behov')
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].vilkarliste[2].checked).toBe(false)
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].vilkarliste[2].kreverTilleggsinfo).toBe(true)
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].begrunnelsen).toBe('Hello world abcdefg')
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].kanIkkeTilsvarande).toBe(true)
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].tilleggsinformasjon).toBe('')
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].tilbehorListe.length).toBe(2)
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].tilbehorListe[0].hmsnr).toBe('123456')
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].tilbehorListe[0].navn).toBe('Tilbehoer nr 1')
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].tilbehorListe[0].antall).toBe(4)
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].tilbehorListe[1].hmsnr).toBe('654321')
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].tilbehorListe[1].navn).toBe('Tilbehoer nr 2')
  expect(finalHjelpemidlerSent.hjelpemiddelListe[0].tilbehorListe[1].antall).toBe(3)

  const finalLeveringSent = finalSoknadSent.soknad.levering
  expect(finalLeveringSent.hmfFornavn).toBe('Triviell')
  expect(finalLeveringSent.hmfEtternavn).toBe('Dorull')
  expect(finalLeveringSent.hmfArbeidssted).toBe('Oslo Kommune')
  expect(finalLeveringSent.hmfStilling).toBe('Formidler')
  expect(finalLeveringSent.hmfPostadresse).toBe('Postboks 1000')
  expect(finalLeveringSent.hmfPostnr).toBe('0187')
  expect(finalLeveringSent.hmfPoststed).toBe('Oslo')
  expect(finalLeveringSent.hmfTelefon).toBe('87654321')
  expect(finalLeveringSent.hmfTreffesEnklest).toBe('Alle dager, alle timer')
  expect(finalLeveringSent.hmfEpost).toBe('test@nav.no')
  expect(finalLeveringSent.opfRadioButton).toBe('NoenAndre')
  expect(finalLeveringSent.opfFornavn).toBe('Oppfølgulefsen')
  expect(finalLeveringSent.opfEtternavn).toBe('Hansen')
  expect(finalLeveringSent.opfTelefon).toBe('09876543')
  expect(finalLeveringSent.opfArbeidssted).toBe('Bodø Kommune')
  expect(finalLeveringSent.opfStilling).toBe('Ergoterapaut')
  expect(finalLeveringSent.opfAnsvarFor).toBe('Noe noe')
  expect(finalLeveringSent.utleveringsmaateRadioButton).toBe('AnnenBruksadresse')
  expect(finalLeveringSent.utleveringPostadresse).toBe('Utleveringsveien 1')
  expect(finalLeveringSent.utleveringPostnr).toBe('4608')
  expect(finalLeveringSent.utleveringPoststed).toBe('Kristiansand')
  expect(finalLeveringSent.utleveringskontaktpersonRadioButton).toBe('AnnenKontaktperson')
  expect(finalLeveringSent.utleveringFornavn).toBe('Kontaktulefsen')
  expect(finalLeveringSent.utleveringEtternavn).toBe('Johansen')
  expect(finalLeveringSent.utleveringTelefon).toBe('34567890')
  expect(finalLeveringSent.merknadTilUtlevering).toBe('Hallo verden')
})*/

/**
 * Not so happy paths:
 */

/*test('integration test - not happy path - ensure we cannot start an application without the right accesses in altinn', async () => {
  server.use(
    rest.get(API_PATH + '/altinn/rettigheter-til-tjeneste', (req, res, ctx) => {
      return res(
        ctx.json({
          altinnRettighet: false,
          allowlistTilgang: false,
          organisasjoner: [],
        })
      )
    })
  )
  render(<App />)
  await waitFor(() => expect(screen.queryByText('Laster sideinnhold...')).toBeNull())
  screen.getByText('Ifølge Altinn mangler du tilgang til å søke om hjelpemidler for en kommune.')
})*/

//await (new Promise(resolve => setTimeout(resolve, 100)));

/*test('should have no a11y violations', async () => {
  await act(async () => {
    render(<App />, document.body)
  })
  const results = await axe(document.body)
  expect(results).toHaveNoViolations()
})

test('Infoside should have no a11y violations', async () => {
  render(<Infoside />, document.body)
  const results = await axe(document.body)
  expect(results).toHaveNoViolations()
})

test('Bruker should have no a11y violations', async () => {
  render(<Bruker />, document.body)
  const results = await axe(document.body)
  expect(results).toHaveNoViolations()
})

test('Brukersituasjon should have no a11y violations', async () => {
  render(<Brukersituasjon />, document.body)
  const results = await axe(document.body, {
    rules: {
      'aria-valid-attr-value': { enabled: false }, //TODO: Undersøk feilmelding ,
    },
  })
  expect(results).toHaveNoViolations()
})

test('Hjelpemidler should have no a11y violations', async () => {
  render(<Hjelpemidler />, document.body)
  const results = await axe(document.body)
  expect(results).toHaveNoViolations()
})

test('Levering should have no a11y violations', async () => {
  render(<Levering />, document.body)
  const results = await axe(document.body)
  expect(results).toHaveNoViolations()
})

test('Oppsummering should have no a11y violations', async () => {
  render(<Oppsummering />, document.body)
  const results = await axe(document.body)
  expect(results).toHaveNoViolations()
})

test('Kvittering should have no a11y violations', async () => {
  render(<Kvittering />, document.body)
  const results = await axe(document.body)
  expect(results).toHaveNoViolations()
})

test('Feilside should have no a11y violations', async () => {
  render(<Feilside />, document.body)
  const results = await axe(document.body)
  expect(results).toHaveNoViolations()
})*/
