import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const IndexPage = () => (
  <div>
    <h1>Karol Musur</h1>
    <p>Strony internetowe, boty i aplikacje.</p>

    <h2>Projekty</h2>

    <h4>Strony internetowe</h4>

    <ul>
      <li>
        <OutboundLink href="http://biegiempozdrowie.pl">Biegiem Po Zdrowie</OutboundLink> - Strona projektu Biegiem Po Zdrowie. Powstała przy współpracy z <a href="http://flatpixels.pl">flatpixels</a>.
      </li>

      <li>
        <OutboundLink href="http://gorskiebieganie.pl">Stowarzyszenie Biegów Górskich</OutboundLink> - Znajdziesz tam informacje o biegach organizowanych przez stowarzyszenie.
      </li>
      
    </ul>

    <h4>Szablony</h4>

    <ul>
      <li>
        <OutboundLink href="https://crmrkt.com/pMgdJA">Seattle</OutboundLink> - Szablon blogowy do WordPressa. Powstał przy współpracy z <a href="http//flatpixels.pl">flatpixels</a>.
      </li>

      <li>
        <OutboundLink href="http://january.musur.pl/">January Blue</OutboundLink> - Szablon do WordPressa przeznaczony dla magazynów i większych blogów.
      </li>
    </ul>

    <h4>Boty</h4>

    <ul>
      <li>
        <OutboundLink href="https://t.me/ctdwnbot">Countdown</OutboundLink> (@ctdwnbot) - Bot do Telegrama pozwalający na odliczanie czasu do wybranych dat.
      </li>
      <li>
        <OutboundLink href="https://t.me/send_me_later_bot">SendMeLater</OutboundLink> (@send_me_later_bot) - Szybki sposób na tworzenie przypomnień używając Telegrama.
      </li>
    </ul>

    {/* <h4>Inne</h4>

    <ul>
      <li>
        <a href="http://blog.musur.pl">Blog</a>
      </li>
    </ul> */}

    <h2>Kontakt</h2>

    <p>
      Telegram: <OutboundLink href="https://t.me/pankarol">@pankarol</OutboundLink><br />
      Twitter: <OutboundLink href="https://twitter.com/PanKarol_">@pankarol_</OutboundLink><br />
      GitHub: <OutboundLink href="https://github.com/wowu">wowu</OutboundLink><br />
      Mail: <OutboundLink href="mailto:karol@musur.pl">karol@musur.pl</OutboundLink>
    </p>
    
  </div>
)

export default IndexPage
