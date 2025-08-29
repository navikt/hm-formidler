import React from 'react'
import { BodyShort } from '@navikt/ds-react'
import FixedWidthLabel from './FixedWidthLabel'
import styles from '../stylesheet/InfoRow.module.scss'

type InfoRowProps = {
  label: string
  body: React.ReactNode
}

const InfoRow: React.FC<InfoRowProps> = ({ label, body }) => {
  return (
    <div className={styles.infoRow}>
      <FixedWidthLabel>{label}</FixedWidthLabel>
      <BodyShort>{body}</BodyShort>
    </div>
  )
}

export default InfoRow