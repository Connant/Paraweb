import React, { useState } from 'react';
import './cards.scss'

export default function Cards() {


    const [dataFrom, setDataFrom] = useState(null);
    const [dataTill, setDataTill] = useState(null);

    const [value, setValue] = useState('');

    const handleClick = (event) => {
        setValue(event.target.value);
    }

    const handleInputDataFrom = (e) => {
        const value = e.target.value;
        setDataFrom(value);
    };

    const handleInputDataTill = (e) => {
        const value = e.target.value;
        setDataTill(value);
    };




    return (
        <section className="cards">
            <div className="sorting">
                <select className='select-list' value={value} onChange={handleClick}>
                    <option>Мышь</option>
                    <option>Кот</option>
                    <option>Сыр</option>
                    <option>Молоко</option>
                </select>

                <div className="gallery__bigInput">
                    <input
                        className="gallery__dataInput"
                        name="from"
                        type="date"
                        placeholder="От"
                        onChange={handleInputDataFrom}
                    />
                    <input
                        className="gallery__dataInput"
                        name="till"
                        type="date"
                        placeholder="~ До"
                        onChange={handleInputDataTill}
                    />
                </div>
            </div>

            <ul className='cards__list list'>
                <li className='list__item'>
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
                    <button className="author">
                        Иван Иванов
                    </button>
                </li>

                <li className='list__item'>
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
                    <button className="author">
                        Иван Иванов
                    </button>
                </li>
            </ul>
        </section>

    )
}
