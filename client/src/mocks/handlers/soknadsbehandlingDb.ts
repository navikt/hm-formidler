import { rest } from 'msw'
import { BehovsmeldingType, SoknadInfo } from '../../interfaces/SoknadInfo'
import { API_PATH } from '../../services/rest-service'
import { sakerMock } from '../mockdata/saker'

const soknadsbehandlingDbHandlers = [
  rest.get<{}, {}, SoknadInfo[]>(`${API_PATH}/soknad/innsender`, (req, res, ctx) => {
    const rolle = req.url.searchParams.get('formidler')

    let saker = sakerMock
    if (rolle === 'false') {
      saker = saker.filter((sak) => {
        return sak.behovsmeldingType === BehovsmeldingType.BESTILLING
      })
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
        fnrBruker: '12345678910',
        navnBruker: 'Vegard Beider',
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
            bekreftedeVilkår: [
              'PRAKTISKE_PROBLEMER_I_DAGLIGLIVET_V1',
              'VESENTLIG_OG_VARIG_NEDSATT_FUNKSJONSEVNE_V1',
              'KAN_IKKE_LOESES_MED_ENKLERE_HJELPEMIDLER_V1',
              'I_STAND_TIL_AA_BRUKE_HJELEPMIDLENE_V1',
            ],
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
              bytter: [],
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
        fnrBruker: '12345678910',
        navnBruker: 'Trude Luth',
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
            bekreftedeVilkår: [
              'PRAKTISKE_PROBLEMER_I_DAGLIGLIVET_V1',
              'VESENTLIG_OG_VARIG_NEDSATT_FUNKSJONSEVNE_V1',
              'KAN_IKKE_LOESES_MED_ENKLERE_HJELPEMIDLER_V1',
              'I_STAND_TIL_AA_BRUKE_HJELEPMIDLENE_V1',
            ],
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
              arsakForAntall: 'BEHOV_I_FLERE_ETASJER',
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
              bytter: [],
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
  rest.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/fec887bc-5a95-49c2-a098-f0e0f7cd73hf`, (req, res, ctx) => {
    return res(
      ctx.json({
        soknadId: 'b3b15dd3-38d8-4968-a5fa-09263deaad9f',
        datoOpprettet: '2021-04-28T18:59:13.992+00:00',
        datoOppdatert: '2021-04-28T18:59:13.992+00:00',
        status: 'GODKJENT',
        fnrBruker: '12345678910',
        navnBruker: 'Nasse Nøff',
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
            bekreftedeVilkår: [
              'PRAKTISKE_PROBLEMER_I_DAGLIGLIVET_V1',
              'VESENTLIG_OG_VARIG_NEDSATT_FUNKSJONSEVNE_V1',
              'KAN_IKKE_LOESES_MED_ENKLERE_HJELPEMIDLER_V1',
              'I_STAND_TIL_AA_BRUKE_HJELEPMIDLENE_V1',
            ],
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
              bytter: [],
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

  rest.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/5839bbf1-8842-45c0-a8fd-71718260fce4`, (req, res, ctx) => {
    return res(
      ctx.json({
        søknadId: '5839bbf1-8842-45c0-a8fd-71718260fce4',
        behovsmeldingType: 'SØKNAD',
        datoOpprettet: '2023-03-30T10:08:05.551+00:00',
        datoOppdatert: '2023-03-30T10:08:05.551+00:00',
        status: 'GODKJENT_MED_FULLMAKT',
        fnrBruker: '26848497710',
        navnBruker: 'Giovanni Varmevotti',
        søknadsdata: {
          bruker: {
            etternavn: 'Varmevotti',
            fnummer: '26848497710',
            fornavn: 'Giovanni',
            telefonNummer: '12121212',
            adresse: 'Kirkeveien 7',
            postnummer: '9590',
            poststed: 'Hasvik',
            boform: 'Hjemme',
            bruksarena: 'DAGLIGLIVET',
            funksjonsnedsettelser: ['BEVEGELSE'],
            signatur: 'FULLMAKT',
            kroppsmaal: { setebredde: null, laarlengde: null, legglengde: null, hoyde: null, kroppsvekt: null },
            brukernummer: '25657599',
            bekreftedeVilkår: [
              'PRAKTISKE_PROBLEMER_I_DAGLIGLIVET_V1',
              'VESENTLIG_OG_VARIG_NEDSATT_FUNKSJONSEVNE_V1',
              'KAN_IKKE_LOESES_MED_ENKLERE_HJELPEMIDLER_V1',
              'I_STAND_TIL_AA_BRUKE_HJELEPMIDLENE_V1',
            ],
          },
          formidler: {
            navn: 'Berømt Aktivitet',
            arbeidssted: 'NAV Oslo',
            stilling: 'Fysioterapeut',
            adresse: 'Oslo Kommune 0484 OSLO',
            telefon: '12345678',
            treffesEnklest: 'Mandag og tirsdag',
            epost: 'urokkelig@mail.no',
            kommunenavn: null,
          },
          hjelpemidler: [
            {
              antall: 1,
              arsakForAntall: null,
              arsakForAntallBegrunnelse: null,
              beskrivelse: 'Topro terskeleliminator',
              hjelpemiddelkategori: 'Terskeleliminatorer og ramper',
              hmsNr: '014123',
              tilleggsinformasjon: '',
              rangering: '1',
              utlevertFraHjelpemiddelsentralen: false,
              vilkarliste: [],
              tilbehorListe: [],
              begrunnelse: '',
              kanIkkeTilsvarande: false,
              navn: 'Topro terskeleliminator',
              rullestolInfo: null,
              elektriskRullestolInfo: null,
              personlofterInfo: null,
              utlevertInfo: { utlevertType: null, overførtFraBruker: null, annenKommentar: null },
              appInfo: null,
              varmehjelpemiddelInfo: null,
              bytter: [],
            },
            {
              antall: 1,
              arsakForAntall: null,
              arsakForAntallBegrunnelse: null,
              beskrivelse: 'Multishell str 10',
              hjelpemiddelkategori: 'Varmehjelpemidler',
              hmsNr: '252784',
              tilleggsinformasjon: '',
              rangering: '1',
              utlevertFraHjelpemiddelsentralen: false,
              vilkarliste: [],
              tilbehorListe: [],
              begrunnelse: '',
              kanIkkeTilsvarande: false,
              navn: 'Multishell str 10',
              rullestolInfo: null,
              elektriskRullestolInfo: null,
              personlofterInfo: null,
              utlevertInfo: { utlevertType: null, overførtFraBruker: null, annenKommentar: null },
              appInfo: null,
              varmehjelpemiddelInfo: {
                harHelseopplysningerFraFør: true,
                legeBekrefterDiagnose: null,
                opplysningerFraLegeOppbevaresIKommune: null,
              },
              bytter: [],
            },
            {
              antall: 1,
              arsakForAntall: null,
              arsakForAntallBegrunnelse: null,
              beskrivelse: 'Cypromed Ulvang Spesial str 34/36',
              hjelpemiddelkategori: 'Varmehjelpemidler',
              hmsNr: '252754',
              tilleggsinformasjon: '',
              rangering: '1',
              utlevertFraHjelpemiddelsentralen: false,
              vilkarliste: [],
              tilbehorListe: [],
              begrunnelse: '',
              kanIkkeTilsvarande: false,
              navn: 'Cypromed Ulvang Spesial str 34/36',
              rullestolInfo: null,
              elektriskRullestolInfo: null,
              personlofterInfo: null,
              utlevertInfo: { utlevertType: null, overførtFraBruker: null, annenKommentar: null },
              appInfo: null,
              varmehjelpemiddelInfo: {
                harHelseopplysningerFraFør: null,
                legeBekrefterDiagnose: true,
                opplysningerFraLegeOppbevaresIKommune: true,
              },
              bytter: [],
            },
          ],
          hjelpemiddelTotalAntall: 3,
          oppfolgingsansvarlig: null,
          levering: {
            kontaktPerson: { navn: null, telefon: null, kontaktpersonType: 'HJELPEMIDDELBRUKER' },
            leveringsmaate: 'FOLKEREGISTRERT_ADRESSE',
            adresse: null,
            merknad: '',
            tilleggsinfo: [],
          },
        },
        valgteÅrsaker: [],
      })
    )
  }),
  rest.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/fc8ee79a-b234-4201-8735-129c9cff8d0b`, (req, res, ctx) => {
    return res(
      ctx.json({
        søknadId: 'fc8ee79a-b234-4201-8735-129c9cff8d0b',
        behovsmeldingType: 'SØKNAD',
        datoOpprettet: '2023-02-22T11:10:03.481+00:00',
        datoOppdatert: '2023-02-22T11:10:06.639+00:00',
        status: 'GODKJENT_MED_FULLMAKT',
        fnrBruker: '26848497710',
        navnBruker: 'Rulle Stolbakken',
        søknadsdata: {
          bruker: {
            etternavn: 'Stolbakken',
            fnummer: '26848497710',
            fornavn: 'Rulle',
            telefonNummer: '12121212',
            adresse: 'Kirkeveien 7',
            postnummer: '9590',
            poststed: 'Hasvik',
            boform: 'Hjemme',
            bruksarena: 'DAGLIGLIVET',
            funksjonsnedsettelser: ['BEVEGELSE'],
            signatur: 'FULLMAKT',
            kroppsmaal: { setebredde: 1, laarlengde: 2, legglengde: 3, hoyde: 4, kroppsvekt: 5 },
            brukernummer: null,
            bekreftedeVilkår: [
              'PRAKTISKE_PROBLEMER_I_DAGLIGLIVET_V1',
              'VESENTLIG_OG_VARIG_NEDSATT_FUNKSJONSEVNE_V1',
              'KAN_IKKE_LOESES_MED_ENKLERE_HJELPEMIDLER_V1',
              'I_STAND_TIL_AA_BRUKE_HJELEPMIDLENE_V1',
            ],
          },
          formidler: {
            navn: 'Berømt Aktivitet',
            arbeidssted: 'NAV Hasvik',
            stilling: 'Ergoterapeut',
            adresse: 'HASVIK 9590 HASVIK',
            telefon: '12345678',
            treffesEnklest: 'Mandager',
            epost: 'beromt.aktivitet@mail.no',
            kommunenavn: null,
          },
          hjelpemidler: [
            {
              antall: 1,
              beskrivelse: 'Topro terskeleliminator',
              hjelpemiddelkategori: 'Terskeleliminatorer og ramper',
              hmsNr: '014123',
              tilleggsinformasjon: '',
              rangering: '1',
              utlevertFraHjelpemiddelsentralen: false,
              vilkarliste: [],
              tilbehorListe: [],
              begrunnelse: '',
              kanIkkeTilsvarande: false,
              navn: 'Topro terskeleliminator',
              rullestolInfo: null,
              elektriskRullestolInfo: null,
              personlofterInfo: null,
              utlevertInfo: { utlevertType: null, overførtFraBruker: null, annenKommentar: null },
              bytter: [],
            },
            {
              antall: 1,
              beskrivelse: 'Comet Alpine Plus',
              hjelpemiddelkategori: 'Elektriske rullestoler',
              hmsNr: '238378',
              tilleggsinformasjon: '',
              rangering: '1',
              utlevertFraHjelpemiddelsentralen: false,
              vilkarliste: [],
              tilbehorListe: [],
              begrunnelse: '',
              kanIkkeTilsvarande: false,
              navn: 'Comet Alpine Plus',
              rullestolInfo: null,
              elektriskRullestolInfo: {
                godkjenningskurs: null,
                kanBetjeneManuellStyring: true,
                kanBetjeneMotorisertStyring: false,
                ferdesSikkertITrafikk: true,
                nedsattGangfunksjon: true,
                oppbevaringOgLagring: true,
                oppbevaringInfo: null,
                kjentMedForsikring: true,
                harSpesialsykkel: true,
                plasseringAvHendel: 'Høyre',
                kabin: null,
              },
              personlofterInfo: null,
              utlevertInfo: { utlevertType: null, overførtFraBruker: null, annenKommentar: null },
              bytter: [],
            },
            {
              antall: 1,
              beskrivelse: 'Minicrosser X1 4W CAB',
              hjelpemiddelkategori: 'Elektriske rullestoler',
              hmsNr: '250470',
              tilleggsinformasjon: '',
              rangering: '1',
              utlevertFraHjelpemiddelsentralen: false,
              vilkarliste: [],
              tilbehorListe: [],
              begrunnelse: '',
              kanIkkeTilsvarande: false,
              navn: 'Minicrosser X1 4W CAB',
              rullestolInfo: null,
              elektriskRullestolInfo: {
                godkjenningskurs: null,
                kanBetjeneManuellStyring: true,
                kanBetjeneMotorisertStyring: false,
                ferdesSikkertITrafikk: true,
                nedsattGangfunksjon: true,
                oppbevaringOgLagring: true,
                oppbevaringInfo: null,
                kjentMedForsikring: true,
                harSpesialsykkel: true,
                plasseringAvHendel: 'Høyre',
                kabin: {
                  brukerOppfyllerKrav: true,
                  kanIkkeAvhjelpesMedEnklereArsak: 'BEGRENSNING_VED_FUNKSJONSNEDSETTELSE',
                  kanIkkeAvhjelpesMedEnklereBegrunnelse: null,
                  arsakForBehovBegrunnelse: null,
                },
              },
              personlofterInfo: null,
              utlevertInfo: { utlevertType: null, overførtFraBruker: null, annenKommentar: null },
              bytter: [],
            },
            {
              antall: 1,
              beskrivelse: 'MemoAssist Plus Premium',
              hjelpemiddelkategori: 'Kalendere og planleggingssystemer',
              hmsNr: '252309',
              tilleggsinformasjon: '',
              rangering: '1',
              utlevertFraHjelpemiddelsentralen: false,
              vilkarliste: [],
              tilbehorListe: [],
              begrunnelse: '',
              kanIkkeTilsvarande: false,
              navn: 'MemoAssist Plus Premium',
              rullestolInfo: null,
              elektriskRullestolInfo: null,
              personlofterInfo: null,
              utlevertInfo: {
                utlevertType: null,
                overførtFraBruker: null,
                annenKommentar: null,
              },
              appInfo: {
                brukerHarProvdProvelisens: true,
                stottepersonSkalAdministrere: true,
                stottepersonHarProvdProvelisens: false,
              },
              bytter: [],
            },
          ],
          hjelpemiddelTotalAntall: 4,
          oppfolgingsansvarlig: null,
          levering: {
            kontaktPerson: { navn: null, telefon: null, kontaktpersonType: 'HJELPEMIDDELBRUKER' },
            leveringsmaate: 'FOLKEREGISTRERT_ADRESSE',
            adresse: null,
            merknad: '',
          },
        },
        valgteÅrsaker: [],
      })
    )
  }),
  rest.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/85be32d6-052e-49e5-84c3-3e8de24687c7`, (req, res, ctx) => {
    return res(
      ctx.json({
        "søknadId": "85be32d6-052e-49e5-84c3-3e8de24687c7",
        "behovsmeldingType": "BYTTE",
        "datoOpprettet": "2023-11-20T11:25:23.209+00:00",
        "datoOppdatert": "2023-11-20T11:25:28.610+00:00",
        "status": "GODKJENT_MED_FULLMAKT",
        "fullmakt": true,
        "fnrBruker": "26848497710",
        "navnBruker": "Byttelise Bøttesen",
        "søknadsdata": {
            "bruker": {
                "etternavn": "Bøttesen",
                "fnummer": "26848497710",
                "fornavn": "Byttelise",
                "telefonNummer": "12321321",
                "adresse": "Kirkeveien 7",
                "postnummer": "9590",
                "poststed": "Hasvik",
                "boform": "Hjemme i egen bolig",
                "bruksarena": "DAGLIGLIVET",
                "funksjonsnedsettelser": [
                    "BEVEGELSE"
                ],
                "signatur": "IKKE_INNHENTET_FORDI_BYTTE",
                "kroppsmaal": {
                    "setebredde": 42,
                    "laarlengde": 45,
                    "legglengde": 38,
                    "hoyde": 175,
                    "kroppsvekt": 72
                },
                "brukernummer": "25657599",
                "bekreftedeVilkår": [
                    "PRAKTISKE_PROBLEMER_I_DAGLIGLIVET_V1",
                    "VESENTLIG_OG_VARIG_NEDSATT_FUNKSJONSEVNE_V1",
                    "KAN_IKKE_LOESES_MED_ENKLERE_HJELPEMIDLER_V1",
                    "I_STAND_TIL_AA_BRUKE_HJELEPMIDLENE_V1"
                ]
            },
            "formidler": {
                "navn": "Berømt Aktivitet",
                "arbeidssted": "NAV Oslo",
                "stilling": "Fysioterapeut",
                "adresse": "Oslo Kommune 0484 OSLO",
                "telefon": "12345678",
                "treffesEnklest": "Mandag og tirsdag",
                "epost": "urokkelig@mail.no",
                "kommunenavn": null
            },
            "hjelpemidler": [
                {
                    "antall": 1,
                    "arsakForAntall": null,
                    "arsakForAntallBegrunnelse": null,
                    "beskrivelse": "Cross 6 allround sb35 sd35-50 kort",
                    "hjelpemiddelkategori": "Manuelle rullestoler",
                    "hmsNr": "278331",
                    "tilleggsinformasjon": "",
                    "rangering": "1",
                    "utlevertFraHjelpemiddelsentralen": false,
                    "vilkarliste": [],
                    "tilbehorListe": [],
                    "begrunnelse": "",
                    "kanIkkeTilsvarande": false,
                    "navn": "Cross 6 allround sb35 sd35-50 kort",
                    "rullestolInfo": {
                        "skalBrukesIBil": true,
                        "sitteputeValg": "TrengerSittepute"
                    },
                    "elektriskRullestolInfo": null,
                    "personlofterInfo": null,
                    "utlevertInfo": {
                        "utlevertType": null,
                        "overførtFraBruker": null,
                        "annenKommentar": null
                    },
                    "appInfo": null,
                    "varmehjelpemiddelInfo": null,
                    "sengeInfo": null,
                    "elektriskVendesystemInfo": null,
                    "posisjoneringssystemInfo": null,
                    "posisjoneringsputeForBarnInfo": null,
                    "oppreisningsStolInfo": null,
                    "diverseInfo": {},
                    "bytter": [
                        {
                            "erTilsvarende": true,
                            "hmsnr": "236958",
                            "serienr": "821948",
                            "hjmNavn": "Panthera U3 Light sb33",
                            "hjmKategori": "Manuelle armdrevne rullestoler",
                            "årsak": "UTSLITT"
                        }
                    ]
                }
            ],
            "hjelpemiddelTotalAntall": 1,
            "oppfolgingsansvarlig": null,
            "levering": {
                "kontaktPerson": {
                    "navn": null,
                    "telefon": null,
                    "kontaktpersonType": "HJELPEMIDDELBRUKER"
                },
                "leveringsmaate": "FOLKEREGISTRERT_ADRESSE",
                "adresse": null,
                "merknad": "",
                "tilleggsinfo": []
            }
        },
        "valgteÅrsaker": []
    })
    )
  }),
  rest.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/:id`, (req, res, ctx) => {
    return res(
      ctx.json({
        soknadId: 'b3b15dd3-38d8-4968-a5fa-09263deaad9f',
        datoOpprettet: '2021-04-28T18:59:13.992+00:00',
        datoOppdatert: '2021-04-28T18:59:13.992+00:00',
        status: 'VENTER_GODKJENNING',
        fnrBruker: '12345678910',
        navnBruker: 'Arne Arnesen',
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
            bekreftedeVilkår: ['NEDSATT_FUNKSJON', 'STORRE_BEHOV', 'PRAKTISKE_PROBLEM'],
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
              bytter: [],
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
              bytter: [],
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
              bytter: [],
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
      })
    )
  }),
]

export default soknadsbehandlingDbHandlers
