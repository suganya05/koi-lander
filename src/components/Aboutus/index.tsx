import React, { useState } from "react";
import "./Aboutus.scss";
import FirstCircle from "../../assets/images/dim-circle.png";
import SecondCircle from "../../assets/images/glow-circle.png";
import Girl from "../../assets/images/girl.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Data = [
  {
    image: Girl,
    title: "Founder",
    name: "Akshay Kumar",
  },
  {
    image: Girl,
    title: "Founder",
    name: "Akshay Kumar",
  },
  {
    image: Girl,
    title: "Founder",
    name: "Akshay Kumar",
  },
  {
    image: Girl,
    title: "Founder",
    name: "Akshay Kumar",
  },
];
const AboutUs = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className="aboutus-container" id="about">
      <div className="mx">
        <div className="aboutus-wrapper">
          <div className="aboutus-content">
            <h1>About Us</h1>
            <p>
              Koi Club is a virtual world featuring six distinct floors from the
              Lounge to the Sports deck, E-cafe, Casino Royale, Poker Club, and
              Penthouse, each floor crafted with exceptional graphics and
              distinct features to ensure an unforgettable experience. Here, the
              user will find an immersive atmosphere by personalizing the
              avatars,interacting with various items and exploring six different
              games tailored with unique specifications, where users can place
              bets and engage in thrilling gameplay within the metaverse.
            </p>
          </div>
          <div
            className="founder-container"
            style={{
              justifyContent: window.innerWidth >= 1300 ? "center" : "normal",
              overflowX: window.innerWidth >= 1300 ? "auto" : "scroll",
            }}
          >
            {Data.map((f, i) => (
              <Card Data={f} key={i} />
            ))}
          </div>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={pagination}
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            className="founder-wrapper"
          >
            {Data.map((f, i) => (
              <SwiperSlide key={i}>
                <Card Data={f} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

interface ICard {
  Data: {
    image: any;
    title: string;
    name: string;
  };
}

const Card: React.FC<ICard> = ({ Data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className={`image-container ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleHover}
      onTouchEnd={handleMouseLeave}
      id="about-us"
    >
      <div className="founders">
        <div>
          <div
            style={{
              width: "300px",
              height: "300px",
              transition: "all 0.1s ease-out",
            }}
          >
            <img
              src={FirstCircle}
              alt=""
              className="transition-image"
              style={{
                opacity: isHovered ? 0 : 1,
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transition: "all 0.1s ease-out",
              }}
            />
          </div>
          <div>
            <img
              src={SecondCircle}
              alt=""
              className="transition-image"
              style={{
                opacity: isHovered ? 1 : 0,
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div className="founder-image">
          <img src={Data.image} alt="" />
        </div>
      </div>
      <div className="content">
        <h3>{Data.name}</h3>
        <p>{Data.title}</p>
      </div>
    </div>
  );
};
