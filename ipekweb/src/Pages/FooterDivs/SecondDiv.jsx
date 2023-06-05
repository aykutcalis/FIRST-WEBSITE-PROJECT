import React from "react";
import WorldMap from "../../assets/FooterImages/world.jpg";
import co_1 from "../../assets/FooterImages/ortaklar.png";
import co_2 from "../../assets/FooterImages/ortaklar2.png";

export const SecondDiv = () => {
  return (
    <div className="FooterSecondDiv">
      {" "}
      <div
        className="FooterSecondDivMain"
        style={{ backgroundImage: `url(${WorldMap})` }}
      >
        <div className="coImageMainContainerDiv">
          <h1>BİZİ NEREDE BULABİLİRSİNİZ?</h1>
          <h4>
            Phone: (+ 351) 252 240 490
            <br />
            Email: geral@ipekmüh.pt
          </h4>
          <div className="coImageContainerDiv">
            <p className="CoFinans">Ortak finansman:</p>
            <div
              className="coImage"
              style={{ backgroundImage: `url(${co_1})` }}
            ></div>
            <div
              className="coImage"
              style={{ backgroundImage: `url(${co_2})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
