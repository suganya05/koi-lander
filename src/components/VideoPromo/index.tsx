import React from "react";
import PromoBorderImg from "../../assets/images/video-promo-border.png";
import PromoVideo from "../../assets/video/video.mp4";
import "./VideoPromo.scss";

const VideoPromo: React.FC = () => {
  return (
    <div className="video-promo-wrapper">
      <div className="mx">
        <div className="head">
          <h2>Video promo</h2>
        </div>
        <div className="video-promo-container">
          <img src={PromoBorderImg} alt="" />
          <div className="promo-video">
            <video src={PromoVideo} loop controls autoPlay={false}></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPromo;
