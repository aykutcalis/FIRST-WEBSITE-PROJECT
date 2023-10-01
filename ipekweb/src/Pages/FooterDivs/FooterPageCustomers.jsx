import React from "react";
import Logo_1 from "../../assets/HomePageImages/logo1.jpg";
import Logo_2 from "../../assets/HomePageImages/logo2.jpg";
import Logo_3 from "../../assets/HomePageImages/logo3.png";
import Logo_4 from "../../assets/HomePageImages/logo4.jpg";
import Logo_5 from "../../assets/HomePageImages/logo5.jpg";
import Logo_6 from "../../assets/HomePageImages/logo6.jpg";
import Logo_7 from "../../assets/HomePageImages/logo7.jpg";
import Logo_8 from "../../assets/HomePageImages/logo8.jpg";
import Logo_9 from "../../assets/HomePageImages/logo9.jpg";
import { useMediaQuery } from "@mui/material";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const FooterPageCustomers = () => {
  const [logos, setLogos] = useState([
    { id: "logo_9", src: Logo_9 },
    { id: "logo_2", src: Logo_2 },
    { id: "logo_3", src: Logo_3 },
    { id: "logo_4", src: Logo_4 },
    { id: "logo_5", src: Logo_5 },
    { id: "logo_6", src: Logo_6 },
    { id: "logo_7", src: Logo_7 },
    { id: "logo_8", src: Logo_8 },
    { id: "logo_1", src: Logo_1 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogos((prevLogos) => {
        const firstLogo = prevLogos.shift();
        return [...prevLogos, firstLogo];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const moveLogosRight = () => {
    const firstLogo = logos.shift();
    setLogos([...logos, firstLogo]);
  };

  const moveLogosLeft = () => {
    const firstLogo = logos.shift();
    setLogos([...logos, firstLogo]);
  };

  const isXs = useMediaQuery("(max-width: 599.95px)");

  return (
    <div style={{ borderTop: "2px solid #7f8c97" }}>
      {isXs ? (
        <div>
          <div className="OurCustomersLeftDivXs">
            <div className="OurCustomersFirstDiv">
              <div
                className={
                  isXs
                    ? "OurCustomersFirstDivContentXs"
                    : "OurCustomersFirstDivContent"
                }
              >
                <h2>MÜŞTERİLERİMİZ</h2>
              </div>
            </div>
            <div
              className={isXs ? "navigationButtonDivXs" : "navigationButtonDiv"}
            >
              <div>
                <button className="navigationButton_footer">
                  <AiOutlineRight onClick={moveLogosRight} />
                </button>
                <button className="navigationButton_footer">
                  <AiOutlineLeft onClick={moveLogosLeft} />
                </button>
              </div>
            </div>
          </div>
          <div className={isXs ? "OurCustomersXs" : "OurCustomers"}>
            <div className="scrollableContainer">
              <div className="scrollableContent">
                <TransitionGroup className="logoList">
                  {logos.map((logo, index) => (
                    <CSSTransition
                      key={logo.id}
                      timeout={500}
                      classNames="logoItem"
                    >
                      <div className="footerOurCustomerConteinerDiv">
                        <div className="footerOurCustomerMainDiv">
                          <img
                            className="footerOurCustomer"
                            src={logo.src}
                            alt=""
                          />
                        </div>
                      </div>
                    </CSSTransition>
                  ))}
                </TransitionGroup>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={isXs ? "OurCustomersXs" : "OurCustomers"}>
          <div className="OurCustomersLeftDiv">
            <div className="OurCustomersFirstDiv">
              <div
                className={
                  isXs
                    ? "OurCustomersFirstDivContentXs"
                    : "OurCustomersFirstDivContent"
                }
              >
                <h2>MÜŞTERİLERİMİZ</h2>
              </div>
            </div>
            <div
              className={isXs ? "navigationButtonDivXs" : "navigationButtonDiv"}
            >
              <div>
                <button className="navigationButton_footer">
                  <AiOutlineRight onClick={moveLogosRight} />
                </button>
                <button className="navigationButton_footer">
                  <AiOutlineLeft onClick={moveLogosLeft} />
                </button>
              </div>
            </div>
          </div>
          <div className="scrollableContainer" style={{ alignItems: "center" }}>
            <div className="scrollableContent">
              <TransitionGroup className="logoList">
                {logos.map((logo, index) => (
                  <CSSTransition
                    key={logo.id}
                    timeout={500}
                    classNames="logoItem"
                  >
                    <div className="footerOurCustomerConteinerDiv">
                      <div className="footerOurCustomerMainDiv">
                        <img
                          className="footerOurCustomer"
                          src={logo.src}
                          alt=""
                        />
                      </div>
                    </div>
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
