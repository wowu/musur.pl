import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'

// import 'normalize.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Krótko i treściwie.' },
        { name: 'keywords', content: 'strony internetowe, boty, aplikacje, Karol Musur' },
      ]}
    />
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
    <div style={{
      maxWidth: '42rem',
      margin: '2rem auto'
    }}>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
