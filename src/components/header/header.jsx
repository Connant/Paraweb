import "./header.scss"

export default function Header() {

    return (
        <header className="page-header">
            <img src="./img/logo.svg" className="page-header__logo" alt="logo" />
            <div className="page-header__contacts contacts">
                <div className="contacts__phone">8 800 000 00 00</div>
                <div className="contacts__mail">sales@logo.ru</div>
            </div>
        </header>
    )
}
