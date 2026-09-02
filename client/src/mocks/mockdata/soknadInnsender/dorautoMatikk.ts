// Mock-data for Dørauto Matikk (dørautomatikk) (${API_PATH}/soknad/innsender/6600d6c6-3059-4a52-bcfb-9c5353a78e99)
export const dorautoMatikkMock = {
  søknadId: '6600d6c6-3059-4a52-bcfb-9c5353a78e99',
  behovsmeldingType: 'SØKNAD',
  datoOpprettet: '2026-09-02T11:17:48.754845',
  datoOppdatert: '2026-09-02T12:11:38.787256',
  status: 'GODKJENT_MED_FULLMAKT',
  fullmakt: true,
  fnrBruker: '13820599335',
  navnBruker: 'Dørauto Matikk',
  valgteÅrsaker: [],
  behovsmelding: {
    bruker: {
      fnr: '13820599335',
      navn: {
        fornavn: 'Dørauto',
        mellomnavn: null,
        etternavn: 'Matikk',
      },
      signaturtype: 'FULLMAKT',
      telefon: '13820599',
      veiadresse: {
        adresse: 'Fjellvegen 69',
        postnummer: '6770',
        poststed: 'Nordfjordeid',
      },
      kommunenummer: '4649',
      brukernummer: '30585090',
      kilde: 'PDL',
      legacyopplysninger: [],
    },
    brukersituasjon: {
      vilkår: [
        {
          vilkårtype: 'PRAKTISKE_PROBLEMER_I_DAGLIGLIVET_V1',
          tekst: {
            nb: 'Hjelpemiddelet er nødvendig for å avhjelpe praktiske problemer i dagliglivet, eller for å bli pleid i hjemmet.',
            nn: 'Hjelpemiddelet er nødvendig for å avhjelpa praktiske problem i dagleglivet, eller for å bli pleidd i heimen.',
          },
        },
        {
          vilkårtype: 'I_STAND_TIL_Å_BRUKE_HJELPEMIDLENE_V1',
          tekst: {
            nb: 'Dørauto Matikk vil være i stand til å bruke hjelpemidlene. Jeg har ansvaret for at hjelpemidlene blir levert, og at nødvendig opplæring, tilpasning og montering blir gjort.',
            nn: 'Dørauto Matikk vil vera i stand til å bruka hjelpemidla. Eg har ansvaret for at hjelpemidla blir leverte, og at nødvendig opplæring, tilpassing og montering blir gjort.',
          },
        },
        {
          vilkårtype: 'KAN_IKKE_LØSES_MED_ENKLERE_HJELPEMIDLER_V1',
          tekst: {
            nb: 'Dørauto Matikk sitt behov kan ikke løses med enklere og rimeligere hjelpemidler, eller ved andre tiltak som ikke dekkes av Nav.',
            nn: 'Dørauto Matikk behovet sitt kan ikkje løysast med enklare og rimelegare hjelpemiddel, eller ved andre tiltak som ikkje blir dekt av Nav.',
          },
        },
      ],
      funksjonsnedsettelser: [],
      funksjonsbeskrivelse: {
        innbyggersVarigeFunksjonsnedsettelse: 'ALDERDOMSSVEKKELSE',
        diagnose: null,
        beskrivelse: 'asdf ds',
      },
    },
    hjelpemidler: {
      hjelpemidler: [],
      tilbehør: [],
      produktkategorier: [
        {
          id: 'ecb5c225-9618-4145-9683-54201906b6d7',
          type: 'DØRAUTOMATIKK',
          navn: 'Dørautomatikk',
          antall: 1,
          delkontrakttittel: 'Omgivelseskontroll',
          bruksarenaer: [],
          opplysninger: [
            {
              key: {
                id: 'DØRAUTOMATIKK_INFORMERT_OM_NØDSTRØMSKRAV',
                versjon: 1,
              },
              ledetekst: {
                nb: 'Har du informert personen som søker dørautomatikk om krav til installering av nødstrøm?',
                nn: 'Har du informert personen som søkjer dørautomatikk om krav til installering av nødstraum?',
              },
              innhold: [
                {
                  fritekst: null,
                  forhåndsdefinertTekst: {
                    nb: 'Ja',
                    nn: 'Ja',
                  },
                  begrepsforklaring: null,
                  ledetekst: null,
                },
              ],
              innholdstype: 'TEKST',
            },
            {
              key: {
                id: 'DØRAUTOMATIKK_BOSITUASJON',
                versjon: 1,
              },
              ledetekst: {
                nb: 'Hva er personens bosituasjon?',
                nn: 'Kva er busituasjonen til personen?',
              },
              innhold: [
                {
                  fritekst: null,
                  forhåndsdefinertTekst: {
                    nb: 'Bor alene',
                    nn: 'Bur åleine',
                  },
                  begrepsforklaring: null,
                  ledetekst: null,
                },
              ],
              innholdstype: 'TEKST',
            },
            {
              key: {
                id: 'DØRAUTOMATIKK_BOLIG_BYGGEÅR',
                versjon: 1,
              },
              ledetekst: {
                nb: 'Hva er boligens byggeår (fire sifre)?',
                nn: 'Kva er byggeåret til bustaden (fire siffer)?',
              },
              innhold: [
                {
                  fritekst: '2015',
                  forhåndsdefinertTekst: null,
                  begrepsforklaring: null,
                  ledetekst: null,
                },
              ],
              innholdstype: 'TEKST',
            },
            {
              key: {
                id: 'DØRAUTOMATIKK_EIER_ELLER_LEIER',
                versjon: 1,
              },
              ledetekst: {
                nb: 'Eier eller leier personen boligen?',
                nn: 'Eig eller leiger personen bustaden?',
              },
              innhold: [
                {
                  fritekst: null,
                  forhåndsdefinertTekst: {
                    nb: 'Eier boligen',
                    nn: 'Eig bustaden',
                  },
                  begrepsforklaring: null,
                  ledetekst: null,
                },
              ],
              innholdstype: 'TEKST',
            },
            {
              key: {
                id: 'DØRAUTOMATIKK_BOLIGTYPE',
                versjon: 1,
              },
              ledetekst: {
                nb: 'Hvilken type bolig bor personen i?',
                nn: 'Kva type bustad bur personen i?',
              },
              innhold: [
                {
                  fritekst: null,
                  forhåndsdefinertTekst: {
                    nb: 'Enebolig',
                    nn: 'Einebustad',
                  },
                  begrepsforklaring: null,
                  ledetekst: null,
                },
              ],
              innholdstype: 'TEKST',
            },
          ],
          hjelpemidler: null,
          tilbehør: null,
          vedlegg: [
            {
              id: 'cb05dd19-26f2-447b-92d6-ba293d719cbd',
              navn: 'Dørautomatikk målsatt tegning',
              type: 'DØRAUTOMATIKK_MÅLSATT_TEGNING',
            },
            {
              id: 'c0b8d93a-a68f-499b-af8c-9369698cf265',
              navn: 'Dørautomatikk godkjenning montering',
              type: 'DØRAUTOMATIKK_GODKJENNING_MONTERING',
            },
          ],
          komponenter: [
            {
              id: '62041652-e63a-4f99-8715-4227a40e17ea',
              type: 'DØR',
              navn: 'Dør 1: Heisdør til selve heisen',
              opplysninger: [
                {
                  key: {
                    id: 'DØRAUTOMATIKK_DØR_TYPE',
                    versjon: 1,
                  },
                  ledetekst: {
                    nb: 'Hvilken dør trenger dørautomatikk?',
                    nn: 'Kva for dør treng dørautomatikk?',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Heisdør til selve heisen',
                        nn: 'Heisdør til sjølve heisen',
                      },
                      begrepsforklaring: null,
                      ledetekst: null,
                    },
                  ],
                  innholdstype: 'TEKST',
                },
                {
                  key: {
                    id: 'DØRAUTOMATIKK_DØR_BRANNKLASSIFISERT',
                    versjon: 1,
                  },
                  ledetekst: {
                    nb: 'Er døren brannklassifisert?',
                    nn: 'Er døra brannklassifisert?',
                  },
                  innhold: [
                    {
                      fritekst: null,
                      forhåndsdefinertTekst: {
                        nb: 'Nei',
                        nn: 'Nei',
                      },
                      begrepsforklaring: null,
                      ledetekst: null,
                    },
                  ],
                  innholdstype: 'TEKST',
                },
                {
                  key: {
                    id: 'DØRAUTOMATIKK_DØR_TREKKRAFT',
                    versjon: 1,
                  },
                  ledetekst: {
                    nb: 'Oppgi trekkraft på døren (kg).',
                    nn: 'Oppgi trekkraft på døra (kg).',
                  },
                  innhold: [
                    {
                      fritekst: '60',
                      forhåndsdefinertTekst: null,
                      begrepsforklaring: null,
                      ledetekst: null,
                    },
                  ],
                  innholdstype: 'TEKST',
                },
              ],
              vedlegg: [
                {
                  id: 'bc81f6d1-d715-46a8-abab-f8c5c868b0e1',
                  navn: 'Dør 1: Heisdør til selve heisen - bilder',
                  type: 'DØRAUTOMATIKK_DØR_BILDE',
                },
              ],
            },
          ],
        },
      ],
      totaltAntall: 1,
    },
    levering: {
      hjelpemiddelformidler: {
        navn: {
          fornavn: 'Kvadratisk',
          mellomnavn: null,
          etternavn: 'Faktura',
        },
        arbeidssted: 'Østby Dans og Fysioterapi',
        stilling: 'Fysioterapetut',
        telefon: '11223344',
        adresse: {
          adresse: 'Svanseveien 3',
          postnummer: '0010',
          poststed: 'OSLO',
        },
        epost: 'kvadratisk.faktura@tull.kommune.no',
        treffesEnklest: 'På telefon fra hjemmekontor.',
        kommunenavn: 'OSLO',
        kommunenummer: '0301',
      },
      oppfølgingsansvarlig: 'HJELPEMIDDELFORMIDLER',
      annenOppfølgingsansvarlig: null,
      utleveringsmåte: 'FOLKEREGISTRERT_ADRESSE',
      annenUtleveringsadresse: null,
      annenUtleveringskommune: null,
      annenUtleveringsbydel: null,
      annenUtleveringMottaker: null,
      utleveringKontaktperson: 'HJELPEMIDDELBRUKER',
      annenKontaktperson: null,
      utleveringMerknad: '',
      hast: null,
      automatiskUtledetTilleggsinfo: [],
    },
    innsender: {
      rolle: 'FORMIDLER',
      erKommunaltAnsatt: true,
      kurs: [
        {
          id: 4,
          title: 'Bestilling',
          kilde: 'kunnskapsbanken',
        },
        {
          id: 1,
          title: 'El-rullestol',
          kilde: 'kunnskapsbanken',
        },
        {
          id: 3,
          title: 'Elektrisk seng',
          kilde: 'kunnskapsbanken',
        },
        {
          id: 6,
          title: 'El-rullestol del 1 (april 2026)',
          kilde: 'kunnskapsbanken',
        },
        {
          id: 5,
          title: 'El-rullestol del 2',
          kilde: 'HMS_KURSHOLDER',
        },
      ],
      sjekketUtlånsoversiktForKategorier: [],
    },
    vedlegg: [],
    metadata: {
      bestillingsordningsjekk: {
        kanVæreBestilling: false,
        kriterier: {
          alleHovedProdukterPåBestillingsOrdning: true,
          alleTilbehørPåBestillingsOrdning: true,
          brukerHarHjelpemidlerFraFør: null,
          brukerHarInfotrygdVedtakFraFør: null,
          brukerHarHotsakVedtakFraFør: true,
          leveringTilFolkeregistrertAdresse: true,
          brukersAdresseErSatt: true,
          brukerBorIkkeIUtlandet: true,
          brukerErIkkeSkjermetPerson: true,
          inneholderIkkeFritekst: true,
          kildeErPdl: true,
          harIkkeForMangeOrdrelinjer: true,
          ingenProdukterErAlleredeUtlevert: true,
          brukerErTilknyttetBydelIOslo: null,
          harIngenBytter: true,
          brukerHarAdresseIOeBS: true,
        },
        metaInfo: {
          hovedProdukter: [],
          hovedProdukterIkkePåBestillingsordning: [],
          tilbehør: [],
          tilbehørIkkePåBestillingsordning: [],
        },
        version: '4c8e57fe86bfad1058058efd191c46ab865e943a',
      },
    },
    saksbehandlingvarsel: [],
    id: '6600d6c6-3059-4a52-bcfb-9c5353a78e99',
    type: 'SØKNAD',
    innsendingsdato: '2026-09-02',
    innsendingstidspunkt: '2026-09-02T11:17:38.587919498Z',
    skjemaversjon: 2,
    hjmBrukersFnr: '13820599335',
    prioritet: 'NORMAL',
  },
  soknadGjelder: 'Søknad om: dørautomatikk',
}
