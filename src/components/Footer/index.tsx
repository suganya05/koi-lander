import React, { useState } from "react";
import { ReactComponent as FooterBgImg } from "../../assets/images/footer-bg-img.svg";
import { ReactComponent as FooterLogo } from "../../assets/logo/footer-logo.svg";
import { ReactComponent as InstaIcon } from "../../assets/icons/insta.svg";
import { ReactComponent as FaceBookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import ResponsiveFooterLogo from "../../assets/images/responsive.png";
import InstaImg from "../../assets/icons/insta.png";
import FaceBookImg from "../../assets/icons/facebook.png";
import TwitterImg from "../../assets/icons/twitter.png";
import FooterLight from "../../assets/images/footer-light.png";
import FooterImg from "../../assets/images/footer-bg.png";
import "./Footer.scss";

const Footer: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div className="footer-wrapper">
        <div className="mx">
          <div className="footer-container">
            <div className="footer-border-bg-img">
              <div className="footer-background-image">
                <FooterBgImg />
              </div>

              <div className="footer-content">
                <div className="footer-logo">
                  <FooterLogo />
                </div>
                <p>
                  <span>The Metaverse’s first ever</span> casino.
                </p>
                <div className="copyright">
                  <h4>All copyright reserved</h4>
                </div>
                <div className="social-media-icons">
                  <InstaIcon />
                  <FaceBookIcon />
                  <TwitterIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`responsive ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleHover}
        onTouchEnd={handleMouseLeave}
      >
        <div className="responsive-img">
          <div className="footer-light-img">
            <img src={isHovered ? FooterLight : FooterImg} alt="" />
          </div>
          <div className="responsive-container">
            <div className="footer-logo-responsive">
              <img src={ResponsiveFooterLogo} alt="" />
            </div>

            <p>
              <span>The Metaverse’s first ever</span> casino.
            </p>
            <div className="social-media-icons">
              <img src={InstaImg} alt="" />
              <img src={FaceBookImg} alt="" />
              <img src={TwitterImg} alt="" />
            </div>
            <div className="copyright-responsive">
              <h4>All copyright reserved</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
