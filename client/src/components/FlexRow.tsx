import React, { ReactNode } from 'react'

type FlexRowProps = {
  children: ReactNode
}

export const FlexRow: React.FC<FlexRowProps> = ({ children }) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    }}>
      {children}
    </div>
  )
}