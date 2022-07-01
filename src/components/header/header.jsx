import "./header.scss"

export default function Header() {

  return (
    <header className="page-header">

      <img src="./img/logo.svg" className="page-header__logo" alt="logo" />

      <div className="page-header__contacts contacts">

        <div className="contacts__phone">
          <a href="tel:+88000000000" className="phone">
            <span>
              8 800 000 00 00
            </span>
          </a>

        </div>

        <div className="contacts__mail">
          <a href="mailto:sales@logo.ru" className="mail">
            <span>
              sales@logo.ru
            </span>
          </a>
        </div>

      </div>

    </header>
  )
}
