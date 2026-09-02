// Mock-data for Byttelise Bøttesen (${API_PATH}/soknad/innsender/85be32d6-052e-49e5-84c3-3e8de24687c7)
export const byttelizeBottesenMock = {
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
        vedlegg: [],
        id: '3c3ccc5b-e185-4480-9e4f-5018bb6c058e',
        type: 'BYTTE',
        innsendingsdato: '2024-09-05',
        skjemaversjon: 2,
        hjmBrukersFnr: '26848497710',
        prioritet: 'NORMAL',
      },
      valgteÅrsaker: [],
    }
