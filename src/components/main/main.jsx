import Cards from "../cards/cards";
import Footer from "../footer/footer";
import Header from "../header/header";
import Slider from "../slider/slider";
import "./main.scss"


export default function Main() {

    return (
        <div className="page">
            <Header />

            <main>
                <Slider />

                <Cards />
            </main>

            <Footer />
        </div>
    )
}
