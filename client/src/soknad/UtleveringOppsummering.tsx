import React from 'react'
import { Heading, VStack } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { Hast, Hasteårsak } from '../interfaces/Hast'
import { Hjelpemiddelformidler, Kontaktperson, Levering, Utleveringsmåte } from '../interfaces/Leveringinfo'
import { Bruker } from '../interfaces/Innsenderbehovsmelding'
import { formaterPersonnavn, formaterVeiadresse } from '../interfaces/CommonTypes'
import { formaterTlf } from '../Utils'
import InfoRow from '../components/InfoRow'

type LeveringProps = {
  levering: Levering
  formidler: Hjelpemiddelformidler
  bruker: Bruker
}

const UtleveringOppsummering: React.FC<LeveringProps> = (props: LeveringProps) => {
  const { t } = useTranslation()

  const { levering, formidler, bruker } = props

  return (
    <>
      <VStack gap="6" style={{ marginBottom: '2rem' }}>
        <Heading size="small" level="3">
          {t('oppsummering.utlevering')}
        </Heading>
        <VStack gap="2">
          {levering.hast && <HastOppsummering hast={levering.hast} />}

          {levering.automatiskUtledetTilleggsinfo?.map((tilleggsinfo) => {
            return (
              <InfoRow
                label={t(`oppsummering.levering.tilleggsinfo.${tilleggsinfo}.label`)}
                body={t(`oppsummering.levering.tilleggsinfo.${tilleggsinfo}.tekst`)}
                key={tilleggsinfo}>
              </InfoRow>
            )
          })}
          {levering.utleveringsmåte === Utleveringsmåte.FOLKEREGISTRERT_ADRESSE && (
            <InfoRow
              label={t('oppsummering.leveringsadresse')}
              body={t('oppsummering.FolkeregistrertAdresse')}
            />
          )}
          {levering.utleveringsmåte === Utleveringsmåte.HJELPEMIDDELSENTRALEN && (
            <InfoRow
              label={t('oppsummering.leveringsadresse')}
              body={t('oppsummering.hentesHjelpemiddelsentral')}
            />
          )}
          {levering.utleveringsmåte === Utleveringsmåte.ALLEREDE_UTLEVERT_AV_NAV && (
            <InfoRow
              label={t('oppsummering.obs')}
              body={t('oppsummering.alleredeUtlevertFraNav')}
            />
          )}
          {levering.utleveringsmåte === Utleveringsmåte.ANNEN_BRUKSADRESSE && (
            <InfoRow
              label={t('oppsummering.leveringsadresse')}
              body={formaterVeiadresse(levering.annenUtleveringsadresse)}
            />
          )}

          {levering.utleveringKontaktperson === Kontaktperson.HJELPEMIDDELBRUKER && (
            <InfoRow
              label={t('oppsummering.kontaktperson')}
              body={formaterPersonnavn(bruker.navn) + ' (Hjelpemiddelbruker)'}
            />
          )}
          {levering.utleveringKontaktperson === Kontaktperson.HJELPEMIDDELFORMIDLER && (
            <InfoRow
              label={t('oppsummering.kontaktperson')}
              body={formaterPersonnavn(formidler.navn) + ' ' + t('oppsummering.hjelpemiddelformidler')}
            />
          )}
          {levering.utleveringKontaktperson === Kontaktperson.ANNEN_KONTAKTPERSON && levering.annenKontaktperson && (
            <InfoRow
              label={t('oppsummering.kontaktperson')}
              body={
                formaterPersonnavn(levering.annenKontaktperson.navn) +
                ' ' +
                formaterTlf(levering.annenKontaktperson.telefon)
              }
            />
          )}
          {levering.utleveringMerknad && (
            <InfoRow
              label={t('felles.merknadTilUtlevering')}
              body={levering.utleveringMerknad}
            />
          )}
        </VStack>
      </VStack>
    </>
  )
}

const HastOppsummering = ({ hast }: { hast: Hast }) => {
  const { t } = useTranslation()

  const årsaker = hast.hasteårsaker
    .filter((årsak) => årsak !== Hasteårsak.ANNET) // Trenger ikke vise denne i oppsummering
    .map((årsak) => t(`hasteårsak.${årsak}`))

  if (hast.hastBegrunnelse) {
    årsaker.push(hast.hastBegrunnelse)
  }

  return (
    <>
      <InfoRow
        label={t('hast.prioritet')}
        body={t('hast.sakenHaster')}
      />
      <InfoRow
        label={t('hast.årsakenTilHast')}
        body={
          årsaker.length === 1 ? (
            årsaker[0]
          ) : (
            <ul style={{ padding: 0, margin: 0, marginLeft: '20px' }}>
              {årsaker.map((årsak, i) => (
                <li key={i}>{årsak}</li>
              ))}
            </ul>
          )
        }
      />
    </>
  )
}

export default UtleveringOppsummering
