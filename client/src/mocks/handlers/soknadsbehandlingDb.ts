import { http, HttpResponse } from 'msw'
import { SoknadInfo } from '../../interfaces/SoknadInfo'
import { API_PATH } from '../../services/rest-service'
import { sakerMock } from '../mockdata/saker'
import { BehovsmeldingType } from '../../interfaces/CommonTypes'

const soknadsbehandlingDbHandlers = [
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
    return HttpResponse.json({
      soknadId: 'b3b15dd3-38d8-4968-a5fa-09263deaad9f',
      datoOpprettet: '2021-04-28T18:59:13.992+00:00',
      datoOppdatert: '2021-04-28T18:59:13.992+00:00',
      status: 'BESTILLING_AVVIST',
      fnrBruker: '12345678910',
      navnBruker: 'Vegard Beider',
      behovsmeldingType: 'BESTILLING',
      valgteÅrsaker: ['Duplikat av en annen bestilling'],
      behovsmelding: {
        bruker: {
          fnr: '13820599335',
          navn: {
            fornavn: 'Kvadratisk',
            etternavn: 'Faktura',
          },
          signaturtype: 'FULLMAKT',
          telefon: '13820599',
          veiadresse: {
            adresse: 'Fjellvegen 69',
            postnummer: '6770',
            poststed: 'Nordfjordeid',
          },
          kommunenummer: '4649',
          brukernummer: '29117572',
          kilde: 'PDL',
          legacyopplysninger: [],
        },
        brukersituasjon: {
          vilkår: [
            {
              vilkårtype: 'KAN_IKKE_LØSES_MED_ENKLERE_HJELPEMIDLER_V1',
              tekst: {
                nb: 'Kvadratisk Faktura sitt behov kan ikke løses med enklere og rimeligere hjelpemidler, eller ved andre tiltak som ikke dekkes av Nav.',
                nn: 'Kvadratisk Faktura sitt behov kan ikkje løysast med enklare og rimelegare hjelpemiddel, eller ved andre tiltak som ikkje blir dekt av Nav.',
              },
            },
            {
              vilkårtype: 'PRAKTISKE_PROBLEMER_I_DAGLIGLIVET_V1',
              tekst: {
                nb: 'Hjelpemiddelet er nødvendig for å avhjelpe praktiske problemer i dagliglivet, eller for å bli pleid i hjemmet.',
                nn: 'Hjelpemiddelet er naudsynt for å avhjelpa praktiske problem i dagleglivet, eller for å bli pleidd i heimen.',
              },
            },
            {
              vilkårtype: 'I_STAND_TIL_Å_BRUKE_HJELPEMIDLENE_V1',
              tekst: {
                nb: 'Kvadratisk Faktura vil være i stand til å bruke hjelpemidlene. Jeg har ansvaret for at hjelpemidlene blir levert, og at nødvendig opplæring, tilpasning og montering blir gjort.',
                nn: 'Kvadratisk Faktura vil vera i stand til å bruka hjelpemidla. Eg har ansvaret for at hjelpemidla blir leverte, og at nødvendig opplæring, tilpassing og montering blir gjord.',
              },
            },
          ],
          funksjonsnedsettelser: ['BEVEGELSE'],
        },
        hjelpemidler: {
          hjelpemidler: [
            {
              antall: 1,
              produkt: {
                hmsArtNr: '267912',
                artikkelnavn: 'Classic Soft',
                iso8: '12030601',
                iso8Tittel: 'Albuekrykker',
                delkontrakttittel: '17. Krykker til voksne enkel',
                sortimentkategori: 'Ganghjelpemidler',
                rangering: 1,
              },
              tilbehør: [
                {
                  hmsArtNr: '267913',
                  navn: 'Ispigg krykke albue Classic/Classic støtdemper krone oppfell',
                  antall: 1,
                  begrunnelse: null,
                  fritakFraBegrunnelseÅrsak: 'ER_PÅ_BESTILLINGSORDNING',
                },
              ],
              bytter: [],
              bruksarenaer: ['EGET_HJEM'],
              utlevertinfo: {
                alleredeUtlevertFraHjelpemiddelsentralen: false,
                utleverttype: null,
                overførtFraBruker: null,
                annenKommentar: null,
              },
              opplysninger: [
                {
                  ledetekst: {
                    nb: 'Bruksarena',
                    nn: 'Bruksarena',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'I eget hjem.',
                        nn: 'I eigen heim.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
              ],
              varsler: [],
            },
          ],
          tilbehør: [],
          totaltAntall: 2,
        },
        levering: {
          hjelpemiddelformidler: {
            navn: {
              fornavn: 'Kvadratisk',
              etternavn: 'Faktura',
            },
            arbeidssted: 'Stad Fysioterap',
            stilling: 'Fysioterapetut',
            telefon: '13820599',
            adresse: {
              adresse: 'Fjellvegen 69',
              postnummer: '6770',
              poststed: 'NORDFJORDEID',
            },
            epost: 'kf@stad.kommune.no',
            treffesEnklest: 'man-ons kl 08-15',
          },
          oppfølgingsansvarlig: 'HJELPEMIDDELFORMIDLER',
          annenOppfølgingsansvarlig: null,
          utleveringsmåte: 'FOLKEREGISTRERT_ADRESSE',
          annenUtleveringsadresse: null,
          utleveringKontaktperson: 'HJELPEMIDDELBRUKER',
          annenKontaktperson: null,
          utleveringMerknad: '',
          hast: null,
          automatiskUtledetTilleggsinfo: [],
        },
        innsender: {
          fnr: '13820599335',
          rolle: 'FORMIDLER',
          kurs: [],
          sjekketUtlånsoversiktForKategorier: [],
        },
        id: '9deea2af-b681-4ca3-858b-bc4362b0300d',
        type: 'BESTILLING',
        innsendingsdato: '2024-09-05',
        skjemaversjon: 2,
        hjmBrukersFnr: '13820599335',
        prioritet: 'NORMAL',
      },
    })
  }),
  http.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/fec887bc-5a95-49c2-a123-f0e0f7c32df3`, () => {
    return HttpResponse.json({
      soknadId: 'b3b15dd3-38d8-4968-a5fa-09263deaad9f',
      datoOpprettet: '2021-04-28T18:59:13.992+00:00',
      datoOppdatert: '2021-04-28T18:59:13.992+00:00',
      status: 'BESTILLING_AVVIST',
      fnrBruker: '12345678910',
      navnBruker: 'Trude Luth',
      behovsmeldingType: 'BESTILLING',
      valgteÅrsaker: ['Annet'],
      behovsmelding: {
        bruker: {
          fnr: '26928698180',
          navn: {
            fornavn: 'From',
            etternavn: 'Andrik',
          },
          signaturtype: 'FULLMAKT',
          telefon: '26928698',
          veiadresse: {
            adresse: 'Fjellvegen 102 B',
            postnummer: '6770',
            poststed: 'Nordfjordeid',
          },
          kommunenummer: '4649',
          brukernummer: null,
          kilde: 'PDL',
          legacyopplysninger: [],
        },
        brukersituasjon: {
          vilkår: [
            {
              vilkårtype: 'KAN_IKKE_LØSES_MED_ENKLERE_HJELPEMIDLER_V1',
              tekst: {
                nb: 'Kvadratisk Faktura sitt behov kan ikke løses med enklere og rimeligere hjelpemidler, eller ved andre tiltak som ikke dekkes av Nav.',
                nn: 'Kvadratisk Faktura sitt behov kan ikkje løysast med enklare og rimelegare hjelpemiddel, eller ved andre tiltak som ikkje blir dekt av Nav.',
              },
            },
            {
              vilkårtype: 'PRAKTISKE_PROBLEMER_I_DAGLIGLIVET_V1',
              tekst: {
                nb: 'Hjelpemiddelet er nødvendig for å avhjelpe praktiske problemer i dagliglivet, eller for å bli pleid i hjemmet.',
                nn: 'Hjelpemiddelet er naudsynt for å avhjelpa praktiske problem i dagleglivet, eller for å bli pleidd i heimen.',
              },
            },
            {
              vilkårtype: 'I_STAND_TIL_Å_BRUKE_HJELPEMIDLENE_V1',
              tekst: {
                nb: 'Kvadratisk Faktura vil være i stand til å bruke hjelpemidlene. Jeg har ansvaret for at hjelpemidlene blir levert, og at nødvendig opplæring, tilpasning og montering blir gjort.',
                nn: 'Kvadratisk Faktura vil vera i stand til å bruka hjelpemidla. Eg har ansvaret for at hjelpemidla blir leverte, og at nødvendig opplæring, tilpassing og montering blir gjord.',
              },
            },
          ],
          funksjonsnedsettelser: ['BEVEGELSE'],
        },
        hjelpemidler: {
          hjelpemidler: [
            {
              antall: 2,
              produkt: {
                hmsArtNr: '014187',
                artikkelnavn: 'Topro terskeleliminator',
                iso8: '18301505',
                iso8Tittel: 'Terskeleliminatorer',
                delkontrakttittel:
                  '1: Terskeleliminator - påkjøring fra en side, for innendørs og begrenset utendørs bruk.',
                sortimentkategori: 'Terskeleliminatorer og ramper',
                rangering: 1,
              },
              tilbehør: [],
              bytter: [],
              bruksarenaer: ['EGET_HJEM'],
              utlevertinfo: {
                alleredeUtlevertFraHjelpemiddelsentralen: false,
                utleverttype: null,
                overførtFraBruker: null,
                annenKommentar: null,
              },
              opplysninger: [
                {
                  ledetekst: {
                    nb: 'Bruksarena',
                    nn: 'Bruksarena',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'I eget hjem.',
                        nn: 'I eigen heim.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Nødvendig med flere',
                    nn: 'Naudsynt med fleire',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Behov i flere rom',
                        nn: 'Behov i fleire rom',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
              ],
              varsler: [],
            },
            {
              antall: 3,
              produkt: {
                hmsArtNr: '014112',
                artikkelnavn: 'Topro terskeleliminator',
                iso8: '18301505',
                iso8Tittel: 'Terskeleliminatorer',
                delkontrakttittel:
                  '1: Terskeleliminator - påkjøring fra en side, for innendørs og begrenset utendørs bruk.',
                sortimentkategori: 'Terskeleliminatorer og ramper',
                rangering: 1,
              },
              tilbehør: [],
              bytter: [],
              bruksarenaer: ['EGET_HJEM'],
              utlevertinfo: {
                alleredeUtlevertFraHjelpemiddelsentralen: false,
                utleverttype: null,
                overførtFraBruker: null,
                annenKommentar: null,
              },
              opplysninger: [
                {
                  ledetekst: {
                    nb: 'Bruksarena',
                    nn: 'Bruksarena',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'I eget hjem.',
                        nn: 'I eigen heim.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Nødvendig med flere',
                    nn: 'Naudsynt med fleire',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Behov i flere etasjer',
                        nn: 'Behov i fleire etasjar',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
              ],
              varsler: [],
            },
          ],
          tilbehør: [],
          totaltAntall: 5,
        },
        levering: {
          hjelpemiddelformidler: {
            navn: {
              fornavn: 'Kvadratisk',
              etternavn: 'Faktura',
            },
            arbeidssted: 'Stavanger Ergo- og Fysioterapi',
            stilling: 'Fysioterapetut',
            telefon: '13820599',
            adresse: {
              adresse: 'Fjellvegen 72',
              postnummer: '4027',
              poststed: 'STAVANGER',
            },
            epost: 'kf@stavanger.kommune.no',
            treffesEnklest: 'man-ons kl 08-15',
          },
          oppfølgingsansvarlig: 'HJELPEMIDDELFORMIDLER',
          annenOppfølgingsansvarlig: null,
          utleveringsmåte: 'FOLKEREGISTRERT_ADRESSE',
          annenUtleveringsadresse: null,
          utleveringKontaktperson: 'HJELPEMIDDELFORMIDLER',
          annenKontaktperson: null,
          utleveringMerknad: '',
          hast: null,
          automatiskUtledetTilleggsinfo: [],
        },
        innsender: {
          fnr: '13820599335',
          rolle: 'FORMIDLER',
          kurs: [],
          sjekketUtlånsoversiktForKategorier: [],
        },
        id: '2e295029-1e89-470f-a311-d15848917b30',
        type: 'BESTILLING',
        innsendingsdato: '2024-09-05',
        skjemaversjon: 2,
        hjmBrukersFnr: '26928698180',
        prioritet: 'NORMAL',
      },
    })
  }),
  http.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/fec887bc-5a95-49c2-a098-f0e0f7cd73hf`, () => {
    return HttpResponse.json({
      soknadId: 'b3b15dd3-38d8-4968-a5fa-09263deaad9f',
      datoOpprettet: '2021-04-28T18:59:13.992+00:00',
      datoOppdatert: '2021-04-28T18:59:13.992+00:00',
      status: 'GODKJENT',
      fnrBruker: '12345678910',
      navnBruker: 'Nasse Nøff',
      behovsmeldingType: 'BESTILLING',
      valgteÅrsaker: [],
      behovsmelding: {
        bruker: {
          fnr: '26928698180',
          navn: {
            fornavn: 'From',
            etternavn: 'Andrik',
          },
          signaturtype: 'FULLMAKT',
          telefon: '26928698',
          veiadresse: {
            adresse: 'Fjellvegen 102 B',
            postnummer: '6770',
            poststed: 'Nordfjordeid',
          },
          kommunenummer: '4649',
          brukernummer: null,
          kilde: 'PDL',
          legacyopplysninger: [],
        },
        brukersituasjon: {
          vilkår: [
            {
              vilkårtype: 'KAN_IKKE_LØSES_MED_ENKLERE_HJELPEMIDLER_V1',
              tekst: {
                nb: 'Kvadratisk Faktura sitt behov kan ikke løses med enklere og rimeligere hjelpemidler, eller ved andre tiltak som ikke dekkes av Nav.',
                nn: 'Kvadratisk Faktura sitt behov kan ikkje løysast med enklare og rimelegare hjelpemiddel, eller ved andre tiltak som ikkje blir dekt av Nav.',
              },
            },
            {
              vilkårtype: 'PRAKTISKE_PROBLEMER_I_DAGLIGLIVET_V1',
              tekst: {
                nb: 'Hjelpemiddelet er nødvendig for å avhjelpe praktiske problemer i dagliglivet, eller for å bli pleid i hjemmet.',
                nn: 'Hjelpemiddelet er naudsynt for å avhjelpa praktiske problem i dagleglivet, eller for å bli pleidd i heimen.',
              },
            },
            {
              vilkårtype: 'I_STAND_TIL_Å_BRUKE_HJELPEMIDLENE_V1',
              tekst: {
                nb: 'Kvadratisk Faktura vil være i stand til å bruke hjelpemidlene. Jeg har ansvaret for at hjelpemidlene blir levert, og at nødvendig opplæring, tilpasning og montering blir gjort.',
                nn: 'Kvadratisk Faktura vil vera i stand til å bruka hjelpemidla. Eg har ansvaret for at hjelpemidla blir leverte, og at nødvendig opplæring, tilpassing og montering blir gjord.',
              },
            },
          ],
          funksjonsnedsettelser: ['BEVEGELSE'],
        },
        hjelpemidler: {
          hjelpemidler: [
            {
              antall: 1,
              produkt: {
                hmsArtNr: '297596',
                artikkelnavn: 'Toalettstol TS130',
                iso8: '09120302',
                iso8Tittel: 'Flyttbare toalettstoler',
                delkontrakttittel: '1: Toalettstol',
                sortimentkategori: 'Hygienehjelpemidler',
                rangering: 1,
              },
              tilbehør: [],
              bytter: [],
              bruksarenaer: ['OMSORGSBOLIG_BOFELLESKAP_SERVICEBOLIG', 'EGET_HJEM'],
              utlevertinfo: {
                alleredeUtlevertFraHjelpemiddelsentralen: false,
                utleverttype: null,
                overførtFraBruker: null,
                annenKommentar: null,
              },
              opplysninger: [
                {
                  ledetekst: {
                    nb: 'Bruksarena',
                    nn: 'Bruksarena',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'I omsorgsbolig, bofellesskap eller servicebolig.',
                        nn: 'I omsorgsbustad, bufellesskap eller servicebustad.',
                      },
                      begrepsforklaring: null,
                    },
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'I eget hjem.',
                        nn: 'I eigen heim.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
              ],
              varsler: [],
            },
            {
              antall: 3,
              produkt: {
                hmsArtNr: '267912',
                artikkelnavn: 'Classic Soft',
                iso8: '12030601',
                iso8Tittel: 'Albuekrykker',
                delkontrakttittel: '17. Krykker til voksne enkel',
                sortimentkategori: 'Ganghjelpemidler',
                rangering: 1,
              },
              tilbehør: [
                {
                  hmsArtNr: '267914',
                  navn: 'Ispigg krykke albue Classic/Classic støtdemper pigg oppfell',
                  antall: 2,
                  begrunnelse: null,
                  fritakFraBegrunnelseÅrsak: 'ER_PÅ_BESTILLINGSORDNING',
                },
                {
                  hmsArtNr: '267913',
                  navn: 'Ispigg krykke albue Classic/Classic støtdemper krone oppfell',
                  antall: 1,
                  begrunnelse: null,
                  fritakFraBegrunnelseÅrsak: 'ER_PÅ_BESTILLINGSORDNING',
                },
              ],
              bytter: [],
              bruksarenaer: ['INSTITUSJON'],
              utlevertinfo: {
                alleredeUtlevertFraHjelpemiddelsentralen: false,
                utleverttype: null,
                overførtFraBruker: null,
                annenKommentar: null,
              },
              opplysninger: [
                {
                  ledetekst: {
                    nb: 'Bruksarena',
                    nn: 'Bruksarena',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'På institusjon som sykehjem.',
                        nn: 'På institusjon som sjukeheim.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
              ],
              varsler: [],
            },
          ],
          tilbehør: [],
          totaltAntall: 7,
        },
        levering: {
          hjelpemiddelformidler: {
            navn: {
              fornavn: 'Kvadratisk',
              etternavn: 'Faktura',
            },
            arbeidssted: 'Stavanger Ergo- og Fysioterapi',
            stilling: 'Fysioterapetut',
            telefon: '13820599',
            adresse: {
              adresse: 'Fjellvegen 72',
              postnummer: '4027',
              poststed: 'STAVANGER',
            },
            epost: 'kf@stavanger.kommune.no',
            treffesEnklest: 'man-ons kl 08-15',
          },
          oppfølgingsansvarlig: 'HJELPEMIDDELFORMIDLER',
          annenOppfølgingsansvarlig: null,
          utleveringsmåte: 'FOLKEREGISTRERT_ADRESSE',
          annenUtleveringsadresse: null,
          utleveringKontaktperson: 'HJELPEMIDDELFORMIDLER',
          annenKontaktperson: null,
          utleveringMerknad: '',
          hast: null,
          automatiskUtledetTilleggsinfo: [],
        },
        innsender: {
          fnr: '13820599335',
          rolle: 'BESTILLER',
          kurs: [],
          sjekketUtlånsoversiktForKategorier: [],
        },
        id: 'ab597d11-c090-4f18-a622-08792a3db894',
        type: 'BESTILLING',
        innsendingsdato: '2024-09-05',
        skjemaversjon: 2,
        hjmBrukersFnr: '26928698180',
        prioritet: 'NORMAL',
      },
    })
  }),
  http.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/5839bbf1-8842-45c0-a8fd-71718260fce4`, () => {
    return HttpResponse.json({
      søknadId: '5839bbf1-8842-45c0-a8fd-71718260fce4',
      behovsmeldingType: 'SØKNAD',
      datoOpprettet: '2023-03-30T10:08:05.551+00:00',
      datoOppdatert: '2023-03-30T10:08:05.551+00:00',
      status: 'GODKJENT_MED_FULLMAKT',
      fnrBruker: '26848497710',
      navnBruker: 'Giovanni Varmevotti',
      behovsmelding: {
        bruker: {
          fnr: '13820599335',
          navn: {
            fornavn: 'Kvadratisk',
            etternavn: 'Faktura',
          },
          signaturtype: 'FULLMAKT',
          telefon: '13820599',
          veiadresse: {
            adresse: 'Fjellvegen 69',
            postnummer: '6770',
            poststed: 'Nordfjordeid',
          },
          kommunenummer: '4649',
          brukernummer: '29117572',
          kilde: 'PDL',
          legacyopplysninger: [],
        },
        brukersituasjon: {
          vilkår: [
            {
              vilkårtype: 'KAN_IKKE_LØSES_MED_ENKLERE_HJELPEMIDLER_V1',
              tekst: {
                nb: 'Kvadratisk Faktura sitt behov kan ikke løses med enklere og rimeligere hjelpemidler, eller ved andre tiltak som ikke dekkes av Nav.',
                nn: 'Kvadratisk Faktura sitt behov kan ikkje løysast med enklare og rimelegare hjelpemiddel, eller ved andre tiltak som ikkje blir dekt av Nav.',
              },
            },
            {
              vilkårtype: 'PRAKTISKE_PROBLEMER_I_DAGLIGLIVET_V1',
              tekst: {
                nb: 'Hjelpemiddelet er nødvendig for å avhjelpe praktiske problemer i dagliglivet, eller for å bli pleid i hjemmet.',
                nn: 'Hjelpemiddelet er naudsynt for å avhjelpa praktiske problem i dagleglivet, eller for å bli pleidd i heimen.',
              },
            },
            {
              vilkårtype: 'I_STAND_TIL_Å_BRUKE_HJELPEMIDLENE_V1',
              tekst: {
                nb: 'Kvadratisk Faktura vil være i stand til å bruke hjelpemidlene. Jeg har ansvaret for at hjelpemidlene blir levert, og at nødvendig opplæring, tilpasning og montering blir gjort.',
                nn: 'Kvadratisk Faktura vil vera i stand til å bruka hjelpemidla. Eg har ansvaret for at hjelpemidla blir leverte, og at nødvendig opplæring, tilpassing og montering blir gjord.',
              },
            },
          ],
          funksjonsnedsettelser: ['BEVEGELSE'],
        },
        hjelpemidler: {
          hjelpemidler: [
            {
              antall: 1,
              produkt: {
                hmsArtNr: '252917',
                artikkelnavn: 'Bowie str 30/31',
                iso8: '09062101',
                iso8Tittel: 'Fot-, hæl- og tåbeskyttere',
                delkontrakttittel: '14: Varmesåler til barn og voksne',
                sortimentkategori: 'Varmehjelpemidler',
                rangering: 1,
              },
              tilbehør: [],
              bytter: [],
              bruksarenaer: ['EGET_HJEM'],
              utlevertinfo: {
                alleredeUtlevertFraHjelpemiddelsentralen: false,
                utleverttype: null,
                overførtFraBruker: null,
                annenKommentar: null,
              },
              opplysninger: [
                {
                  ledetekst: {
                    nb: 'Bruksarena',
                    nn: 'Bruksarena',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'I eget hjem.',
                        nn: 'I eigen heim.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Formidler bekrefter at',
                    nn: 'Formidlar stadfestar at',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Kommunen har opplysninger fra lege om diagnosen til bruker. Legen bekrefter at diagnosen gir nedsatt blodgjennomstrømning i hender eller føtter. Når bruker utsettes for kulde så får hender eller føtter unormal blekhet og cyanose.',
                        nn: 'Kommunen har opplysningar frå lege om diagnosen til brukar. Legen stadfestar at diagnosen gir nedsett blodgjennomstrømning i hender eller føter. Når brukar blir utsett for kulde så får hender eller føter unormal bleikheit og cyanose.',
                      },
                      begrepsforklaring: null,
                    },
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Opplysningene fra lege oppbevares i kommunen.',
                        nn: 'Opplysningane frå lege blir oppbevarte i kommunen.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
              ],
              varsler: [],
            },
            {
              antall: 1,
              produkt: {
                hmsArtNr: '252784',
                artikkelnavn: 'Multishell str 10',
                iso8: '09061501',
                iso8Tittel: 'Håndbeskyttere',
                delkontrakttittel: '1: Varmevotter til voksne',
                sortimentkategori: 'Varmehjelpemidler',
                rangering: 1,
              },
              tilbehør: [],
              bytter: [],
              bruksarenaer: ['EGET_HJEM', 'GRUNN_ELLER_VIDEREGÅENDE_SKOLE'],
              utlevertinfo: {
                alleredeUtlevertFraHjelpemiddelsentralen: false,
                utleverttype: null,
                overførtFraBruker: null,
                annenKommentar: null,
              },
              opplysninger: [
                {
                  ledetekst: {
                    nb: 'Bruksarena',
                    nn: 'Bruksarena',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'I eget hjem.',
                        nn: 'I eigen heim.',
                      },
                      begrepsforklaring: null,
                    },
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'På skolen som grunnskole eller videregående skole.',
                        nn: 'På skulen som grunnskule eller vidaregåande skule.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Formidler bekrefter at',
                    nn: 'Formidlar stadfestar at',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Kommunen har opplysninger fra lege om diagnosen til bruker. Legen bekrefter at diagnosen gir nedsatt blodgjennomstrømning i hender eller føtter. Når bruker utsettes for kulde så får hender eller føtter unormal blekhet og cyanose.',
                        nn: 'Kommunen har opplysningar frå lege om diagnosen til brukar. Legen stadfestar at diagnosen gir nedsett blodgjennomstrømning i hender eller føter. Når brukar blir utsett for kulde så får hender eller føter unormal bleikheit og cyanose.',
                      },
                      begrepsforklaring: null,
                    },
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Opplysningene fra lege oppbevares i kommunen.',
                        nn: 'Opplysningane frå lege blir oppbevarte i kommunen.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
              ],
              varsler: [],
            },
          ],
          tilbehør: [],
          totaltAntall: 2,
        },
        levering: {
          hjelpemiddelformidler: {
            navn: {
              fornavn: 'Kvadratisk',
              etternavn: 'Faktura',
            },
            arbeidssted: 'Stavanger Ergo- og Fysioterapi',
            stilling: 'Fysioterapetut',
            telefon: '13820599',
            adresse: {
              adresse: 'Fjellvegen 72',
              postnummer: '4027',
              poststed: 'STAVANGER',
            },
            epost: 'kf@stavanger.kommune.no',
            treffesEnklest: 'man-ons kl 08-15',
          },
          oppfølgingsansvarlig: 'HJELPEMIDDELFORMIDLER',
          annenOppfølgingsansvarlig: null,
          utleveringsmåte: 'FOLKEREGISTRERT_ADRESSE',
          annenUtleveringsadresse: null,
          utleveringKontaktperson: 'HJELPEMIDDELBRUKER',
          annenKontaktperson: null,
          utleveringMerknad: '',
          hast: null,
          automatiskUtledetTilleggsinfo: [],
        },
        innsender: {
          fnr: '13820599335',
          rolle: 'FORMIDLER',
          kurs: [],
          sjekketUtlånsoversiktForKategorier: [],
        },
        id: '6d82eda5-b709-4b27-b747-42a88dc029b2',
        type: 'SØKNAD',
        innsendingsdato: '2024-09-05',
        skjemaversjon: 2,
        hjmBrukersFnr: '13820599335',
        prioritet: 'NORMAL',
      },
      valgteÅrsaker: [],
    })
  }),
  http.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/fc8ee79a-b234-4201-8735-129c9cff8d0b`, () => {
    return HttpResponse.json({
      søknadId: 'fc8ee79a-b234-4201-8735-129c9cff8d0b',
      behovsmeldingType: 'SØKNAD',
      datoOpprettet: '2023-02-22T11:10:03.481+00:00',
      datoOppdatert: '2023-02-22T11:10:06.639+00:00',
      status: 'GODKJENT_MED_FULLMAKT',
      fnrBruker: '26848497710',
      navnBruker: 'Rulle Stolbakken',
      behovsmelding: {
        bruker: {
          fnr: '13820599335',
          navn: {
            fornavn: 'Kvadratisk',
            etternavn: 'Faktura',
          },
          signaturtype: 'FULLMAKT',
          veiadresse: {
            adresse: 'Fjellvegen 69',
            postnummer: '6770',
            poststed: 'Nordfjordeid',
          },
          kommunenummer: '4649',
          brukernummer: '29117572',
          kilde: 'PDL',
          legacyopplysninger: [],
        },
        brukersituasjon: {
          vilkår: [
            {
              vilkårtype: 'KAN_IKKE_LØSES_MED_ENKLERE_HJELPEMIDLER_V1',
              tekst: {
                nb: 'Kvadratisk Faktura sitt behov kan ikke løses med enklere og rimeligere hjelpemidler, eller ved andre tiltak som ikke dekkes av Nav.',
                nn: 'Kvadratisk Faktura sitt behov kan ikkje løysast med enklare og rimelegare hjelpemiddel, eller ved andre tiltak som ikkje blir dekt av Nav.',
              },
            },
            {
              vilkårtype: 'PRAKTISKE_PROBLEMER_I_DAGLIGLIVET_V1',
              tekst: {
                nb: 'Hjelpemiddelet er nødvendig for å avhjelpe praktiske problemer i dagliglivet, eller for å bli pleid i hjemmet.',
                nn: 'Hjelpemiddelet er naudsynt for å avhjelpa praktiske problem i dagleglivet, eller for å bli pleidd i heimen.',
              },
            },
            {
              vilkårtype: 'I_STAND_TIL_Å_BRUKE_HJELPEMIDLENE_V1',
              tekst: {
                nb: 'Kvadratisk Faktura vil være i stand til å bruke hjelpemidlene. Jeg har ansvaret for at hjelpemidlene blir levert, og at nødvendig opplæring, tilpasning og montering blir gjort.',
                nn: 'Kvadratisk Faktura vil vera i stand til å bruka hjelpemidla. Eg har ansvaret for at hjelpemidla blir leverte, og at nødvendig opplæring, tilpassing og montering blir gjord.',
              },
            },
          ],
          funksjonsnedsettelser: ['BEVEGELSE'],
          funksjonsbeskrivelse: {
            innbyggersVarigeFunksjonsnedsettelse: 'ANNEN_VARIG_DIAGNOSE',
            diagnose: 'ALS',
            beskrivelse: 'Har blitt veldig dårlig til beins.',
          },
        },
        hjelpemidler: {
          hjelpemidler: [
            {
              antall: 1,
              produkt: {
                hmsArtNr: '326541',
                artikkelnavn: 'Cross 6 sb38 sd36-49 kort',
                iso8: '12220302',
                iso8Tittel: 'Manuelle rullestoler allround',
                delkontrakttittel: '6. Allround rullestol med sammenleggbar ramme og avtakbare benstøtter',
                sortimentkategori: 'Manuelle rullestoler',
                rangering: 1,
              },
              tilbehør: [],
              bytter: [],
              bruksarenaer: ['OMSORGSBOLIG_BOFELLESKAP_SERVICEBOLIG', 'EGET_HJEM'],
              utlevertinfo: {
                alleredeUtlevertFraHjelpemiddelsentralen: false,
                utleverttype: null,
                overførtFraBruker: null,
                annenKommentar: null,
              },
              opplysninger: [
                {
                  ledetekst: {
                    nb: 'Bruksarena',
                    nn: 'Bruksarena',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'I omsorgsbolig, bofellesskap eller servicebolig.',
                        nn: 'I omsorgsbustad, bufellesskap eller servicebustad.',
                      },
                      begrepsforklaring: null,
                    },
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'I eget hjem.',
                        nn: 'I eigen heim.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Kan ikke ha tilsvarende fordi',
                    nn: 'Kan ikkje ha tilsvarande fordi',
                  },
                  innhold: [
                    {
                      fritekst: 'Bruker får vondt i ryggen av andre rullestoler som hun har prøvd.',
                      forhåndsdefinertTekst: null,
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Bil',
                    nn: 'Bil',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Rullestolen skal brukes som sete i bil',
                        nn: 'Rullestolen skal brukast som sete i bil',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Sittepute',
                    nn: 'Sitjepute',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Har sittepute fra før',
                        nn: 'Har sitjepute frå før',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Kroppsmål',
                    nn: 'Kroppsmål',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Setebredde: 50 cm, legglengde: 46 cm, lårlengde: 45 cm, høyde: 182 cm, kroppsvekt: 80 kg.',
                        nn: 'Setebredde: 50 cm, legglengde: 46 cm, lårlengde: 45 cm, høgde: 182 cm, kroppsvekt: 80 kg.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
              ],
              varsler: [],
            },
            {
              antall: 1,
              produkt: {
                hmsArtNr: '301998',
                artikkelnavn: 'Minicrosser X2 kabin 4W 15 km/t',
                iso8: '12230301',
                iso8Tittel: 'Elektriske rullestoler manuell styring utebruk',
                delkontrakttittel: '6: Manuell styring for utendørs bruk - 4 hjul - voksne - kabin ',
                sortimentkategori: 'Elektriske rullestoler',
                rangering: 2,
              },
              tilbehør: [],
              bytter: [],
              bruksarenaer: ['GRUNN_ELLER_VIDEREGÅENDE_SKOLE'],
              utlevertinfo: {
                alleredeUtlevertFraHjelpemiddelsentralen: false,
                utleverttype: null,
                overførtFraBruker: null,
                annenKommentar: null,
              },
              opplysninger: [
                {
                  ledetekst: {
                    nb: 'Bruksarena',
                    nn: 'Bruksarena',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'På skolen som grunnskole eller videregående skole.',
                        nn: 'På skulen som grunnskule eller vidaregåande skule.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Begrunnelse for lavere rangering',
                    nn: 'Grunngiving for lågare rangering',
                  },
                  innhold: [
                    {
                      fritekst: 'Trenger 15km/t ers for å holde følge med venner på elsparkesykkel.',
                      forhåndsdefinertTekst: null,
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Krav om kurs',
                    nn: 'Krav om kurs',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Kommunal formidler har svart at godkjenningskurs elektrisk rullestol (del 1 og del 2) er gjennomført. Dokumentasjon av kurs sjekkes i behandling av saken.',
                        nn: 'Kommunal formidlar har svart at godkjenningskurs elektrisk rullestol (del 1 og del 2) er gjennomført. Dokumentasjon av kurs blir sjekka i behandling av saka.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Behov for kabin',
                    nn: 'Behov for kabin',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Bruker har en varig funksjonsnedsettelse som gir kuldeintoleranse, og som fører til at rullestolen ikke kan benyttes uten kabin',
                        nn: 'Brukar har ei varig funksjonsnedsetjing som gir kuldeintoleranse, og som fører til at rullestolen ikkje kan nyttast utan kabin',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Enklere løsning er vurdert',
                    nn: 'Enklare løysing er vurdert',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Brukeren har luftveisproblemer og kan ikke bruke varmemaske',
                        nn: 'Brukaren har luftvegsproblem og kan ikkje bruka varmemaske',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Betjene styring',
                    nn: 'Betene styring',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Brukeren er vurdert til å kunne betjene elektrisk rullestol med manuell styring',
                        nn: 'Brukaren er vurdert til å kunne betene elektrisk rullestol med manuell styring',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Trafikk',
                    nn: 'Trafikk',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Brukeren er vurdert til å kunne ferdes sikkert i trafikken',
                        nn: 'Brukaren er vurdert til å kunne ferdast sikkert i trafikken',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Nedsatt gangfunksjon',
                    nn: 'Nedsatt gangfunksjon',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Brukeren skal benytte den elektriske rullestolen til å avhjelpe en vesentlig nedsatt gangfunksjon. Den skal ikke brukes til et generelt transportbehov.',
                        nn: 'Brukaren skal benytte den elektriske rullestolen til å avhjelpe ein vesentlig nedsatt gangfunksjon. Den skal ikkje brukes til eit generelt transportbehov.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Oppbevaring og lading',
                    nn: 'Oppbevaring og lading',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Bruker har egnet sted for oppbevaring og lading',
                        nn: 'Brukar har eigna sted for oppbevaring og lading',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Forsikringsvilkår',
                    nn: 'Forsikringsvilkår',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Bruker gjøres kjent med forsikringsvilkårene i forbindelse med opplæringen',
                        nn: 'Brukar blir gjorde kjent med forsikringsvilkåra i samband med opplæringa',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Spesialsykkel',
                    nn: 'Spesialsykkel',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Bruker har ikke spesialsykkel fra før',
                        nn: 'Brukar har ikkje spesialsykkel frå før',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Gasshendel',
                    nn: 'Gasshendel',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Skal plasseres på venstre side',
                        nn: 'Skal plasserast på venstre side',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Kroppsmål',
                    nn: 'Kroppsmål',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Setebredde: 50 cm, legglengde: 46 cm, lårlengde: 45 cm, høyde: 182 cm, kroppsvekt: 80 kg.',
                        nn: 'Setebredde: 50 cm, legglengde: 46 cm, lårlengde: 45 cm, høgde: 182 cm, kroppsvekt: 80 kg.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
              ],
              varsler: [],
            },
          ],
          tilbehør: [],
          totaltAntall: 2,
        },
        levering: {
          hjelpemiddelformidler: {
            navn: {
              fornavn: 'Kvadratisk',
              etternavn: 'Faktura',
            },
            arbeidssted: 'Stavanger Ergo- og Fysioterapi',
            stilling: 'Fysioterapetut',
            telefon: '13820599',
            adresse: {
              adresse: 'Fjellvegen 72',
              postnummer: '4027',
              poststed: 'STAVANGER',
            },
            epost: 'kf@stavanger.kommune.no',
            treffesEnklest: 'man-ons kl 08-15',
          },
          oppfølgingsansvarlig: 'HJELPEMIDDELFORMIDLER',
          annenOppfølgingsansvarlig: null,
          utleveringsmåte: 'HJELPEMIDDELSENTRALEN',
          annenUtleveringsadresse: null,
          utleveringKontaktperson: 'HJELPEMIDDELBRUKER',
          annenKontaktperson: null,
          utleveringMerknad: 'Bruker henter hjelpemidlene på HMS',
          hast: {
            hasteårsaker: ['UTSKRIVING_FRA_SYKEHUS_SOM_IKKE_KAN_PLANLEGGES_V3'],
            hastBegrunnelse: null,
          },
          automatiskUtledetTilleggsinfo: [],
        },
        innsender: {
          fnr: '13820599335',
          rolle: 'FORMIDLER',
          kurs: [],
          sjekketUtlånsoversiktForKategorier: [],
        },
        id: 'c4ced8de-3aa1-4989-8903-b631b1d27526',
        type: 'SØKNAD',
        innsendingsdato: '2024-09-05',
        skjemaversjon: 2,
        hjmBrukersFnr: '13820599335',
        prioritet: 'HAST',
      },
      valgteÅrsaker: [],
    })
  }),
  http.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/85be32d6-052e-49e5-84c3-3e8de24687c7`, () => {
    return HttpResponse.json({
      søknadId: '85be32d6-052e-49e5-84c3-3e8de24687c7',
      behovsmeldingType: 'BYTTE',
      datoOpprettet: '2023-11-20T11:25:23.209+00:00',
      datoOppdatert: '2023-11-20T11:25:28.610+00:00',
      status: 'INNSENDT_FULLMAKT_IKKE_PÅKREVD',
      fullmakt: true,
      fnrBruker: '26848497710',
      navnBruker: 'Byttelise Bøttesen',
      behovsmelding: {
        bruker: {
          fnr: '26848497710',
          navn: {
            fornavn: 'Berømt',
            etternavn: 'Aktivitet',
          },
          signaturtype: 'IKKE_INNHENTET_FORDI_BYTTE',
          telefon: '26848497',
          veiadresse: {
            adresse: 'Kirkeveien 7',
            postnummer: '9590',
            poststed: 'Hasvik',
          },
          kommunenummer: '5616',
          brukernummer: '29109650',
          kilde: 'PDL',
          legacyopplysninger: [],
        },
        brukersituasjon: {
          vilkår: [
            {
              vilkårtype: 'KAN_IKKE_LØSES_MED_ENKLERE_HJELPEMIDLER_V1',
              tekst: {
                nb: 'Kvadratisk Faktura sitt behov kan ikke løses med enklere og rimeligere hjelpemidler, eller ved andre tiltak som ikke dekkes av Nav.',
                nn: 'Kvadratisk Faktura sitt behov kan ikkje løysast med enklare og rimelegare hjelpemiddel, eller ved andre tiltak som ikkje blir dekt av Nav.',
              },
            },
            {
              vilkårtype: 'PRAKTISKE_PROBLEMER_I_DAGLIGLIVET_V1',
              tekst: {
                nb: 'Hjelpemiddelet er nødvendig for å avhjelpe praktiske problemer i dagliglivet, eller for å bli pleid i hjemmet.',
                nn: 'Hjelpemiddelet er naudsynt for å avhjelpa praktiske problem i dagleglivet, eller for å bli pleidd i heimen.',
              },
            },
            {
              vilkårtype: 'I_STAND_TIL_Å_BRUKE_HJELPEMIDLENE_V1',
              tekst: {
                nb: 'Kvadratisk Faktura vil være i stand til å bruke hjelpemidlene. Jeg har ansvaret for at hjelpemidlene blir levert, og at nødvendig opplæring, tilpasning og montering blir gjort.',
                nn: 'Kvadratisk Faktura vil vera i stand til å bruka hjelpemidla. Eg har ansvaret for at hjelpemidla blir leverte, og at nødvendig opplæring, tilpassing og montering blir gjord.',
              },
            },
          ],
          funksjonsnedsettelser: ['BEVEGELSE'],
        },
        hjelpemidler: {
          hjelpemidler: [
            {
              antall: 1,
              produkt: {
                hmsArtNr: '247623',
                artikkelnavn: 'Jay Easy Visco Cushion 38x44 buet',
                iso8: '18100601',
                iso8Tittel: 'Sitteputer for komfort',
                delkontrakttittel: '2: Sittepute som ikke kan innstilles - lav modell',
                sortimentkategori: 'Sitteputer',
                rangering: 1,
              },
              tilbehør: [],
              bytter: [
                {
                  erTilsvarende: true,
                  hmsnr: '247623',
                  serienr: null,
                  hjmNavn: 'Jay Easy Visco Cushion 38x44 buet',
                  hjmKategori: 'Seteputer og sitteunderlag',
                  årsak: 'UTSLITT',
                },
              ],
              bruksarenaer: ['EGET_HJEM'],
              utlevertinfo: {
                alleredeUtlevertFraHjelpemiddelsentralen: false,
                utleverttype: null,
                overførtFraBruker: null,
                annenKommentar: null,
              },
              opplysninger: [
                {
                  ledetekst: {
                    nb: 'Bruksarena',
                    nn: 'Bruksarena',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'I eget hjem.',
                        nn: 'I eigen heim.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Behov',
                    nn: 'Behov',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Forebygge trykksår',
                        nn: 'Forebygge trykksår',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
              ],
              varsler: [],
            },
          ],
          tilbehør: [],
          totaltAntall: 1,
        },
        levering: {
          hjelpemiddelformidler: {
            navn: {
              fornavn: 'Berømt',
              etternavn: 'Aktivitet',
            },
            arbeidssted: 'Nav Oslo',
            stilling: 'Fysioterapeut',
            telefon: '12345678',
            adresse: {
              adresse: 'Oslo Kommune',
              postnummer: '0484',
              poststed: 'OSLO',
            },
            epost: 'urokkelig@mail.no',
            treffesEnklest: 'Mandag og tirsdag',
          },
          oppfølgingsansvarlig: 'HJELPEMIDDELFORMIDLER',
          annenOppfølgingsansvarlig: null,
          utleveringsmåte: 'FOLKEREGISTRERT_ADRESSE',
          annenUtleveringsadresse: null,
          utleveringKontaktperson: 'HJELPEMIDDELBRUKER',
          annenKontaktperson: null,
          utleveringMerknad: '',
          hast: null,
          automatiskUtledetTilleggsinfo: [],
        },
        innsender: {
          fnr: '26848497710',
          rolle: 'FORMIDLER',
          kurs: [
            {
              id: 3,
              title: 'Elektrisk seng',
              kilde: 'kunnskapsbanken',
            },
            {
              id: 1,
              title: 'El-rullestol',
              kilde: 'kunnskapsbanken',
            },
            {
              id: 4,
              title: 'Bestilling',
              kilde: 'kunnskapsbanken',
            },
          ],
          sjekketUtlånsoversiktForKategorier: ['122303', '181006'],
        },
        id: '3c3ccc5b-e185-4480-9e4f-5018bb6c058e',
        type: 'BYTTE',
        innsendingsdato: '2024-09-05',
        skjemaversjon: 2,
        hjmBrukersFnr: '26848497710',
        prioritet: 'NORMAL',
      },
      valgteÅrsaker: [],
    })
  }),
  http.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/a293fae9-262a-4fad-b7be-35715b953511`, () => {
    return HttpResponse.json({
      søknadId: 'a293fae9-262a-4fad-b7be-35715b953511',
      behovsmeldingType: 'SØKNAD',
      datoOpprettet: '2024-01-04T14:06:18.103+00:00',
      datoOppdatert: '2024-01-04T14:06:22.236+00:00',
      status: 'GODKJENT_MED_FULLMAKT',
      fullmakt: true,
      fnrBruker: '13820599335',
      navnBruker: 'Rulla Tor',
      behovsmelding: {
        bruker: {
          fnr: '26848497710',
          navn: {
            fornavn: 'Berømt',
            etternavn: 'Aktivitet',
          },
          signaturtype: 'FULLMAKT',
          telefon: '26848497',
          veiadresse: {
            adresse: 'Kirkeveien 7',
            postnummer: '9590',
            poststed: 'Hasvik',
          },
          kommunenummer: '5616',
          brukernummer: '29109650',
          kilde: 'PDL',
          legacyopplysninger: [],
        },
        brukersituasjon: {
          vilkår: [
            {
              vilkårtype: 'KAN_IKKE_LØSES_MED_ENKLERE_HJELPEMIDLER_V1',
              tekst: {
                nb: 'Kvadratisk Faktura sitt behov kan ikke løses med enklere og rimeligere hjelpemidler, eller ved andre tiltak som ikke dekkes av Nav.',
                nn: 'Kvadratisk Faktura sitt behov kan ikkje løysast med enklare og rimelegare hjelpemiddel, eller ved andre tiltak som ikkje blir dekt av Nav.',
              },
            },
            {
              vilkårtype: 'PRAKTISKE_PROBLEMER_I_DAGLIGLIVET_V1',
              tekst: {
                nb: 'Hjelpemiddelet er nødvendig for å avhjelpe praktiske problemer i dagliglivet, eller for å bli pleid i hjemmet.',
                nn: 'Hjelpemiddelet er naudsynt for å avhjelpa praktiske problem i dagleglivet, eller for å bli pleidd i heimen.',
              },
            },
            {
              vilkårtype: 'I_STAND_TIL_Å_BRUKE_HJELPEMIDLENE_V1',
              tekst: {
                nb: 'Kvadratisk Faktura vil være i stand til å bruke hjelpemidlene. Jeg har ansvaret for at hjelpemidlene blir levert, og at nødvendig opplæring, tilpasning og montering blir gjort.',
                nn: 'Kvadratisk Faktura vil vera i stand til å bruka hjelpemidla. Eg har ansvaret for at hjelpemidla blir leverte, og at nødvendig opplæring, tilpassing og montering blir gjord.',
              },
            },
          ],
          funksjonsnedsettelser: ['BEVEGELSE', 'KOGNISJON'],
        },
        hjelpemidler: {
          hjelpemidler: [
            {
              antall: 1,
              produkt: {
                hmsArtNr: '311641',
                artikkelnavn: 'Seng OPUS 120EW',
                iso8: '18121001',
                iso8Tittel: 'Senger med elektrisk regulering av liggeflaten',
                delkontrakttittel:
                  '3:  SENG - voksne - bred modell med elektrisk regulering av høyde, rygg-, lår- og bendel',
                sortimentkategori: 'Senger, sengebunner m.m.',
                rangering: 1,
              },
              tilbehør: [],
              bytter: [],
              bruksarenaer: ['EGET_HJEM'],
              utlevertinfo: {
                alleredeUtlevertFraHjelpemiddelsentralen: false,
                utleverttype: null,
                overførtFraBruker: null,
                annenKommentar: null,
              },
              opplysninger: [
                {
                  ledetekst: {
                    nb: 'Bruksarena',
                    nn: 'Bruksarena',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'I eget hjem.',
                        nn: 'I eigen heim.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Krav om kurs',
                    nn: 'Krav om kurs',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Det er dokumentert at innsender har fullført og bestått godkjenningskurs elektrisk seng.',
                        nn: 'Det er dokumentert at innsendar har fullført og bestått godkjenningskurs elektrisk seng.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
              ],
              varsler: [],
            },
            {
              antall: 1,
              produkt: {
                hmsArtNr: '311644',
                artikkelnavn: 'Madrass Hypnos I 120x200x14 cm',
                iso8: '18121801',
                iso8Tittel: 'Madrasser skumbaserte',
                delkontrakttittel: '11: MADRASS med stofftrekk',
                sortimentkategori: 'Senger, sengebunner m.m.',
                rangering: 1,
              },
              tilbehør: [],
              bytter: [],
              bruksarenaer: ['EGET_HJEM'],
              utlevertinfo: {
                alleredeUtlevertFraHjelpemiddelsentralen: false,
                utleverttype: null,
                overførtFraBruker: null,
                annenKommentar: null,
              },
              opplysninger: [
                {
                  ledetekst: {
                    nb: 'Bruksarena',
                    nn: 'Bruksarena',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'I eget hjem.',
                        nn: 'I eigen heim.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
              ],
              varsler: [],
            },
            {
              antall: 1,
              produkt: {
                hmsArtNr: '301320',
                artikkelnavn: 'Wellbee APP',
                iso8: '22271501',
                iso8Tittel: 'Elektroniske kalender- og minnesystemer',
                delkontrakttittel: '5: Kalender som programvare / app',
                sortimentkategori: 'Kalendere og planleggingssystemer',
                rangering: 2,
              },
              tilbehør: [],
              bytter: [],
              bruksarenaer: ['OMSORGSBOLIG_BOFELLESKAP_SERVICEBOLIG', 'EGET_HJEM'],
              utlevertinfo: {
                alleredeUtlevertFraHjelpemiddelsentralen: false,
                utleverttype: null,
                overførtFraBruker: null,
                annenKommentar: null,
              },
              opplysninger: [
                {
                  ledetekst: {
                    nb: 'Bruksarena',
                    nn: 'Bruksarena',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'I omsorgsbolig, bofellesskap eller servicebolig.',
                        nn: 'I omsorgsbustad, bufellesskap eller servicebustad.',
                      },
                      begrepsforklaring: null,
                    },
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'I eget hjem.',
                        nn: 'I eigen heim.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Begrunnelse for lavere rangering',
                    nn: 'Grunngiving for lågare rangering',
                  },
                  innhold: [
                    {
                      fritekst:
                        'Bruker har testet app på 1. rangering, men sliter med å bruke den. Wellbee fungerer mye bedre for bruker',
                      forhåndsdefinertTekst: null,
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Utprøving for bruker',
                    nn: 'Utprøving for brukar',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Bruker har hatt en vellykket utprøving av prøvelisensen.',
                        nn: 'Brukar har hatt ei vellykka utprøving av prøvelisensen.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Støtteperson',
                    nn: 'Støtteperson',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Støtteperson skal hjelpe bruker med kalenderen.',
                        nn: 'Støtteperson skal hjelpa bruker med kalenderen.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Utprøving for støtteperson',
                    nn: 'Utprøving for støtteperson',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Støtteperson har hatt en vellykket utprøving av prøvelisensen.',
                        nn: 'Støtteperson har hatt ei vellykka utprøving av prøvelisensen.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
              ],
              varsler: [],
            },
            {
              antall: 1,
              produkt: {
                hmsArtNr: '267619',
                artikkelnavn: 'Mustang str.2 - hvit',
                iso8: '12060901',
                iso8Tittel: 'Gåstoler',
                delkontrakttittel:
                  '15. Gåstol som gir mulighet for selvstendig forflytning og trening av gangfunksjonen',
                sortimentkategori: 'Ganghjelpemidler',
                rangering: 1,
              },
              tilbehør: [],
              bytter: [],
              bruksarenaer: ['INSTITUSJON'],
              utlevertinfo: {
                alleredeUtlevertFraHjelpemiddelsentralen: true,
                utleverttype: 'FREMSKUTT_LAGER',
                overførtFraBruker: null,
                annenKommentar: null,
              },
              opplysninger: [
                {
                  ledetekst: {
                    nb: 'Utlevert',
                    nn: 'Utlevert',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Utlevert fra fremskutt lager',
                        nn: 'Utlevert frå framskote lager',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Bruksarena',
                    nn: 'Bruksarena',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'På institusjon som sykehjem.',
                        nn: 'På institusjon som sjukeheim.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Hovedformål',
                    nn: 'Hovudformål',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Til forflytning',
                        nn: 'Til forflytting',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
              ],
              varsler: [],
            },
            {
              antall: 1,
              produkt: {
                hmsArtNr: '296286',
                artikkelnavn: 'Active Easyriser Standard 60-80 kg',
                iso8: '18091501',
                iso8Tittel: 'Løftestoler med synkron regulering av rygg, benstøtter og oppreisning',
                delkontrakttittel: '6: Stoler med mekanisk oppreisingsfunksjon',
                sortimentkategori: 'Stoler med oppreisingsfunksjon',
                rangering: 1,
              },
              tilbehør: [],
              bytter: [],
              bruksarenaer: ['OMSORGSBOLIG_BOFELLESKAP_SERVICEBOLIG'],
              utlevertinfo: {
                alleredeUtlevertFraHjelpemiddelsentralen: false,
                utleverttype: null,
                overførtFraBruker: null,
                annenKommentar: null,
              },
              opplysninger: [
                {
                  ledetekst: {
                    nb: 'Bruksarena',
                    nn: 'Bruksarena',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'I omsorgsbolig, bofellesskap eller servicebolig.',
                        nn: 'I omsorgsbustad, bufellesskap eller servicebustad.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Kroppsmål',
                    nn: 'Kroppsmål',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Setebredde: 45 cm, legglengde: 47 cm, lårlengde: 46 cm, høyde: 170 cm, kroppsvekt: 75 kg.',
                        nn: 'Setebredde: 45 cm, legglengde: 47 cm, lårlengde: 46 cm, høgde: 170 cm, kroppsvekt: 75 kg.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Funksjon',
                    nn: 'Funksjon',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Personen kan ikke reise seg selv fra vanlige stoler ved bruk av enklere tiltak som for eksempel forhøyningsklosser, puter, støttestang, støttehåndtak og lignende.',
                        nn: 'Personen kan ikkje reisa seg sjølv frå vanlege stolar ved bruk av enklare tiltak som til dømes løfteklossar, puter, støttestong, støttehandtak og liknande.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Stolen skal brukes i',
                    nn: 'Stolen skal brukast i',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Fellesarealer og være fast plassert der.',
                        nn: 'Fellesareal og vera fast plassert der.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Grunnen til behovet',
                    nn: 'Grunnen til behovet',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Oppreisningsfunksjonen er nødvendig for at personen skal bli pleid i hjemmet.',
                        nn: 'Oppreisingsfunksjonen er nødvendig for at personen skal bli pleidd i heimen.',
                      },
                      begrepsforklaring: null,
                    },
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Personen skal reise seg opp og utføre dagliglivets oppgaver.',
                        nn: 'Personen skal reisa seg opp og utføra oppgåvene til dagleglivet.',
                      },
                      begrepsforklaring: null,
                    },
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Personen har ikke ståfunksjon og skal flytte seg selv mellom rullestol og stol med oppreisningsfunksjon.',
                        nn: 'Personen har ikkje ståfunksjon og skal flytta seg sjølv mellom rullestol og stol med oppreisingsfunksjon.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Trekk',
                    nn: 'Trekk',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Stol i annet trekk kan benyttes',
                        nn: 'Stol i anna trekk kan nyttast',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Skråløft eller rettløft',
                    nn: 'Skråløft eller rettløft',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Skråløft',
                        nn: 'Skråløft',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
              ],
              varsler: [],
            },
          ],
          tilbehør: [],
          totaltAntall: 5,
        },
        levering: {
          hjelpemiddelformidler: {
            navn: {
              fornavn: 'Berømt',
              etternavn: 'Aktivitet',
            },
            arbeidssted: 'Nav Oslo',
            stilling: 'Fysioterapeut',
            telefon: '12345678',
            adresse: {
              adresse: 'Oslo Kommune',
              postnummer: '0484',
              poststed: 'OSLO',
            },
            epost: 'urokkelig@mail.no',
            treffesEnklest: 'Mandag og tirsdag',
          },
          oppfølgingsansvarlig: 'ANNEN_OPPFØLGINGSANSVARLIG',
          annenOppfølgingsansvarlig: {
            navn: {
              fornavn: 'Petter',
              etternavn: 'Smart',
            },
            arbeidssted: 'Hjemmekontor',
            stilling: 'Oppfinner',
            telefon: '99999999',
            ansvarFor: 'Ansvar for vedlikehold og reparasjon',
          },
          utleveringsmåte: 'ANNEN_BRUKSADRESSE',
          annenUtleveringsadresse: {
            adresse: 'Andebyveien 4',
            postnummer: '4550',
            poststed: 'FARSUND',
          },
          utleveringKontaktperson: 'ANNEN_KONTAKTPERSON',
          annenKontaktperson: {
            navn: {
              fornavn: 'Donald',
              etternavn: 'Duck',
            },
            telefon: '11111111',
          },
          utleveringMerknad: 'Bruker bor i 2. etasje',
          hast: null,
          automatiskUtledetTilleggsinfo: ['UTLEVERING_KALENDERAPP'],
        },
        innsender: {
          fnr: '26848497710',
          rolle: 'FORMIDLER',
          kurs: [
            {
              id: 3,
              title: 'Elektrisk seng',
              kilde: 'kunnskapsbanken',
            },
            {
              id: 1,
              title: 'El-rullestol',
              kilde: 'kunnskapsbanken',
            },
            {
              id: 4,
              title: 'Bestilling',
              kilde: 'kunnskapsbanken',
            },
          ],
          sjekketUtlånsoversiktForKategorier: [],
        },
        id: 'b687dfb9-87f2-4737-8a6d-48a0327c24e0',
        type: 'SØKNAD',
        innsendingsdato: '2024-09-05',
        skjemaversjon: 2,
        hjmBrukersFnr: '26848497710',
        prioritet: 'NORMAL',
      },
      valgteÅrsaker: [],
    })
  }),
  http.get<{}, {}, {}>(`${API_PATH}/soknad/innsender/:id`, () => {
    return HttpResponse.json({
      soknadId: 'b3b15dd3-38d8-4968-a5fa-09263deaad9f',
      datoOpprettet: '2021-04-28T18:59:13.992+00:00',
      datoOppdatert: '2021-04-28T18:59:13.992+00:00',
      status: 'VENTER_GODKJENNING',
      fnrBruker: '12345678910',
      navnBruker: 'Arne Arnesen',
      behovsmelding: {
        bruker: {
          fnr: '26848497710',
          navn: {
            fornavn: 'Berømt',
            etternavn: 'Aktivitet',
          },
          signaturtype: 'IKKE_INNHENTET_FORDI_BYTTE',
          telefon: '26848497',
          veiadresse: {
            adresse: 'Kirkeveien 7',
            postnummer: '9590',
            poststed: 'Hasvik',
          },
          kommunenummer: '5616',
          brukernummer: '29109650',
          kilde: 'PDL',
          legacyopplysninger: [],
        },
        brukersituasjon: {
          vilkår: [
            {
              vilkårtype: 'KAN_IKKE_LØSES_MED_ENKLERE_HJELPEMIDLER_V1',
              tekst: {
                nb: 'Kvadratisk Faktura sitt behov kan ikke løses med enklere og rimeligere hjelpemidler, eller ved andre tiltak som ikke dekkes av Nav.',
                nn: 'Kvadratisk Faktura sitt behov kan ikkje løysast med enklare og rimelegare hjelpemiddel, eller ved andre tiltak som ikkje blir dekt av Nav.',
              },
            },
            {
              vilkårtype: 'PRAKTISKE_PROBLEMER_I_DAGLIGLIVET_V1',
              tekst: {
                nb: 'Hjelpemiddelet er nødvendig for å avhjelpe praktiske problemer i dagliglivet, eller for å bli pleid i hjemmet.',
                nn: 'Hjelpemiddelet er naudsynt for å avhjelpa praktiske problem i dagleglivet, eller for å bli pleidd i heimen.',
              },
            },
            {
              vilkårtype: 'I_STAND_TIL_Å_BRUKE_HJELPEMIDLENE_V1',
              tekst: {
                nb: 'Kvadratisk Faktura vil være i stand til å bruke hjelpemidlene. Jeg har ansvaret for at hjelpemidlene blir levert, og at nødvendig opplæring, tilpasning og montering blir gjort.',
                nn: 'Kvadratisk Faktura vil vera i stand til å bruka hjelpemidla. Eg har ansvaret for at hjelpemidla blir leverte, og at nødvendig opplæring, tilpassing og montering blir gjord.',
              },
            },
          ],
          funksjonsnedsettelser: ['BEVEGELSE'],
        },
        hjelpemidler: {
          hjelpemidler: [
            {
              antall: 1,
              produkt: {
                hmsArtNr: '247623',
                artikkelnavn: 'Jay Easy Visco Cushion 38x44 buet',
                iso8: '18100601',
                iso8Tittel: 'Sitteputer for komfort',
                delkontrakttittel: '2: Sittepute som ikke kan innstilles - lav modell',
                sortimentkategori: 'Sitteputer',
                rangering: 1,
              },
              tilbehør: [],
              bytter: [
                {
                  erTilsvarende: true,
                  hmsnr: '247623',
                  serienr: null,
                  hjmNavn: 'Jay Easy Visco Cushion 38x44 buet',
                  hjmKategori: 'Seteputer og sitteunderlag',
                  årsak: 'UTSLITT',
                },
              ],
              bruksarenaer: ['EGET_HJEM'],
              utlevertinfo: {
                alleredeUtlevertFraHjelpemiddelsentralen: false,
                utleverttype: null,
                overførtFraBruker: null,
                annenKommentar: null,
              },
              opplysninger: [
                {
                  ledetekst: {
                    nb: 'Bruksarena',
                    nn: 'Bruksarena',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'I eget hjem.',
                        nn: 'I eigen heim.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Behov',
                    nn: 'Behov',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Forebygge trykksår',
                        nn: 'Forebygge trykksår',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
              ],
              varsler: [],
            },
          ],
          tilbehør: [
            {
              hmsArtNr: '176090',
              navn: 'Antisklimatte serveringsbrett rullator 4hjul Topro Troja Original M/S/Topro Olympos ATR M',
              antall: 1,
              begrunnelse: 'Trenger fordi derfor',
              fritakFraBegrunnelseÅrsak: null,
              opplysninger: [
                {
                  ledetekst: { nb: 'Skal brukes med', nn: 'Skal brukes med' },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Et allerede utlånt hjelpemiddel',
                        nn: 'Et allerede utlånt hjelpemiddel',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
                {
                  ledetekst: {
                    nb: 'Begrunnelse for tilbehøret',
                    nn: 'Grunngiving for tilbehøyret',
                  },
                  innhold: [
                    {
                      fritekst: 'Trenger fordi derfor',
                      forhåndsdefinertTekst: null,
                      begrepsforklaring: null,
                    },
                  ],
                },
              ],
            },
            {
              hmsArtNr: '235407',
              navn: 'Serveringsbrett rullator 4hjul Topro Olympos ATR M',
              antall: 1,
              begrunnelse: null,
              fritakFraBegrunnelseÅrsak: 'ER_PÅ_BESTILLINGSORDNING',
              opplysninger: [
                {
                  ledetekst: { nb: 'Skal brukes med', nn: 'Skal brukes med' },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Et hjelpemiddel det er søkt om som vi ikke har fått vedtak på og det ble glemt å søke om tilbehøret.',
                        nn: 'Et hjelpemiddel det er søkt om som vi ikke har fått vedtak på og det ble glemt å søke om tilbehøret.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                },
              ],
            },
          ],
          totaltAntall: 3,
        },
        levering: {
          hjelpemiddelformidler: {
            navn: {
              fornavn: 'Berømt',
              etternavn: 'Aktivitet',
            },
            arbeidssted: 'Nav Oslo',
            stilling: 'Fysioterapeut',
            telefon: '12345678',
            adresse: {
              adresse: 'Oslo Kommune',
              postnummer: '0484',
              poststed: 'OSLO',
            },
            epost: 'urokkelig@mail.no',
            treffesEnklest: 'Mandag og tirsdag',
          },
          oppfølgingsansvarlig: 'HJELPEMIDDELFORMIDLER',
          annenOppfølgingsansvarlig: null,
          utleveringsmåte: 'FOLKEREGISTRERT_ADRESSE',
          annenUtleveringsadresse: null,
          utleveringKontaktperson: 'HJELPEMIDDELBRUKER',
          annenKontaktperson: null,
          utleveringMerknad: '',
          hast: null,
          automatiskUtledetTilleggsinfo: [],
        },
        innsender: {
          fnr: '26848497710',
          rolle: 'FORMIDLER',
          kurs: [
            {
              id: 3,
              title: 'Elektrisk seng',
              kilde: 'kunnskapsbanken',
            },
            {
              id: 1,
              title: 'El-rullestol',
              kilde: 'kunnskapsbanken',
            },
            {
              id: 4,
              title: 'Bestilling',
              kilde: 'kunnskapsbanken',
            },
          ],
          sjekketUtlånsoversiktForKategorier: ['122303', '181006'],
        },
        id: '3c3ccc5b-e185-4480-9e4f-5018bb6c058e',
        type: 'BYTTE',
        innsendingsdato: '2024-09-05',
        skjemaversjon: 2,
        hjmBrukersFnr: '26848497710',
        prioritet: 'NORMAL',
      },
    })
  }),
]

export default soknadsbehandlingDbHandlers
