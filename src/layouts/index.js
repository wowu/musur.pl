import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

const Layout = ({ children, data, location, lang }) => (
  <div>
    <Helmet
      title="Karol Musur - Web development, bots and apps."
      meta={[
        {
          name: 'description',
          content: 'Web development, bots and apps.',
        },
        {
          name: 'keywords',
          content: 'websites, telegram, bots, apps, Karol Musur',
        }
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

export const query = graphql`
  query LayoutEn {
    site {
      siteMetadata {
        title
      }
    }
  }
`
