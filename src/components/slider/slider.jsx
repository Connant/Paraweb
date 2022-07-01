import React from "react";
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./slider.scss";

export default function Slider() {

  return (
    <div >
      <Swiper modules={[Pagination, A11y]} slidesPerView={1} pagination={{ clickable: true }} >
        <SwiperSlide className="swiper">
          <div className="swiper__content">
            <h2 className="swiper__title">Как бизнесу сохранять IT&#8209;кадры&nbsp;на фоне кризиса</h2>
            <p className='swiper__text'>
              Инструменты, которые могут использовать компании для удержания сотрудников
            </p>
            <a href="/" className="swiper__button">Подробнее</a>
          </div>
        </SwiperSlide >
        <SwiperSlide className="swiper">
          <div className='swiper__content'>
            <h2 className='swiper__title'>Как бизнесу сохранять IT&#8209;кадры&nbsp;на фоне кризиса</h2>
            <p className='swiper__text'>
              Инструменты, которые могут использовать компании для удержания сотрудников
            </p>
            <a href="/" className="swiper__button">Подробнее</a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper">
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

