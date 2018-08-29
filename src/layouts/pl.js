import React from 'react'
import Layout from './index'

export default props => <Layout {...props} lang="pl" />

export const query = graphql`
  query LayoutPl {
    site {
      siteMetadata {
        title
      }
    }
  }
`
