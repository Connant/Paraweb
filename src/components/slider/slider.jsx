import React, { useRef } from "react";
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import slider_1 from "../../../public/img/slider_1.png";

import "swiper/css";
import "swiper/css/pagination";

import "./slider.scss";

const Slider = () => {

    return (
        <div className="swiper">
            <Swiper
                modules={[Pagination, A11y]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <img className="swiper__image" src="./img/slider_1.png" alt="back" />
                    <div className="swiper__content">
                        <h2 className="swiper__title">Как бизнесу сохранять IT&#8209;кадры&nbsp;на фоне кризиса</h2>
                        <p className='swiper__text'>
                        Инструменты, которые могут использовать компании для удержания сотрудников
                        </p>
                        <a href="/" className="swiper__button">Подробнее</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper__image' src="./img/slider_1.png" alt="back" />
                    <div className='swiper__content'>
                        <h2 className='swiper__title'>Как бизнесу сохранять IT&#8209;кадры&nbsp;на фоне кризиса</h2>
                        <p className='swiper__text'>
                        Инструменты, которые могут использовать компании для удержания сотрудников
                        </p>
                        <a href="/" className="swiper__button">Подробнее</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper__image' src="./img/slider_1.png" alt="back" />
                    <div className='swiper__content'>
                        <h2 className='swiper__title'>Как бизнесу сохранять IT&#8209;кадры&nbsp;на фоне кризиса</h2>
                        <p className='swiper__text'>
                        Инструменты, которые могут использовать компании для удержания сотрудников
                        </p>
                        <a href="/" className="swiper__button">Подробнее</a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
