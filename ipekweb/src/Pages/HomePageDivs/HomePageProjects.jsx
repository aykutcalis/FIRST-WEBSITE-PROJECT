import React from "react";
import ProjeImage1 from "../../assets/HomePageImages/pipe4.jpeg";
import ProjeImage2 from "../../assets/HomePageImages/pipe16.jpeg";
import ProjeImage3 from "../../assets/HomePageImages/pipe8.jpeg";
import ProjeImage4 from "../../assets/HomePageImages/pipe9.jpeg";
import ProjeImage5 from "../../assets/HomePageImages/pipe10.jpeg";
import ProjeImage6 from "../../assets/HomePageImages/pipe12.jpeg";
import ProjeImage7 from "../../assets/HomePageImages/pipe13.jpeg";
import ProjeImage8 from "../../assets/HomePageImages/pipe14.jpeg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

export const HomePageProjects = () => {
  const isXs = useMediaQuery("(max-width: 599.95px)");

  const [scrollIndex, setScrollIndex] = useState(0);

  const scrollLeft = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  const scrollRight = () => {
    if (isXs && scrollIndex < 7) {
      setScrollIndex(scrollIndex + 1);
    } else if (!isXs && scrollIndex < 1) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  return (
    <div className="thirdDivMain">
      <div className={isXs ? "DivMainXs" : "DivMain"}>
        <h1 className="divTitle">PROJELER</h1>
        <div className="SecondDivMainText">
          <p>
            Mühendislik Projeleri | Endüstriyel Bakım Projeleri (Prefabrikasyon
            ve Endüstriyel Montaj) | Geri Dönüşüm Çevre Projeleri.
          </p>
        </div>
      </div>
      <div className={isXs ? "navigationButtonDivXs" : "navigationButtonDiv"}>
        <div>
          <button
            className="navigationButton"
            onClick={scrollRight}
            disabled={scrollIndex === (isXs ? 7 : 1)}
          >
            <AiOutlineRight />
          </button>
          <button
            className="navigationButton"
            onClick={scrollLeft}
            disabled={scrollIndex === 0}
          >
            <AiOutlineLeft />
          </button>
        </div>
      </div>

      <div className="scrollableContainer">
        <div
          className="scrollableContent"
          style={{ transform: `translateX(-${scrollIndex * 100}%)` }}
        >
          <div
            className={isXs ? "thirdMainPageXs" : "thirdMainPage"}
            style={{ backgroundImage: `url(${ProjeImage1})` }}
          >
            <h3 className="homeTextContent">MÜHENDİSLİK PROJELERİ</h3>
            <Link
              to="/projects/Frades"
              style={{ color: "white", textDecoration: "none" }}
            >
              <h2> Ipek Barajı</h2>
            </Link>
            <p className="thirdMainPage_p">
              Hidroelektrik üretimi için bir baraj inşaatı her zaman büyük
              karmaşıklık ve talep gerektiren bir iş olmuştur ve Pipemasters,
              Frades II Barajı'nın yapımında önemli bir rol oynamıştır.
              Pipemasters, boru tesisatı ve tüm doğal yapıların prefabrikasyonu
              ve saha montajına ek olarak, büyük parçaların (örneğin su geçirmez
              kapılar) montajını desteklemek için büyük yapıların inşasına da
              katıldı.
            </p>
          </div>
          <div
            className={isXs ? "thirdMainPageXs" : "thirdMainPage"}
            style={{ backgroundImage: `url(${ProjeImage2})` }}
          >
            <h3 className="homeTextContent">SANAYİ BAKIM</h3>
            <Link
              to="/projects/Otomation"
              style={{ color: "white", textDecoration: "none" }}
            >
              <h2>Fırın Otomasyonu</h2>
            </Link>
            <p className="thirdMainPage_p">Fırın Otomasyonu - Manifold...</p>
          </div>
          <div
            className={isXs ? "thirdMainPageXs" : "thirdMainPage"}
            style={{ backgroundImage: `url(${ProjeImage3})` }}
          >
            <h3 className="homeTextContent">GERİ DÖNÜŞÜM</h3>
            <Link
              to="/projects/Food"
              style={{ color: "white", textDecoration: "none" }}
            >
              <h2>Gıda Atıkları </h2>
            </Link>
            <p className="thirdMainPage_p">
              PGıda israfı, üretimden dağıtıma ve tüketimdeki israfa kadar ciddi
              bir gerçektir. Bu tema, FREETILIZER sürecinin sadece çevresel
              etkiyi en aza indirerek, sürdürülebilirliği teşvik etmekle
              kalmayıp aynı zamanda süreci karlı hale getirerek nasıl bir varlık
              olabileceğini keşfetmemize yol açtı. Bu proje, enzimlerin uygulama
              kapsamını ve bu tür yan ürünlerdeki etkilerini anlamayı mümkün
              kıldı.
            </p>
          </div>
          <div
            className={isXs ? "thirdMainPageXs" : "thirdMainPage"}
            style={{ backgroundImage: `url(${ProjeImage4})` }}
          >
            <h3 className="homeTextContent">MÜHENDİSLİK PROJELERİ</h3>
            <Link
              to="/projects/perfumes"
              style={{ color: "white", textDecoration: "none" }}
            >
              <h2> Parfüm Fabrikası</h2>
            </Link>
            <p className="thirdMainPage_p">
              Pipemasters yakın zamanda NYC - ABD'de kozmetik (koku) alanında
              bir üretim tesisinin inşasına katıldı. Ön üretimden şantiye
              montajına kadar, 26 ila 48 mm çapında 26.000 metreden fazla boru
              kullanıldı. Borulamanın yanı sıra boruları tamamlayan tüm
              yapıların yapımında ve iki adet yarı otomatik robotun yapımında da
              görev aldık.
            </p>
          </div>
          <div
            className={isXs ? "thirdMainPageXs" : "thirdMainPage"}
            style={{ backgroundImage: `url(${ProjeImage5})` }}
          >
            <h3 className="homeTextContent">GERİ DÖNÜŞÜM</h3>
            <Link
              to="/projects/extraction"
              style={{ color: "white", textDecoration: "none" }}
            >
              <h2> Uçucu Yağların Ekstraksiyonu</h2>
            </Link>
            <p className="thirdMainPage_p">
              Freetilizer teknolojisi, narenciye kabuklarından esansiyel
              yağların çıkarılmasına izin veren, patent bekleyen bir
              teknolojidir. Bu anlamda, kendini portakal suyu üretimine adamış
              büyük bir İspanyol grup tarafından talep edildiğinde, bu
              sektördeki mevcut bir soruna çözüm bulmak için birkaç test
              gerçekleştirdik: yan ürünlerin (portakal kabuğu) fazlalığı. sadece
              laboratuvar ölçeğinde değil, aynı zamanda endüstriyel ölçekte.
              Elde edilen sonuçlar teknolojinin gelişiminin sağladığı başarıyı
              göstermektedir
            </p>
          </div>
          <div
            className={isXs ? "thirdMainPageXs" : "thirdMainPage"}
            style={{ backgroundImage: `url(${ProjeImage6})` }}
          >
            <h3 className="homeTextContent">SANAYİ BAKIM</h3>
            <Link
              to="/projects/ındustryFrades"
              style={{ color: "white", textDecoration: "none" }}
            >
              <h2> Hı Food Barajı</h2>
            </Link>
            <p className="thirdMainPage_p">
              Ingula, 25 yılı aşkın bir süredir Güney Afrika'daki ilk
              hidroelektrik santralidir. Tesis, doğudaki Ladysmith şehri
              yakınlarında yapım aşamasındadır. HI FOOD'Un bu projedeki görevi,
              boruların ve tüm doğal yapıların prefabrikasyonu ve yerinde
              montajı ve ayrıca büyük metal yapıların inşasına katılımdır.i.
            </p>
          </div>
          <div
            className={isXs ? "thirdMainPageXs" : "thirdMainPage"}
            style={{ backgroundImage: `url(${ProjeImage7})` }}
          >
            <h3 className="homeTextContent">GERİ DÖNÜŞÜM</h3>
            <Link
              to="/projects/extraction"
              style={{ color: "white", textDecoration: "none" }}
            >
              <h2> Uçucu Yağların Ekstraksiyonu</h2>
            </Link>
            <p className="thirdMainPage_p">
              Freetilizer teknolojisi, narenciye kabuklarından esansiyel
              yağların çıkarılmasına izin veren, patent bekleyen bir
              teknolojidir. Bu anlamda, kendini portakal suyu üretimine adamış
              büyük bir İspanyol grup tarafından talep edildiğinde, bu
              sektördeki mevcut bir soruna çözüm bulmak için birkaç test
              gerçekleştirdik: yan ürünlerin (portakal kabuğu) fazlalığı. sadece
              laboratuvar ölçeğinde değil, aynı zamanda endüstriyel ölçekte.
              Elde edilen sonuçlar teknolojinin gelişiminin sağladığı başarıyı
              göstermektedir
            </p>
          </div>
          <div
            className={isXs ? "thirdMainPageXs" : "thirdMainPage"}
            style={{ backgroundImage: `url(${ProjeImage8})` }}
          >
            <h3 className="homeTextContent">MÜHENDİSLİK PROJELERİ</h3>
            <h3>Plastiğin Evrimi</h3>
            <p className="thirdMainPage_p">
              Dijital simülasyon ve sanal gerçeklik, teknoloji ve mühendislik
              çalışmalarında prototip oluşturmayı kolaylaştırır ve tasarımda
              zaman ve maliyet tasarrufu sağlar. Veri güvenliği ve gizlilik,
              teknoloji ve mühendislik çalışmalarının temel bir odak noktasıdır
              ve işletmelerin itibarını korur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
