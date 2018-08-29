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
    <Helmet>
      <link rel="alternate" hreflang="en" href="/en/send_me_later" />
      <link rel="alternate" hreflang="pl" href="/pl/send_me_later" />
    </Helmet>

    <Header lang="en" location={props.location} />

    <div className="mt30 flex-ns">
      <SendMeLaterIcon className="mh20" />

      <div className="info-box__wrapper">
        <h1 className="m0 mt30">Send Me Later</h1>
        <h2 className="m0 mt10">Telegram Bot</h2>
        <p className="mt10">Don't forget about anything anymore.</p>
      </div>
    </div>

    <div className="mt20">
      Telegram:{' '}
      <OutboundLink href="https://t.me/send_me_later_bot">
        @send_me_later_bot
      </OutboundLink>
    </div>

    <h4 className="mt40">Cool use cases ✨</h4>

    <ol>
      <li>
        A friend sends you something you don't want to forget about. Forward
        his/her message to the bot and set the right reminder time.
      </li>

      <li>
        You see a tweet or a webage you want to check later. Use sharing menu on
        your mobile device and share the link to the bot.
      </li>

      <li>
        Simple reminders. Just type <i>"buy the milk"</i>, and you won't forget
        to do it 😎
      </li>
    </ol>

    <ExternalOutboundLink icon={false} href="https://t.me/send_me_later_bot">
      <div className="mt50">
        Add on Telegram <ExternalIcon />
      </div>
    </ExternalOutboundLink>
  </div>
)
