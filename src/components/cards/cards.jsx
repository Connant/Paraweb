

export default function Cards() {

    return (
        <section className="cards">
            <div className="sorting">
                <input className="input" placeholder="Выбор автора" />
                <input className="input" placeholder="от - до" />
            </div>

            <ul>
                <li>
                    <p className="date">
                        12 июня 2022
                    </p>
                    <h3 className="cards_title">
                        Заголовок статьи
                    </h3>
                    <p className="cards_info">
                        Краткое описание статьи или ее начало.
                        Может занимать больше трех строк в высоту.
                        В таком случае предложение заканчивается многоточием...
                    </p>
                    <span className="author">
                        Иван Иванов
                    </span>
                </li>
            </ul>
        </section>

    )
}
