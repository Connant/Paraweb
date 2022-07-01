import { useState, useEffect } from "react";
import { downloadArticles } from "../../server/api";
import Cards from "../cards/cards";
import Sorting from "../sorting/sorting";
import Footer from "../footer/footer";
import Header from "../header/header";
import Slider from "../slider/slider";
import "./main.scss"


export default function Main() {

  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [cards, setCards] = useState([]);
  const [sorting, setSorting] = useState({
    author: "Выбор автора",
    dateBefore: new Date('10.11.2010'),
    dateAfter: new Date(),
  });

  const fetchData = async () => {
    const cardsList = await downloadArticles();
    setCards(cardsList.articles);
    setIsDataLoaded(true);
  };

  const useSorting = (articles, filters) => {
    const author = filters.author === 'Unknown' ? null : filters.author;
    const dateBefore = filters.dateBefore;
    const dateAfter = filters.dateAfter;

    if (author === "Выбор автора") {
      return articles.filter(
        (article) =>
          new Date(article.publishedAt) < dateAfter &&
          new Date(article.publishedAt) > dateBefore
      );
    }

    return articles.filter(
      (article) =>
        new Date(article.publishedAt) < dateAfter &&
        new Date(article.publishedAt) > dateBefore &&
        article.author === author
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="page">
      <Header />

      <main className="page__main">

        <Slider />

        <Sorting cards={cards} setSorting={setSorting} sorting={sorting} />

        <Cards isDataLoaded={isDataLoaded} cards={useSorting(cards, sorting)} sorting={sorting} setSorting={setSorting} />

      </main>

      <Footer />
    </div>
  )
}
