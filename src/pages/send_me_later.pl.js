import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Helmet from 'react-helmet'

import Header from '../components/header'
import ExternalOutboundLink, {
  Icon as ExternalIcon,
} from '../components/ExternalOutboundLink'

import SendMeLaterIcon from '../assets/send_me_later.svg'

import './send_me_later.css'
import './framework.scss'

export default props => (
  <div>
    <Header lang="pl" location={props.location} />

    <div className="mt30 flex-ns">
      <SendMeLaterIcon className="mh20" />

      <div className="info-box__wrapper">
        <h1 className="m0 mt30">Send Me Later</h1>
        <h2 className="m0 mt10">Telegram Bot</h2>
        <p className="mt10">"Don't forget about anything anymore".</p>
      </div>
    </div>

    <div className="mt20">
      Telegram:{' '}
      <OutboundLink href="https://t.me/send_me_later_bot">
        @send_me_later_bot
      </OutboundLink>
    </div>

    <h4 className="mt40">Przykłady użycia bota ✨</h4>

    <ol>
      <li>
        Znajomy wysyła Ci wiadomość, o której nie chcesz zapomnieć. Przekaż
        wiadomość do bota i ustaw odpowiednie przypomnienie.
      </li>

      <li>
        Użyj menu udostępniania na swoim telefonie by udostępnić botowi link,
        który chcesz sprawdzić później.
      </li>

      <li>
        Proste, codzienne przypomnienia typu "kupić mleko" lub "wymienić żarówkę
        w pokoju".
      </li>
    </ol>

    <ExternalOutboundLink icon={false} href="https://t.me/send_me_later_bot">
      <div className="mt50">
        Dodaj na Telegramie <ExternalIcon />
      </div>
    </ExternalOutboundLink>
  </div>
)
