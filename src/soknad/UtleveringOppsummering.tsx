import { Element, Normaltekst, Undertittel } from 'nav-frontend-typografi'
import './../stylesheet/oppsummering.module.scss'
import { useTranslation } from 'react-i18next'
import { KontaktPersonType, Leveringsinfo, Leveringsmaate } from '../interfaces/Leveringinfo'
import { Formidlerinfo } from '../interfaces/Formidlerinfo'
import { Brukerinfo } from '../interfaces/Brukerinfo'

type LeveringProps = {
  levering: Leveringsinfo
  formidler: Formidlerinfo
  bruker: Brukerinfo
}

const UtleveringOppsummering = (props: LeveringProps) => {
  const { t } = useTranslation()

  const { levering, formidler, bruker } = props

  return (
    <>
      <div className="contentBlock">
        <div className="contentBlock">
          <Undertittel tag="h4">{t('oppsummering.utlevering')}</Undertittel>
        </div>
        <div className="contentBlock">
          <div className={'infoTable'}>
            {levering.leveringsmaate === Leveringsmaate.FOLKEREGISTRERT_ADRESSE ? (
              <div className={'infoRow'}>
                <Element className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.leveringsadresse')}</Element>
                <Normaltekst className={'infoRowCell'}>{t('oppsummering.FolkeregistrertAdresse')}</Normaltekst>
              </div>
            ) : levering.leveringsmaate === Leveringsmaate.HJELPEMIDDELSENTRAL ? (
              <div className={'infoRow'}>
                <Element className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.leveringsadresse')}</Element>
                <Normaltekst className={'infoRowCell'}>{t('oppsummering.hentesHjelpemiddelsentral')}</Normaltekst>
              </div>
            ) : levering.leveringsmaate === Leveringsmaate.ALLEREDE_LEVERT ? (
              <div className={'infoRow'}>
                <Element className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.obs')}</Element>
                <Normaltekst className={'infoRowCell'}>{t('oppsummering.alleredeUtlevertFraNav')}</Normaltekst>
              </div>
            ) : (
              <div className={'infoRow'}>
                <Element className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.leveringsadresse')}</Element>
                <Normaltekst className={'infoRowCell'}>{levering.adresse}</Normaltekst>
              </div>
            )}
            {levering.kontaktPerson.kontaktpersonType === KontaktPersonType.HJELPEMIDDELBRUKER ? (
              <div className={'infoRow'}>
                <Element className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.kontaktperson')}</Element>
                <Normaltekst className={'infoRowCell'}>
                  {bruker.fornavn} {bruker.etternavn} (Hjelpemiddelbruker)
                </Normaltekst>
              </div>
            ) : levering.kontaktPerson.kontaktpersonType === KontaktPersonType.HJELPEMIDDELFORMIDLER ? (
              <div className={'infoRow'}>
                <Element className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.kontaktperson')}</Element>
                <Normaltekst className={'infoRowCell'}>
                  {formidler.navn} {t('oppsummering.hjelpemiddelformidler')}
                </Normaltekst>
              </div>
            ) : levering.kontaktPerson.kontaktpersonType === KontaktPersonType.ANNEN_KONTAKTPERSON ? (
              <div className={'infoRow'}>
                <Element className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.kontaktperson')}</Element>
                <Normaltekst className={'infoRowCell'}>
                  {levering.kontaktPerson.navn} {levering.kontaktPerson.telefon}
                </Normaltekst>
              </div>
            ) : null}
            {levering.merknad ? (
              <div className={'infoRow'}>
                <Element className={'infoRowCell fixedWidthLabel'}>{t('felles.merknadTilUtlevering')}</Element>
                <Normaltekst className={'infoRowCell'}>{levering.merknad}</Normaltekst>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default UtleveringOppsummering
