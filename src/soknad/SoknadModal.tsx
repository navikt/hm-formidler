import ModalWrapper from 'nav-frontend-modal'
import Soknad from './Soknad'
import { Knapp } from 'nav-frontend-knapper'
import { Download } from '@navikt/ds-icons'

type SoknadModalProps = {
  isOpen: boolean
  close: () => void
  soknad: any
  href: string
  erSakVisning?: boolean
}

const SoknadModal = (props: SoknadModalProps) => {
  return (
    <ModalWrapper
      appElement={document.getElementById('root')!}
      isOpen={props.isOpen}
      closeButton={true}
      contentLabel="Søknad"
      onRequestClose={props.close}
      style={{ content: { width: '100vw', maxWidth: '40rem', height: '90vh' } }}
      className="soknadModalContent"
    >
      <div className="soknadModalWrapperHeader">
        {props.href !== '' && (
          <Knapp
            kompakt
            onClick={() => {
              const a = document.createElement('a')
              a.download = String('true')
              a.href = props.href
              a.click()
            }}
          >
            <Download />
            <span>Last ned PDF</span>
          </Knapp>
        )}
      </div>
      <div className="soknadModalWrapper">
        <Soknad soknad={props.soknad} />
      </div>
      <style>{`
        div.soknadModalContent > section {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        
        div.soknadModalWrapperHeader {
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 4rem;
          border-bottom: 1px solid #c6c2bf;
          position: relative;
          top: 0;
        }
        
        div.soknadModalWrapper {
          padding: 0 0 0 0;
          overflow: scroll;
          position: absolute;
          bottom: 0;
          top: 4rem;
          left: 0;
          right: 0;
        }
        
        div.pdfobject-container {
          height: 100%;
        }

        @media screen and (max-width: 1024px) {
          div {
            /*height: 100%;*/
            width: 100%;
          }
        }
      `}</style>
    </ModalWrapper>
  )
}

export default SoknadModal
