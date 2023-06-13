import React from "react";
import WorldMap from "../../assets/FooterImages/world.jpg";

export const FooterMap = () => {
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
            Tel: (+ 351) 252 240 490
            <br />
            <br />
            E-mail: geral@hifood.pt
            <br />
            <br />
            Adres: Selvili ok. no:2/D.4 Alsancak/iZMİR
          </h4>
        </div>
      </div>
    </div>
  );
};
