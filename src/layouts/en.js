import React from 'react'
import Layout from './index'

export default props => <Layout {...props} lang="en" />

export const query = graphql`
  query LayoutEn {
    site {
      siteMetadata {
        title
      }
    }
  }
`