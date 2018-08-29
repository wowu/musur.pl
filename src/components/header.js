import React from 'react'
import Link from 'gatsby-link'
import LanguageSwitcher from './languageSwitcher'
import PropTypes from 'prop-types'

const Header = ({ lang, home, location }) => (
  <div>
    {!home && (
      <span>
        <Link to={`/${lang}/`}>⟵ Home</Link>
        <div style={{ display: 'inline-block', margin: '0 8px' }}>&bull;</div>
      </span>
    )}

    <LanguageSwitcher location={location} />
  </div>
)

Header.propTypes = {
  location: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  home: PropTypes.bool,
}

export default Header
