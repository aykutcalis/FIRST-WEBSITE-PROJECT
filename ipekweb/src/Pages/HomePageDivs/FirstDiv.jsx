import React from 'react'
import ProjeImage from '../../assets/HomePageImages/proje.png'
import IndustryImage from '../../assets/HomePageImages/pipe.png'
import GeriImage from '../../assets/HomePageImages/geri.jpg'



export const FirstDiv = () => {
  return (
    <div>
      <div className="mainHomeDiv">
        <div
          className="mainPage"
          style={{ backgroundImage: `url(${ProjeImage})` }}
        >
          <h3 className="homeTextContent">MÜHENDİSLİK PROJELERİ</h3>
          <button className="moreButton">DAHA FAZLASINI KEŞFET</button>
        </div>
        <div
          className="mainPage"
          style={{ backgroundImage: `url(${IndustryImage})` }}
        >
          <h3 className="homeTextContent">SANAYİ BAKIM</h3>
          <button className="moreButton">DAHA FAZLASINI KEŞFET</button>
        </div>
        <div
          className="mainPage"
          style={{ backgroundImage: `url(${GeriImage})` }}
        >
          <h3 className="homeTextContent">GERİ DÖNÜŞÜM</h3>
          <button className="moreButton">DAHA FAZLASINI KEŞFET</button>
        </div>
      </div>
    </div>
  );
}
