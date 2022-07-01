import React, { useEffect, useRef, useState } from 'react';
import './sorting.scss'


export default function Sorting({ cards, setSorting, sorting }) {

  const [authors, setAuthors] = useState([]);
  const authorRef = useRef(null);
  const dateBeforeRef = useRef(null);
  const dateAfterRef = useRef(null);


  const getAuthors = (cards) => {
    const arr = [];

    cards.map((article) => {
      if (article.author === null && !arr.includes("Unknown")) {
        arr.push("Unknown");
      }

      if (!arr.includes(article.author) && article.author !== null) {
        arr.push(article.author);
      }
    });

    return arr.sort();
  }

  const handleSelect = () => {
    setSorting({ ...sorting, author: authorRef.current.value })
  }

  const handleDateBefore = () => {
    setSorting({...sorting, dateBefore: new Date(dateBeforeRef.current.value)})
  }

  const handleDareAfter = () => {
    setSorting({...sorting, dateAfter: new Date(dateAfterRef.current.value)})
  }

  useEffect(() => {
    setAuthors(getAuthors(cards));
  }, [cards]);

  return (
    <div className="sorting">
      <select
        className="sorting__select-list select-list"
        ref={authorRef}
        value={sorting.author}
        onChange={handleSelect} >
        <option className="select-list__option" defaultValue >
          Выбор автора
        </option>
        {authors.map((author) => (
          <option key={author} value={author} className="select-list__option">
            {author}
          </option>
        ))}
      </select>

      <div className="sorting__date">
        <label htmlFor="date1" className="sorting__date-label">
          От
          <input
            type="date"
            name="date1"
            className="sorting__date-input"
            aria-required="true"
            aria-invalid="false"
            ref={dateBeforeRef}
            onChange={handleDateBefore}
            value={sorting.dateBefore.toISOString().slice(0, 10)}
          />
        </label>
        <label htmlFor="date2" className="sorting__date-label">
          До
          <input
            type="date"
            name="date2"
            className="sorting__date-input"
            aria-required="true"
            aria-invalid="false"
            ref={dateAfterRef}
            onChange={handleDareAfter}
            value={sorting.dateAfter.toISOString().slice(0, 10)}
          />
        </label>
      </div>
    </div>


  )

}

