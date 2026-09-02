// Mock-data for Giovanni Varmevotti (${API_PATH}/soknad/innsender/5839bbf1-8842-45c0-a8fd-71718260fce4)
export const giovanniVarmevottiMock = {
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
          produktkategorier: [],
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
                  innholdstype: 'TEKST'
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
                        nb: 'Kommunen har opplysninger fra lege om diagnosen til personen. Legen bekrefter at diagnosen gir nedsatt blodgjennomstrømning i hender eller føtter. Når personen utsettes for kulde så får hender eller føtter unormal blekhet og cyanose.',
                        nn: 'Kommunen har opplysningar frå lege om diagnosen til personen. Legen stadfestar at diagnosen gir nedsett blodgjennomstrømning i hender eller føter. Når personen blir utsett for kulde så får hender eller føter unormal bleikheit og cyanose.',
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
                  innholdstype: 'LISTE'
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
                  innholdstype: 'LISTE'
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
                        nb: 'Kommunen har opplysninger fra lege om diagnosen til personen. Legen bekrefter at diagnosen gir nedsatt blodgjennomstrømning i hender eller føtter. Når personen utsettes for kulde så får hender eller føtter unormal blekhet og cyanose.',
                        nn: 'Kommunen har opplysningar frå lege om diagnosen til personen. Legen stadfestar at diagnosen gir nedsett blodgjennomstrømning i hender eller føter. Når personen blir utsett for kulde så får hender eller føter unormal bleikheit og cyanose.',
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
                  innholdstype: 'LISTE'
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
        vedlegg: [],
        id: '6d82eda5-b709-4b27-b747-42a88dc029b2',
        type: 'SØKNAD',
        innsendingsdato: '2024-09-05',
        skjemaversjon: 2,
        hjmBrukersFnr: '13820599335',
        prioritet: 'NORMAL',
      },
      valgteÅrsaker: [],
    }
