import React from 'react'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Helmet from 'react-helmet'

import Header from '../components/header'

import ExternalOutboundLink from '../components/ExternalOutboundLink'

const IndexPage = props => (
  <div>
    <Header home={true} location={props.location} />

    <h1>Karol Musur</h1>
    <p>Web development, bots and apps.</p>

    <h2>Projects</h2>

    <h4>Apps</h4>

    <ul>
      <li>
        <ExternalOutboundLink href="https://monofocus.app">
          MonoFocus
        </ExternalOutboundLink>{' '}
        - Focus on one task at a time, always visible in your menu bar. Created in cooperation with <a href="https://flatpixels.pl">flatpixels</a>.
      </li>

      <li>
        <ExternalOutboundLink href="https://1440app.com">
          1440
        </ExternalOutboundLink>{' '}
        - A macOS menu bar app showing minutes left until midnight. Created in cooperation with <a href="https://flatpixels.pl">flatpixels</a>.
      </li>
    </ul>

    <h4>Telegram Bots</h4>

    <ul>
      <li>
        <ExternalOutboundLink href="https://t.me/ctdwnbot">
          Countdown
        </ExternalOutboundLink>{' '}
        (@ctdwnbot) - Telegram bot counting time to added events.
      </li>
      <li>
        <Link to="send_me_later">SendMeLater</Link> (@send_me_later_bot) -
        The fastest way of creating reminders in a Telegram chat.{' '}
        <Link to="send_me_later">Read more...</Link>
      </li>
    </ul>

    <h4>Themes</h4>

    <ul>
      <li>
        <ExternalOutboundLink href="https://crmrkt.com/pMgdJA">
          Seattle
        </ExternalOutboundLink>{' '}
        - Simple WordPress theme crafted with bloggers in mind. Created in
        cooperation with <a href="https://flatpixels.pl">flatpixels</a>.
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
        <a href="https://flatpixels.pl">flatpixels</a>.
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
      <OutboundLink rel="me" href="https://t.me/pankarol">@pankarol</OutboundLink>
      <br />
      Twitter:{' '}
      <OutboundLink rel="me" href="https://twitter.com/PanKarol_">
        @pankarol_
      </OutboundLink>
      <br />
      GitHub: <OutboundLink rel="me" href="https://github.com/wowu">wowu</OutboundLink>
      <br />
      Mail:{' '}
      <OutboundLink href="mailto:karol@musur.pl">karol@musur.pl</OutboundLink>
    </p>
  </div>
)

export default IndexPage
