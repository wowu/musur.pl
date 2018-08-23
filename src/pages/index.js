import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Karol Musur</h1>
    <p>Strony internetowe, boty i aplikacje.</p>

    <h2>Projekty</h2>

    <h4>Strony internetowe</h4>

    <ul>
      <li>
        <a href="http://biegiempozdrowie.pl">Biegiem Po Zdrowie</a> - Strona projektu Biegiem Po Zdrowie. Powstała przy współpracy z <a href="http://flatpixels.pl">flatpixels</a>.
      </li>

      <li>
        <a href="http://gorskiebieganie.pl">Stowarzyszenie Biegów Górskich</a> - Znajdziesz tam informacje o biegach organizowanych przez stowarzyszenie.
      </li>
      
    </ul>

    <h4>Szablony</h4>

    <ul>
      <li>
        <a href="https://crmrkt.com/pMgdJA">Seattle</a> - Szablon blogowy do WordPressa. Powstał przy współpracy z <a href="http//flatpixels.pl">flatpixels</a>.
      </li>

      <li>
        <a href="http://january.musur.pl/">January Blue</a> - Szablon do WordPressa przeznaczony dla magazynów i większych blogów.
      </li>
    </ul>

    <h4>Boty</h4>

    <ul>
      <li>
        <a href="https://t.me/ctdwnbot">Countdown</a> (@ctdwnbot) - Bot do Telegrama pozwalający na odliczanie czasu do wybranych dat.
      </li>
      <li>
        <a href="https://t.me/send_me_later_bot">SendMeLater</a> (@send_me_later_bot) - Szybki sposób na tworzenie przypomnień używając Telegrama.
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
      Telegram: <a href="https://t.me/pankarol">@pankarol</a><br />
      Twitter: <a href="https://twitter.com/PanKarol_">@pankarol_</a><br />
      GitHub: <a href="https://github.com/wowu">wowu</a><br />
      Mail: <a href="mailto:karol@musur.pl">karol@musur.pl</a>
    </p>
    
  </div>
)

export default IndexPage
