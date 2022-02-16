import React from 'react'
import './../stylesheet/styles.scss'
import Banner from '../components/Banner'
import NavFrontendSpinner from 'nav-frontend-spinner'

const Spinner = () => {
  return (
    <div className="content centeredElement">
      <header data-testid="bruker-info">
        <Banner />
      </header>
      <main>
        <div className="customPanel">
          <NavFrontendSpinner type="L" />
        </div>
      </main>
    </div>
  )
}

export default Spinner
