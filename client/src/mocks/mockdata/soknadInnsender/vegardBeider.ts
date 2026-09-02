// Mock-data for Vegard Beider (${API_PATH}/soknad/innsender/abc887bc-5a95-49c2-a123-f0e0f7c32df3)
export const vegardBeiderMock = {
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
                  opplysninger: [],
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
                  innholdstype: 'TEKST'
                },
              ],
              varsler: [],
            },
          ],
          tilbehør: [],
          "produktkategorier": [
            {
              "id": "8073f190-3b1c-43b8-a5d0-38f224e53605",
              "type": "LYDOVERFØRINGSANLEGG",
              "navn": "Lydoverføringsanlegg",
              "antall": 1,
              "delkontrakttittel": "8: Samtaleanlegg med høyttaler(e)",
              "bruksarenaer": [
                "GRUNN_ELLER_VIDEREGÅENDE_SKOLE"
              ],
              "opplysninger": [
                {
                  "key": {
                    "id": "BRUKSARENA",
                    "versjon": 1
                  },
                  "ledetekst": {
                    "nb": "Bruksarena",
                    "nn": "Bruksarena"
                  },
                  "innhold": [
                    {
                      "fritekst": null,
                      "forhåndsdefinertTekst": {
                        "nb": "På skolen som grunnskole eller videregående skole.",
                        "nn": "På skulen som grunnskule eller vidaregåande skule."
                      },
                      "begrepsforklaring": null,
                      "ledetekst": null
                    }
                  ],
                  "innholdstype": "TEKST"
                },
                {
                  "key": {
                    "id": "LYDOVEFØRINGSANLEGG_SKOLE_ANTALL_ELEVER_I_KLASSEN",
                    "versjon": 1
                  },
                  "ledetekst": {
                    "nb": "Hvor mange elever er det i klassen?",
                    "nn": "Hvor mange elever er det i klassen?"
                  },
                  "innhold": [
                    {
                      "fritekst": null,
                      "forhåndsdefinertTekst": {
                        "nb": "4",
                        "nn": "4"
                      },
                      "begrepsforklaring": null,
                      "ledetekst": null
                    }
                  ],
                  "innholdstype": "TEKST"
                },
                {
                  "key": {
                    "id": "LYDOVEFØRINGSANLEGG_SKOLE_HVORDAN_SITTER_ELEVENE",
                    "versjon": 1
                  },
                  "ledetekst": {
                    "nb": "Hvordan sitter elevene når undervisningen foregår?",
                    "nn": "Hvordan sitter elevene når undervisningen foregår?"
                  },
                  "innhold": [
                    {
                      "fritekst": "på pinebenken",
                      "forhåndsdefinertTekst": null,
                      "begrepsforklaring": null,
                      "ledetekst": null
                    }
                  ],
                  "innholdstype": "TEKST"
                },
                {
                  "key": {
                    "id": "LYDOVEFØRINGSANLEGG_SKOLE_ANTALL_LÆRERE",
                    "versjon": 1
                  },
                  "ledetekst": {
                    "nb": "Hvor mange lærere er det i klassen?",
                    "nn": "Hvor mange lærere er det i klassen?"
                  },
                  "innhold": [
                    {
                      "fritekst": null,
                      "forhåndsdefinertTekst": {
                        "nb": "To lærere (eller flere)",
                        "nn": "To lærere (eller flere)"
                      },
                      "begrepsforklaring": null,
                      "ledetekst": null
                    }
                  ],
                  "innholdstype": "TEKST"
                },
                {
                  "key": {
                    "id": "LYDOVEFØRINGSANLEGG_SKOLE_ANTALL_KLASSEROM",
                    "versjon": 1
                  },
                  "ledetekst": {
                    "nb": "Bruker eleven ett eler flere klasserom?",
                    "nn": "Bruker eleven ett eler flere klasserom?"
                  },
                  "innhold": [
                    {
                      "fritekst": null,
                      "forhåndsdefinertTekst": {
                        "nb": "Eleven bruker daglig flere klasserom",
                        "nn": "Eleven bruker daglig flere klasserom"
                      },
                      "begrepsforklaring": null,
                      "ledetekst": null
                    }
                  ],
                  "innholdstype": "TEKST"
                },
                {
                  "key": {
                    "id": "LYDOVEFØRINGSANLEGG_SKOLE_KLASSEROM_BESKRIVELSE",
                    "versjon": 1
                  },
                  "ledetekst": {
                    "nb": "Beskriv hvordan undervisning er organisert.",
                    "nn": "Beskriv hvordan undervisning er organisert."
                  },
                  "innhold": [
                    {
                      "fritekst": "bytter klasserom annenhver dag",
                      "forhåndsdefinertTekst": null,
                      "begrepsforklaring": null,
                      "ledetekst": null
                    }
                  ],
                  "innholdstype": "TEKST"
                },
                {
                  "key": {
                    "id": "LYDOVEFØRINGSANLEGG_BRUKER_HØREAPPARAT_DAGLIG",
                    "versjon": 1
                  },
                  "ledetekst": {
                    "nb": "Bruker personen høreapparat daglig?",
                    "nn": "Bruker personen høreapparat daglig?"
                  },
                  "innhold": [
                    {
                      "fritekst": null,
                      "forhåndsdefinertTekst": {
                        "nb": "Ja",
                        "nn": "Ja"
                      },
                      "begrepsforklaring": null,
                      "ledetekst": null
                    }
                  ],
                  "innholdstype": "TEKST"
                },
                {
                  "key": {
                    "id": "LYDOVEFØRINGSANLEGG_HØREAPPARAT_TYPE",
                    "versjon": 1
                  },
                  "ledetekst": {
                    "nb": "Hvilket høreapparat har personen?",
                    "nn": "Hvilket høreapparat har personen?"
                  },
                  "innhold": [
                    {
                      "fritekst": "Advanced Bionics (CI)",
                      "forhåndsdefinertTekst": null,
                      "begrepsforklaring": null,
                      "ledetekst": null
                    }
                  ],
                  "innholdstype": "TEKST"
                },
                {
                  "key": {
                    "id": "LYDOVEFØRINGSANLEGG_HØREAPPARAT_FARGE",
                    "versjon": 1
                  },
                  "ledetekst": {
                    "nb": "Hvilken farge har apparatet?",
                    "nn": "Hvilken farge har apparatet?"
                  },
                  "innhold": [
                    {
                      "fritekst": "Infrarød",
                      "forhåndsdefinertTekst": null,
                      "begrepsforklaring": null,
                      "ledetekst": null
                    }
                  ],
                  "innholdstype": "TEKST"
                },
                {
                  "key": {
                    "id": "LYDOVEFØRINGSANLEGG_HØREAPPARAT_BRUKT_OVER_ETT_ÅR",
                    "versjon": 1
                  },
                  "ledetekst": {
                    "nb": "Har personen brukt høreapparat i over ett år?",
                    "nn": "Har personen brukt høreapparat i over ett år?"
                  },
                  "innhold": [
                    {
                      "fritekst": null,
                      "forhåndsdefinertTekst": {
                        "nb": "Ja",
                        "nn": "Ja"
                      },
                      "begrepsforklaring": null,
                      "ledetekst": null
                    }
                  ],
                  "innholdstype": "TEKST"
                },
                {
                  "key": {
                    "id": "LYDOVEFØRINGSANLEGG_KONTAKTPERSON",
                    "versjon": 1
                  },
                  "ledetekst": {
                    "nb": "Kontaktperson",
                    "nn": "Kontaktperson"
                  },
                  "innhold": [
                    {
                      "fritekst": "Lars Monsen",
                      "forhåndsdefinertTekst": null,
                      "begrepsforklaring": null,
                      "ledetekst": {
                        "nb": "Navn",
                        "nn": "Navn"
                      }
                    },
                    {
                      "fritekst": "Uavhengig",
                      "forhåndsdefinertTekst": null,
                      "begrepsforklaring": null,
                      "ledetekst": {
                        "nb": "Stilling",
                        "nn": "Stilling"
                      }
                    },
                    {
                      "fritekst": "12121212",
                      "forhåndsdefinertTekst": null,
                      "begrepsforklaring": null,
                      "ledetekst": {
                        "nb": "Telefonnummer",
                        "nn": "Telefonnummer"
                      }
                    },
                    {
                      "fritekst": "lars.monsen@hotmail.com",
                      "forhåndsdefinertTekst": null,
                      "begrepsforklaring": null,
                      "ledetekst": {
                        "nb": "E-post",
                        "nn": "E-post"
                      }
                    }
                  ],
                  "innholdstype": "NØKKEL_VERDI"
                }
              ]
            }
          ],
          totaltAntall: 3,
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
        vedlegg: [],
        id: '9deea2af-b681-4ca3-858b-bc4362b0300d',
        type: 'BESTILLING',
        innsendingsdato: '2024-09-05',
        skjemaversjon: 2,
        hjmBrukersFnr: '13820599335',
        prioritet: 'NORMAL',
      },
    }
