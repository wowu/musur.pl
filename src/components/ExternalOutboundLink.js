import React from 'react'
import PropTypes from 'prop-types'

import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const Icon = () => (
  <FontAwesomeIcon
    style={{ height: 12, marginBottom: 4, marginLeft: 4 }}
    icon={faExternalLinkAlt}
  />
)

export { Icon }

const ExternalOutboundLink = props => (
  <OutboundLink href={props.href} target="_blank" rel="noreferrer" {...props}>
    {props.children}

    {props.icon && <Icon />}
  </OutboundLink>
)

ExternalOutboundLink.propTypes = {
  href: PropTypes.string.isRequired,
}

ExternalOutboundLink.defaultProps = {
  icon: true,
}

export default ExternalOutboundLink
