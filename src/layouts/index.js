import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

const Layout = ({ children, data, location, lang }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Krótko i treściwie.' },
        {
          name: 'keywords',
          content: 'strony internetowe, boty, aplikacje, Karol Musur',
        },
      ]}
    />
    <div
      style={{
        maxWidth: '42rem',
        margin: '0 auto',
        padding: '1.5rem 1.125rem',
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const pageQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
