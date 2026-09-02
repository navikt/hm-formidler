// Mock-data for Trude Luth (${API_PATH}/soknad/innsender/fec887bc-5a95-49c2-a123-f0e0f7c32df3)
export const trudeLuthMock = {
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
          produktkategorier: [],
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
                  innholdstype: 'TEKST'
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
                  innholdstype: 'TEKST'
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
                  innholdstype: 'TEKST'
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
        vedlegg: [],
        id: '2e295029-1e89-470f-a311-d15848917b30',
        type: 'BESTILLING',
        innsendingsdato: '2024-09-05',
        skjemaversjon: 2,
        hjmBrukersFnr: '26928698180',
        prioritet: 'NORMAL',
      },
    }
