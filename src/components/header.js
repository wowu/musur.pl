import React from 'react'
import Link from 'gatsby-link'
import LanguageSwitcher from './languageSwitcher'
import PropTypes from 'prop-types'

const Header = ({ lang, home, location }) => {
  const homeText = lang == 'pl' ? 'Strona Główna' : 'Home'

  return (
    <div>
      {!home && (
        <span>
          <Link to={`/${lang}/`}>⟵ {homeText}</Link>
          <div style={{ display: 'inline-block', margin: '0 8px' }}>&bull;</div>
        </span>
      )}

      <LanguageSwitcher location={location} />
    </div>
  )
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  home: PropTypes.bool,
}

export default Header
