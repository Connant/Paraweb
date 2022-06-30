import React from 'react';
import './cards.scss';

export default function Cards({ isDataLoaded, cards, sorting, setSorting }) {

  if (!isDataLoaded) {
    return 'Loading';
  }

  function trimText(text) {
    if (text.length < 150) {
      return text;
    }

    return `${text.slice(0, 150)}...`;
  }

  function formatArticleDate(date) {
    return new Date(date)
      .toLocaleString("ru", { day: "numeric", month: "long", year: "numeric" })
      .replace(/\s*г\./, "");
  }

  console.log(cards);

  return (
    <section className="cards">

      <ul className='cards__list list'>

        {cards.length === 0
          ? <h3 className="cards-list__text">
            Ой! Похоже, статей с такими характеристиками нет &#128532;
          </h3>
          : cards.map((card) => (

            <li className='list__item' key={card.title} onClick={() => setSorting({ ...sorting, author: card.author })}>

              <article className="list__article">

                <p className="date">{formatArticleDate(card.publishedAt)}</p>

                <h3 className="cards_title">{card.title}</h3>

                <p className='cards_info'>
                  {trimText(card.description)}
                </p>

                <button className="author">
                  {card.author ? card.author : "Unknown"}
                </button>

              </article>

            </li>
          ))}

      </ul>
    </section >

  )
}
