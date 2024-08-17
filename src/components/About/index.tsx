import React, { useRef, useState } from "react";
import { AboutData } from "../../data/aboutData";
import { ReactComponent as RectangleImg } from "../../assets/images/Rectangle.svg";
import Arrow from "../../assets/images/arrow.png";
import "./About.scss";

const About: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [arrowRotation, setArrowRotation] = useState("");

  const handleArrowClick = () => {
    setExpanded(!expanded);
    setArrowRotation(expanded ? "" : "rotated");
  };

  return (
    <div className="about-wrapper">
      <div className="mx">
        <div className="rectangle-img">
          <RectangleImg />
        </div>
        <div onClick={handleArrowClick}>
          <div className="border-radius">
            <div
              onClick={handleArrowClick}
              className={`arrow-img ${arrowRotation}`}
            >
              <img src={Arrow} alt="" />
            </div>
          </div>
        </div>
        <div
          className={`background-img ${expanded ? "expanded" : ""}`}
          ref={backgroundRef}
          style={{
            height: expanded
              ? `${backgroundRef.current?.scrollHeight}px`
              : "440px",
            transition: "all 0.5s ease-out",
            overflowY: "hidden",
          }}
        >
          <div>
            {AboutData.map((f, index) => {
              return (
                <div key={index} className="about-container">
                  <div className="image">
                    <img src={f.image} alt="" />
                  </div>
                  <div className="about-content">
                    <h1>{f.title}</h1>
                    <p>{f.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
