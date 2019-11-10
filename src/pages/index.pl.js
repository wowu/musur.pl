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

    <Header home={true} lang="pl" location={props.location} />

    <h1>Karol Musur</h1>
    <p>Strony internetowe, boty i aplikacje.</p>

    <h2>Projekty</h2>

    <h4>Aplikacje</h4>

    <ul>
      <li>
        <ExternalOutboundLink href="https://1440app.com">
          1440
        </ExternalOutboundLink>{' '}
        - Aplikacja na system macOS pokazująca minuty pozostałe danego dnia. Powstała przy współpracy z <a href="https://flatpixels.pl">flatpixels</a>.
      </li>
    </ul>

    <h4>Strony internetowe</h4>

    <ul>
      <li>
        <ExternalOutboundLink href="http://biegiempozdrowie.pl">
          Biegiem Po Zdrowie
        </ExternalOutboundLink>{' '}
        - Strona projektu Biegiem Po Zdrowie. Powstała przy współpracy z{' '}
        <a href="http://flatpixels.pl">flatpixels</a>.
      </li>

      <li>
        <ExternalOutboundLink href="http://gorskiebieganie.pl">
          Stowarzyszenie Biegów Górskich
        </ExternalOutboundLink>{' '}
        - Znajdziesz tam informacje o biegach organizowanych przez
        stowarzyszenie.
      </li>
    </ul>

    <h4>Szablony</h4>

    <ul>
      <li>
        <ExternalOutboundLink href="https://crmrkt.com/pMgdJA">
          Seattle
        </ExternalOutboundLink>{' '}
        - Szablon blogowy do WordPressa. Powstał przy współpracy z{' '}
        <a href="http//flatpixels.pl">flatpixels</a>.
      </li>

      <li>
        <ExternalOutboundLink href="http://january.musur.pl/">
          January Blue
        </ExternalOutboundLink>{' '}
        - Szablon do WordPressa przeznaczony dla magazynów i większych blogów.
      </li>
    </ul>

    <h4>Boty</h4>

    <ul>
      <li>
        <ExternalOutboundLink href="https://t.me/ctdwnbot">
          Countdown
        </ExternalOutboundLink>{' '}
        (@ctdwnbot) - Bot do Telegrama pozwalający na odliczanie czasu do
        wybranych dat.
      </li>
      <li>
        <Link to="/pl/send_me_later">SendMeLater</Link> (@send_me_later_bot) -
        Szybki sposób na tworzenie przypomnień używając Telegrama.{' '}
        <Link to="/pl/send_me_later">Zobacz więcej...</Link>
      </li>
    </ul>

    <h2>Kontakt</h2>

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
