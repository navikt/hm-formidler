//import { ApplicationContext } from '../statemanagement/ApplicationContext'
import { Element, Normaltekst, Undertittel, Systemtittel } from 'nav-frontend-typografi'
import './../stylesheet/oppsummering.module.scss'
import { useTranslation } from 'react-i18next'
import { Formidlerinfo } from '../interfaces/Formidlerinfo'
import { Oppfolgingsansvarliginfo } from '../interfaces/Oppfolgingsansvarliginfo'

type FormidlerProps = {
  formidler: Formidlerinfo
  oppfolgingsansvarlig: Oppfolgingsansvarliginfo
}

const OppfoelgingOgOpplaeringOppsummering = (props: FormidlerProps) => {
  const { t } = useTranslation()
  //const { state } = useContext(ApplicationContext)
  const { formidler, oppfolgingsansvarlig } = props

  return (
    <>
      <div className="contentBlock categoryRow">
        <Systemtittel tag="h3"> {t('oppsummering.leveringOgOpplaring')}</Systemtittel>
      </div>
      <div className="contentBlock">
        <div className="contentBlock">
          <Undertittel tag="h4">{t('felles.hjelpemiddelFormidler')}</Undertittel>
        </div>
        <div className="contentBlock">
          <div className={'infoTable'}>
            <div className={'infoRow'}>
              <Element className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.navn')}</Element>
              <Normaltekst className={'infoRowCell'}>{formidler.navn}</Normaltekst>
            </div>
            <div className={'infoRow'}>
              <Element className={'infoRowCell fixedWidthLabel'}>{t('felles.arbeidssted')}</Element>
              <Normaltekst className={'infoRowCell'}>{formidler.arbeidssted}</Normaltekst>
            </div>
            <div className={'infoRow'}>
              <Element className={'infoRowCell fixedWidthLabel'}>{t('felles.stilling')}</Element>
              <Normaltekst className={'infoRowCell'}>{formidler.stilling}</Normaltekst>
            </div>
            <div className={'infoRow'}>
              <Element className={'infoRowCell fixedWidthLabel'}>{t('felles.adresse')}</Element>
              <Normaltekst className={'infoRowCell'}>{formidler.adresse}</Normaltekst>
            </div>
            <div className={'infoRow'}>
              <Element className={'infoRowCell fixedWidthLabel'}>{t('felles.tlf')}</Element>
              <Normaltekst className={'infoRowCell'}>{formidler.telefon}</Normaltekst>
            </div>
            <div className={'infoRow'}>
              <Element className={'infoRowCell fixedWidthLabel'}>{t('felles.treffesEnklest')}</Element>
              <Normaltekst className={'infoRowCell'}>{formidler.treffesEnklest}</Normaltekst>
            </div>
            <div className={'infoRow'}>
              <Element className={'infoRowCell fixedWidthLabel'}>{t('felles.epost')}</Element>
              <Normaltekst className={'infoRowCell'}>{formidler.epost}</Normaltekst>
            </div>
          </div>
        </div>
      </div>
      <div className="contentBlock">
        <div className="contentBlock">
          <Undertittel tag="h4">{t('oppsummering.ansvarlig')}</Undertittel>
        </div>
        <div className="contentBlock">
          {!oppfolgingsansvarlig ? (
            <div className={'infoRow'}>
              <Element className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.navn')}</Element>
              <Normaltekst className={'infoRowCell'}>
                {formidler.navn} {t('oppsummering.hjelpemiddelformidler')}
              </Normaltekst>
            </div>
          ) : (
            <div className={'infoTable'}>
              <div className={'infoRow'}>
                <Element className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.navn')}</Element>
                <Normaltekst className={'infoRowCell'}>{oppfolgingsansvarlig.navn}</Normaltekst>
              </div>
              <div className={'infoRow'}>
                <Element className={'infoRowCell fixedWidthLabel'}>{t('felles.arbeidssted')}</Element>
                <Normaltekst className={'infoRowCell'}>{oppfolgingsansvarlig.arbeidssted}</Normaltekst>
              </div>
              <div className={'infoRow'}>
                <Element className={'infoRowCell fixedWidthLabel'}>{t('felles.stilling')}</Element>
                <Normaltekst className={'infoRowCell'}>{oppfolgingsansvarlig.stilling}</Normaltekst>
              </div>
              <div className={'infoRow'}>
                <Element className={'infoRowCell fixedWidthLabel'}>{t('felles.tlf')}</Element>
                <Normaltekst className={'infoRowCell'}>{oppfolgingsansvarlig.telefon}</Normaltekst>
              </div>
              <div className={'infoRow'}>
                <Element className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.ansvar')}</Element>
                <Normaltekst className={'infoRowCell'}>{oppfolgingsansvarlig.ansvarFor}</Normaltekst>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default OppfoelgingOgOpplaeringOppsummering
