import React from "react";
import "./Hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Penthahouse from "../../assets/images/penthahouse.png";
import CasinoRoyel from "../../assets/images/casinoroyel.png";
import ECafe from "../../assets/images/ecafe.png";
import ClubPoker from "../../assets/images/clubpoker.png";
import Lounge from "../../assets/images/lounge.png";
import SportsDeck from "../../assets/images/sportsdeck.png";
import { Autoplay, Pagination } from "swiper/modules";

const Images = [Penthahouse, CasinoRoyel, ECafe, ClubPoker, Lounge, SportsDeck];
const Hero: React.FC = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className="hero-container" id="home">
      <div className="mx">
        <div className="hero-wrapper">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={pagination}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {Images.map((slide, index) => (
              <SwiperSlide>
                <div key={index} className="slide">
                  <img src={slide} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
