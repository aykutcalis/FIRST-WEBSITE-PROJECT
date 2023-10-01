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
            Tel: (+ 532) 738 14 81
            <br />
            <br />
            E-mail: geral@hifoodtech.pt
            <br />
            <br />
            Adres: Davutpaşa cad. maltepe Mah. no:22/66 Z.Burnu/İST.
          </h4>
        </div>
      </div>
    </div>
  );
};
