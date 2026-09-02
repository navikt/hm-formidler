// Mock-data for Rulla Tor (${API_PATH}/soknad/innsender/a293fae9-262a-4fad-b7be-35715b953511)
export const rullaTorMock = {
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
          produktkategorier: [],
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
                        nb: 'Det er dokumentert at innsender har fullført og bestått godkjenningskurs elektrisk seng.',
                        nn: 'Det er dokumentert at innsendar har fullført og bestått godkjenningskurs elektrisk seng.',
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
                  innholdstype: 'TEKST'
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
                  innholdstype: 'LISTE'
                },
                {
                  ledetekst: {
                    nb: 'Begrunnelse for lavere rangering',
                    nn: 'Grunngiving for lågare rangering',
                  },
                  innhold: [
                    {
                      fritekst:
                        'Personen har testet app på 1. rangering, men sliter med å bruke den. Wellbee fungerer mye bedre for personen',
                      forhåndsdefinertTekst: null,
                      begrepsforklaring: null,
                    },
                  ],
                  innholdstype: 'TEKST'
                },
                {
                  ledetekst: {
                    nb: 'Utprøving for personen',
                    nn: 'Utprøving for personen',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Personen har hatt en vellykket utprøving av prøvelisensen.',
                        nn: 'Personen har hatt ei vellykka utprøving av prøvelisensen.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                  innholdstype: 'TEKST'
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
                        nb: 'Støtteperson skal hjelpe hjelpemiddelbruker med kalenderen.',
                        nn: 'Støtteperson skal hjelpa hjelpemiddelbruker med kalenderen.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                  innholdstype: 'TEKST'
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
                  innholdstype: 'TEKST'
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
                  innholdstype: 'TEKST'
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
                  innholdstype: 'TEKST'
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
                  innholdstype: 'TEKST'
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
                        nb: 'Setebredde: 45 cm, legglengde: 47 cm, lårlengde: 46 cm, høyde: 170 cm, kroppsvekt: 75 kg.',
                        nn: 'Setebredde: 45 cm, legglengde: 47 cm, lårlengde: 46 cm, høgde: 170 cm, kroppsvekt: 75 kg.',
                      },
                      begrepsforklaring: null,
                    },
                  ],
                  innholdstype: 'TEKST'
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
                  innholdstype: 'TEKST'
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
                  innholdstype: 'TEKST'
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
                  innholdstype: 'LISTE'
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
                  innholdstype: 'TEKST'
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
                  innholdstype: 'TEKST'
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
          annenUtleveringMottaker: 'Andeby omsorgsbolig',
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
        vedlegg: [],
        id: 'b687dfb9-87f2-4737-8a6d-48a0327c24e0',
        type: 'SØKNAD',
        innsendingsdato: '2024-09-05',
        skjemaversjon: 2,
        hjmBrukersFnr: '26848497710',
        prioritet: 'NORMAL',
      },
      valgteÅrsaker: [],
    }
