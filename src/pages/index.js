import React from 'react'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Header from '../components/header'

import ExternalOutboundLink from '../components/ExternalOutboundLink'

const Divider = () => <span style={{ padding: '0 0.5rem' }}>&bull;</span>

const IndexPage = props => (
  <div>
    <Header home={true} location={props.location} />

    <h1>Karol Musur</h1>
    <p>I create web apps, Telegram bots, Mac apps and more.</p>

    <p>
      <OutboundLink rel="me" href="https://t.me/pankarol">
        Telegram
      </OutboundLink>
      <Divider />
      <OutboundLink rel="me" href="https://twitter.com/PanKarol_">
        Twitter
      </OutboundLink>
      <Divider />
      <OutboundLink rel="me" href="https://github.com/wowu">
        GitHub
      </OutboundLink>
      <Divider />
      <OutboundLink href="mailto:karol@musur.pl">Email</OutboundLink>
    </p>

    <h3>Projects</h3>

    <h4>Mac Apps</h4>

    <ul>
      <li>
        <ExternalOutboundLink href="https://monofocus.app">
          MonoFocus
        </ExternalOutboundLink>{' '}
        - Focus on one task at a time, always visible in your menu bar. Created
        in cooperation with <a href="https://flatpixels.pl">flatpixels</a>.
      </li>

      <li>
        <ExternalOutboundLink href="https://1440app.com">
          1440
        </ExternalOutboundLink>{' '}
        - A macOS menu bar app showing minutes left until midnight. Created in
        cooperation with <a href="https://flatpixels.pl">flatpixels</a>.
      </li>
    </ul>

    <h4>Telegram Bots</h4>

    <ul>
      <li>
        <ExternalOutboundLink href="https://t.me/ctdwnbot">
          Countdown
        </ExternalOutboundLink>{' '}
        (@ctdwnbot) - Track remaining time to events that matter to you.
      </li>
      <li>
        <Link to="send_me_later">SendMeLater</Link> (@send_me_later_bot) - The
        fastest way of creating reminders in a Telegram chat.{' '}
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

    <h4>Security</h4>

    <ul>
      <li>Capturing flags at <em>we11_d0ne</em> team - <ExternalOutboundLink href="https://ctftime.org/team/137910">CTFtime profile</ExternalOutboundLink></li>
    </ul>
  </div>
)

export default IndexPage
