import React, { useEffect, useRef, useState } from 'react';
import './sorting.scss'


export default function Sorting({ cards, setSorting, sorting }) {

  const [authors, setAuthors] = useState([]);
  const authorRef = useRef(null);
  const dateBeforeRef = useRef(null);
  const dateAfterRef = useRef(null);


  function getAuthors(cards) {
    const uniqueAuthors = [];

    cards.map((article) => {
      if (article.author === null && !uniqueAuthors.includes("Unknown")) {
        uniqueAuthors.push("Unknown");
      }

      if (!uniqueAuthors.includes(article.author) && article.author !== null) {
        uniqueAuthors.push(article.author);
      }
    });

    return uniqueAuthors.sort();
  }

  useEffect(() => {
    setAuthors(getAuthors(cards));
  }, [cards]);

  return (
    <div className="sorting">
      <select
        className="select-list"
        ref={authorRef}
        value={sorting.author}
        onChange={() =>
          setSorting({ ...sorting, author: authorRef.current.value })
        }
      >
        <option className="select-list__option" defaultValue >
          Выбор автора
        </option>
        {authors.map((author) => (
          <option
            key={author}
            value={author}
            className="select-list__option"
          >
            {author}
          </option>
        ))}
      </select>

      <div className="gallery__bigInput">
        <label htmlFor="date1" className="filter__date-label">
          От
          <input
            type="date"
            name="date1"
            className="gallery__dataInput"
            aria-required="true"
            aria-invalid="false"
            ref={dateBeforeRef}
            onChange={() =>
              setSorting({
                ...sorting,
                dateBefore: new Date(dateBeforeRef.current.value),
              })
            }
            value={sorting.dateBefore.toISOString().slice(0, 10)}
          />
        </label>
        <label htmlFor="date2" className="filter__date-label">
          До
          <input
            type="date"
            name="date2"
            className="gallery__dataInput"
            aria-required="true"
            aria-invalid="false"
            ref={dateAfterRef}
            value={sorting.dateAfter.toISOString().slice(0, 10)}
            onChange={() =>
              setSorting({
                ...sorting,
                dateAfter: new Date(dateAfterRef.current.value),
              })
            }
          />
        </label>
      </div>
    </div>


  )

}

