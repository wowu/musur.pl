import React from 'react'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Helmet from 'react-helmet'

import Header from '../components/header'

import ExternalOutboundLink from '../components/ExternalOutboundLink'

const IndexPage = props => (
  <div>
    <Helmet>
      <link rel="alternate" hreflang="en" href="/en" />
      <link rel="alternate" hreflang="pl" href="/pl" />
    </Helmet>

    <Header home={true} lang="en" location={props.location} />

    <h1>Karol Musur</h1>
    <p>Web development, bots and apps.</p>

    <h2>Projects</h2>

    <h4>Telegram Bots</h4>

    <ul>
      <li>
        <ExternalOutboundLink href="https://t.me/ctdwnbot">
          Countdown
        </ExternalOutboundLink>{' '}
        (@ctdwnbot) - Telegram bot that countds time to selected events.
      </li>
      <li>
        <Link to="/en/send_me_later">SendMeLater</Link> (@send_me_later_bot) -
        Fast way of creating reminders in a Telegram chat.{' '}
        <Link to="/en/send_me_later">Read more...</Link>
      </li>
    </ul>

    <h4>Themes</h4>

    <ul>
      <li>
        <ExternalOutboundLink href="https://crmrkt.com/pMgdJA">
          Seattle
        </ExternalOutboundLink>{' '}
        - Simple WordPress theme crafted with bloggers in mind. Created in
        cooperation with <a href="http//flatpixels.pl">flatpixels</a>.
      </li>

      <li>
        <ExternalOutboundLink href="http://january.musur.pl/">
          January Blue
        </ExternalOutboundLink>{' '}
        - WordPress theme for blogs and small magazines.
      </li>
    </ul>

    <h4>Websites</h4>

    <ul>
      <li>
        <ExternalOutboundLink href="http://biegiempozdrowie.pl">
          Biegiem Po Zdrowie (pl)
        </ExternalOutboundLink>{' '}
        - "Running For Health" project website. Allows user to find a running
        event in their city. Created in cooperation with{' '}
        <a href="http://flatpixels.pl">flatpixels</a>.
      </li>

      <li>
        <ExternalOutboundLink href="http://gorskiebieganie.pl">
          Stowarzyszenie Biegów Górskich (pl)
        </ExternalOutboundLink>{' '}
        - Website of "Association of Moutain Running" with information about
        organised events.
      </li>
    </ul>

    <h2>Contact</h2>

    <p>
      Telegram:{' '}
      <OutboundLink href="https://t.me/pankarol">@pankarol</OutboundLink>
      <br />
      Twitter:{' '}
      <OutboundLink href="https://twitter.com/PanKarol_">
        @pankarol_
      </OutboundLink>
      <br />
      GitHub: <OutboundLink href="https://github.com/wowu">wowu</OutboundLink>
      <br />
      Mail:{' '}
      <OutboundLink href="mailto:karol@musur.pl">karol@musur.pl</OutboundLink>
    </p>
  </div>
)

export default IndexPage
