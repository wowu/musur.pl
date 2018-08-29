import React from 'react'
import Link from 'gatsby-link'

class LanguageSwitcher extends React.Component {
  constructor(props) {
    super(props)

    this.pathWithLanguage = props.location.pathname || '/'
    this.path = this.pathWithLanguage.replace(/\/(pl|en)/g, '')
  }

  render() {
    return (
      <span>
        <Link to={`/pl${this.path}`}>pl</Link>
        <span> / </span>
        <Link to={`/en${this.path}`}>en</Link>
      </span>
    )
  }
}

export default LanguageSwitcher
