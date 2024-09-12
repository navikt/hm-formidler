import moment from 'moment'
import { SoknadStatus } from '../../statemanagement/SoknadStatus'
import { BehovsmeldingType } from '../../interfaces/CommonTypes'

export const sakerMock = [
  {
    søknadId: '85be32d6-052e-49e5-84c3-3e8de24687c7',
    behovsmeldingType: BehovsmeldingType.BYTTE,
    datoOpprettet: '2023-11-20T18:59:13.992+00:00',
    datoOppdatert: '2023-11-20T18:59:13.992+00:00',
    status: SoknadStatus.INNSENDT_FULLMAKT_IKKE_PÅKREVD,
    fnrBruker: '12345678910',
    navnBruker: 'Byttelise Bøttesen',
    søknadsdata: undefined,
    valgteÅrsaker: undefined,
  },
  {
    søknadId: 'fec887bc-5a95-49c2-a098-f0e0f7cd73hf',
    behovsmeldingType: BehovsmeldingType.BESTILLING,
    datoOpprettet: '2022-06-07T18:59:13.992+00:00',
    datoOppdatert: '2022-06-07T18:59:13.992+00:00',
    status: SoknadStatus.BESTILLING_FERDIGSTILT,
    fnrBruker: '12345678910',
    navnBruker: 'Nasse Nøff',
    søknadsdata: undefined,
    valgteÅrsaker: undefined,
  },
  {
    søknadId: 'fec887bc-5a95-49c2-a123-f0e0f7c32df3',
    behovsmeldingType: BehovsmeldingType.BESTILLING,
    datoOpprettet: '2022-06-06T18:59:13.992+00:00',
    datoOppdatert: '2022-06-06T18:59:13.992+00:00',
    status: SoknadStatus.BESTILLING_AVVIST,
    fnrBruker: '12345678910',
    navnBruker: 'Trude Luth',
    valgteÅrsaker: ['Annet'],
    søknadsdata: undefined,
  },
  {
    søknadId: 'abc887bc-5a95-49c2-a123-f0e0f7c32df3',
    behovsmeldingType: BehovsmeldingType.BESTILLING,
    datoOpprettet: '2022-06-06T18:59:13.992+00:00',
    datoOppdatert: '2022-06-06T18:59:13.992+00:00',
    status: SoknadStatus.BESTILLING_AVVIST,
    fnrBruker: '12345678910',
    navnBruker: 'Vegard Beider',
    valgteÅrsaker: ['Duplikat av en annen bestilling'],
    søknadsdata: undefined,
  },
  {
    søknadId: 'fec887bc-5a95-49c2-a098-f0e0f7c32df3',
    behovsmeldingType: BehovsmeldingType.SØKNAD,
    datoOpprettet: moment().toISOString(),
    datoOppdatert: moment().toISOString(),
    status: SoknadStatus.VENTER_GODKJENNING,
    fnrBruker: '12345678910',
    navnBruker: 'Egon Olsen',
    søknadsdata: undefined,
    valgteÅrsaker: undefined,
  },
  {
    søknadId: '5ef53d43-01ea-4b51-8ddb-0138f8f8014b',
    behovsmeldingType: BehovsmeldingType.SØKNAD,
    datoOpprettet: '2021-03-08T14:06:59.269+00:00',
    datoOppdatert: '2021-03-08T14:06:59.269+00:00',
    status: SoknadStatus.GODKJENT_MED_FULLMAKT,
    fnrBruker: '12345678910',
    navnBruker: 'Benny Frandsen',
    søknadsdata: undefined,
    valgteÅrsaker: undefined,
  },
  {
    søknadId: '5ef53d43-01ea-4b51-8ddb-0138f8f8015b',
    behovsmeldingType: BehovsmeldingType.SØKNAD,
    datoOpprettet: '2021-03-08T14:06:59.269+00:00',
    datoOppdatert: '2021-03-08T14:06:59.269+00:00',
    status: SoknadStatus.GODKJENT,
    fnrBruker: '12345678910',
    navnBruker: 'Kjeld Jensen',
    søknadsdata: undefined,
    valgteÅrsaker: undefined,
  },
  {
    søknadId: 'fec887bc-5a95-49c2-a098-f0e0f7c32df4',
    behovsmeldingType: BehovsmeldingType.SØKNAD,
    datoOpprettet: '2021-03-01T18:59:13.992+00:00',
    datoOppdatert: '2021-03-08T18:59:13.992+00:00',
    status: SoknadStatus.ENDELIG_JOURNALFØRT,
    fnrBruker: '12345678910',
    navnBruker: 'Pippilotta Viktualia Rullegardina Krusemynte Efraimsdatter Langstrømpe',
    søknadsdata: undefined,
    valgteÅrsaker: undefined,
  },
  {
    søknadId: '5ef53d43-01ea-4b51-8ddb-0138adsf',
    behovsmeldingType: BehovsmeldingType.SØKNAD,
    datoOpprettet: '2021-03-08T14:06:59.269+00:00',
    datoOppdatert: '2021-03-08T14:06:59.269+00:00',
    status: SoknadStatus.SLETTET,
    fnrBruker: '12345678910',
    navnBruker: 'Basse Jensen',
    søknadsdata: undefined,
    valgteÅrsaker: undefined,
  },
  {
    søknadId: '5ef53d43-01ea-4b51-8ddb-sdfgsdfg',
    behovsmeldingType: BehovsmeldingType.SØKNAD,
    datoOpprettet: '2021-02-07T14:06:59.269+00:00',
    datoOppdatert: '2021-03-08T14:06:59.269+00:00',
    status: SoknadStatus.UTLØPT,
    fnrBruker: '12345678910',
    navnBruker: 'Trude Dyrearter',
    søknadsdata: undefined,
    valgteÅrsaker: undefined,
  },
  {
    søknadId: '11153d43-01ea-4b51-8ddb-sdfgsdfg',
    behovsmeldingType: BehovsmeldingType.SØKNAD,
    datoOpprettet: '2021-02-07T14:06:59.269+00:00',
    datoOppdatert: '2021-03-08T14:06:59.269+00:00',
    status: SoknadStatus.VEDTAKSRESULTAT_INNVILGET,
    fnrBruker: '12345678910',
    navnBruker: 'Anders I. And',
    søknadsdata: undefined,
    valgteÅrsaker: undefined,
  },
  {
    søknadId: '22253d43-01ea-4b51-8ddb-sdfgsdfg',
    behovsmeldingType: BehovsmeldingType.SØKNAD,
    datoOpprettet: '2021-02-07T14:06:59.269+00:00',
    datoOppdatert: '2021-03-08T14:06:59.269+00:00',
    status: SoknadStatus.VEDTAKSRESULTAT_MUNTLIG_INNVILGET,
    fnrBruker: '12345678910',
    navnBruker: 'Anders I.M. And',
    søknadsdata: undefined,
    valgteÅrsaker: undefined,
  },
  {
    søknadId: '22253d43-01ea-4b51-9ddb-sdfgsdfg',
    behovsmeldingType: BehovsmeldingType.SØKNAD,
    datoOpprettet: '2021-02-07T14:06:59.269+00:00',
    datoOppdatert: '2021-03-08T14:06:59.269+00:00',
    status: SoknadStatus.VEDTAKSRESULTAT_DELVIS_INNVILGET,
    fnrBruker: '12345678910',
    navnBruker: 'Anders Andresen',
    søknadsdata: undefined,
    valgteÅrsaker: undefined,
  },
  {
    søknadId: '44453d43-01ea-4b51-8ddb-sdfgsdfg',
    behovsmeldingType: BehovsmeldingType.SØKNAD,
    datoOpprettet: '2021-02-07T14:06:59.269+00:00',
    datoOppdatert: '2021-03-08T14:06:59.269+00:00',
    status: SoknadStatus.VEDTAKSRESULTAT_AVSLÅTT,
    fnrBruker: '12345678910',
    navnBruker: 'Anders Andreasson',
    søknadsdata: undefined,
    valgteÅrsaker: undefined,
  },
  {
    søknadId: '32353d43-01ea-4b51-8ddb-sdfgsdfg',
    behovsmeldingType: BehovsmeldingType.SØKNAD,
    datoOpprettet: '2021-02-07T14:06:59.269+00:00',
    datoOppdatert: '2021-03-08T14:06:59.269+00:00',
    status: SoknadStatus.VEDTAKSRESULTAT_HENLAGTBORTFALT,
    fnrBruker: '12345678910',
    navnBruker: 'Anders "Henlagt" Andrej',
    søknadsdata: undefined,
    valgteÅrsaker: undefined,
  },
  {
    søknadId: '55553d43-01ea-4b51-8ddb-sdfgsdfg',
    behovsmeldingType: BehovsmeldingType.SØKNAD,
    datoOpprettet: '2021-02-07T14:06:59.269+00:00',
    datoOppdatert: '2021-03-08T14:06:59.269+00:00',
    status: SoknadStatus.VEDTAKSRESULTAT_ANNET,
    fnrBruker: '12345678910',
    navnBruker: 'Anders "Annet" Andrej',
    søknadsdata: undefined,
    valgteÅrsaker: undefined,
  },
  {
    søknadId: '33353d43-01ea-4b51-8ddb-sdfgsabc',
    behovsmeldingType: BehovsmeldingType.SØKNAD,
    datoOpprettet: '2021-02-07T14:06:59.269+00:00',
    datoOppdatert: '2021-03-08T14:06:59.269+00:00',
    status: SoknadStatus.UTSENDING_STARTET,
    fnrBruker: '12345678910',
    navnBruker: 'Helen Adams Keller',
    søknadsdata: undefined,
    valgteÅrsaker: undefined,
  },
  {
    søknadId: 'fc8ee79a-b234-4201-8735-129c9cff8d0b',
    behovsmeldingType: BehovsmeldingType.SØKNAD,
    datoOpprettet: moment().subtract(3, 'days').toISOString(),
    datoOppdatert: moment().subtract(3, 'days').toISOString(),
    status: SoknadStatus.GODKJENT_MED_FULLMAKT,
    fnrBruker: '12345678910',
    navnBruker: 'Rulle Stolbakken',
    søknadsdata: undefined,
    valgteÅrsaker: undefined,
  },
  {
    søknadId: '5839bbf1-8842-45c0-a8fd-71718260fce4',
    behovsmeldingType: BehovsmeldingType.SØKNAD,
    datoOpprettet: moment().subtract(12, 'days').toISOString(),
    datoOppdatert: moment().subtract(12, 'days').toISOString(),
    status: SoknadStatus.GODKJENT_MED_FULLMAKT,
    fnrBruker: '12345678910',
    navnBruker: 'Giovanni Varmevotti',
    søknadsdata: undefined,
    valgteÅrsaker: undefined,
  },
  {
    søknadId: 'a293fae9-262a-4fad-b7be-35715b953511',
    behovsmeldingType: BehovsmeldingType.SØKNAD,
    datoOpprettet: '2024-01-04T14:06:18.103+00:00',
    datoOppdatert: '2024-01-04T14:06:22.236+00:00',
    status: SoknadStatus.GODKJENT_MED_FULLMAKT,
    fnrBruker: '13820599335',
    navnBruker: 'Rulla Tor',
    søknadsdata: undefined,
    valgteÅrsaker: undefined,
  },
]
