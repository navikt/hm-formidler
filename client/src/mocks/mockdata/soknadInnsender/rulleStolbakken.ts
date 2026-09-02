// Mock-data for Rulle Stolbakken (${API_PATH}/soknad/innsender/fc8ee79a-b234-4201-8735-129c9cff8d0b)
export const rulleStolbakkenMock = {
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
          produktkategorier: [],
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
                  innholdstype: 'LISTE'
                },
                {
                  ledetekst: {
                    nb: 'Kan ikke ha tilsvarende fordi',
                    nn: 'Kan ikkje ha tilsvarande fordi',
                  },
                  innhold: [
                    {
                      fritekst: 'Personen får vondt i ryggen av andre rullestoler som hun har prøvd.',
                      forhåndsdefinertTekst: null,
                      begrepsforklaring: null,
                    },
                  ],
                  innholdstype: 'TEKST'
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
                  innholdstype: 'TEKST'
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
                  innholdstype: 'TEKST'
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
                  innholdstype: 'TEKST'
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
                  innholdstype: 'TEKST'
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
                  innholdstype: 'TEKST'
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
                  innholdstype: 'TEKST'
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
                        nb: 'Personen har en varig funksjonsnedsettelse som gir kuldeintoleranse, og som fører til at rullestolen ikke kan benyttes uten kabin',
                        nn: 'Personen har ei varig funksjonsnedsetjing som gir kuldeintoleranse, og som fører til at rullestolen ikkje kan nyttast utan kabin',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                  innholdstype: 'TEKST'
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
                        nb: 'Personen har luftveisproblemer og kan ikke bruke varmemaske',
                        nn: 'Personen har luftvegsproblem og kan ikkje bruka varmemaske',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                  innholdstype: 'TEKST'
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
                        nb: 'Personen er vurdert til å kunne betjene elektrisk rullestol med manuell styring',
                        nn: 'Personen er vurdert til å kunne betene elektrisk rullestol med manuell styring',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                  innholdstype: 'TEKST'
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
                        nb: 'Personen er vurdert til å kunne ferdes sikkert i trafikken',
                        nn: 'Personen er vurdert til å kunne ferdast sikkert i trafikken',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                  innholdstype: 'TEKST'
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
                        nb: 'Personen skal benytte den elektriske rullestolen til å avhjelpe en vesentlig nedsatt gangfunksjon. Den skal ikke brukes til et generelt transportbehov.',
                        nn: 'Personen skal benytte den elektriske rullestolen til å avhjelpe ein vesentlig nedsatt gangfunksjon. Den skal ikkje brukes til eit generelt transportbehov.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                  innholdstype: 'TEKST'
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
                        nb: 'Personen har egnet sted for oppbevaring og lading',
                        nn: 'Personen har eigna sted for oppbevaring og lading',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                  innholdstype: 'TEKST'
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
                        nb: 'Personen gjøres kjent med forsikringsvilkårene i forbindelse med opplæringen',
                        nn: 'Personen blir gjort kjent med forsikringsvilkåra i samband med opplæringa',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                  innholdstype: 'TEKST'
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
                        nb: 'Personen har ikke spesialsykkel fra før',
                        nn: 'Personen har ikkje spesialsykkel frå før',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                  innholdstype: 'TEKST'
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
                  innholdstype: 'TEKST'
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
                  innholdstype: 'TEKST'
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
        vedlegg: [],
        id: 'c4ced8de-3aa1-4989-8903-b631b1d27526',
        type: 'SØKNAD',
        innsendingsdato: '2024-09-05',
        skjemaversjon: 2,
        hjmBrukersFnr: '13820599335',
        prioritet: 'HAST',
      },
      valgteÅrsaker: [],
    }
