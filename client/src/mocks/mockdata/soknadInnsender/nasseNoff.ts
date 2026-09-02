// Mock-data for Nasse Nøff (${API_PATH}/soknad/innsender/fec887bc-5a95-49c2-a098-f0e0f7cd73hf)
export const nasseNoffMock = {
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
          produktkategorier: [],
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
                  innholdstype: 'LISTE'
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
                  innholdstype: 'TEKST'
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
        vedlegg: [],
        id: 'ab597d11-c090-4f18-a622-08792a3db894',
        type: 'BESTILLING',
        innsendingsdato: '2024-09-05',
        skjemaversjon: 2,
        hjmBrukersFnr: '26928698180',
        prioritet: 'NORMAL',
      },
    }
