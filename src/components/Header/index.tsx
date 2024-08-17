import React, { useEffect, useState } from "react";
import { ReactComponent as HeaderLogo } from "../../assets/logo/header-logo.svg";
import { ReactComponent as Hamburger } from "../../assets/icons/hamburger-menu.svg";
import HeaderButton from "../../assets/images/Button.png";
import ContactUs from "../ContactUs";
import ResponsiveHeader from "../ResponsiveHeader";
import "./Header.scss";

const Header: React.FC = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";

      return () => {
        document.body.style.overflowY = "auto";
      };
    }
  }, [open]);

  return (
    <div className="header-container">
      <div className="mx">
        <div className="header-wrapper">
          <div className="logo">
            <div
              className="menu"
              onClick={() => setOpen(true)}
              style={{ cursor: "pointer" }}
            >
              <Hamburger />
            </div>
            <div className="koi-logo">
              <HeaderLogo />
            </div>
          </div>
          <div className="header-content">
            <div className="header-link">
              <div>
                <a href="#home">Home</a>
              </div>
              <div>
                <a href="#about">About us</a>
              </div>
              <div onClick={() => setActive(true)}>
                <p>Contact us</p>
              </div>
            </div>
            <div className="header-button">
              <img src={HeaderButton} alt="" />
            </div>
          </div>
        </div>
        {active && (
          <div className="union-top-img-container">
            <ContactUs setActive={setActive} />
          </div>
        )}
        {open && <div className="layout"></div>}

        <ResponsiveHeader setOpen={setOpen} open={open} />
      </div>
    </div>
  );
};

export default Header;
