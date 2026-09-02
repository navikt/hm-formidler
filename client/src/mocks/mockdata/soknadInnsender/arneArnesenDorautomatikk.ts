// Mock-data for Arne Arnesen (dørautomatikk) (${API_PATH}/soknad/innsender/:id)
export const arneArnesenDorautomatikkMock = {
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
          produktkategorier: [],
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
                  innholdstype: 'TEKST'
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
                  innholdstype: 'TEKST'
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
                  innholdstype: 'TEKST'
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
                  innholdstype: 'TEKST'
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
                  innholdstype: 'TEKST'
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
        vedlegg: [
          {
            id: '46756075-c1ed-4426-ba07-cc6fa808763f',
            navn: 'Legeerklæring for varmehjelpemiddel (1)',
            type: 'LEGEERKLÆRING_FOR_VARMEHJELPEMIDDEL',
          },
          {
            id: 'd7f94b85-5f6f-4118-ad12-8caff1914e2b',
            navn: 'Legeerklæring for varmehjelpemiddel (2)',
            type: 'LEGEERKLÆRING_FOR_VARMEHJELPEMIDDEL',
          },
        ],
        id: '3c3ccc5b-e185-4480-9e4f-5018bb6c058e',
        type: 'BYTTE',
        innsendingsdato: '2024-09-05',
        skjemaversjon: 2,
        hjmBrukersFnr: '26848497710',
        prioritet: 'NORMAL',
      },
    }
