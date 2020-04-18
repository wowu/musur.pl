import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const Header = ({ home, location }) => {
  return (
    <div>
      {!home && (
        <span>
          <Link to="/">⟵ Home</Link>
        </span>
      )}
    </div>
  )
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  home: PropTypes.bool,
}

export default Header
