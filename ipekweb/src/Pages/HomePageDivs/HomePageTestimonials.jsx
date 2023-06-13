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
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

export const HomePageTestimonials = () => {
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
    } else if (!isXs && scrollIndex < 2) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  return (
    <div className="fifthDivMain">
      <div className={isXs ? "DivMainXs" : "DivMain"}>
        <h1 className="divTitle">GÖRÜŞLER</h1>
        <div className="SecondDivMainText">
          <p>
            Kendi irademizle vermiş olduğumuz bu referanslar, müşterilerimizin
            memnuniyetini pekiştirmiştir. Hepinize teşekkür ederim.
          </p>
        </div>
      </div>
      <div className={isXs ? "navigationButtonDivXs" : "navigationButtonDiv"}>
        <div>
          <button
            className="navigationButton_5"
            onClick={scrollRight}
            disabled={scrollIndex === (isXs ? 7 : 2)}
            style={{ backgroundColor: "transparent" }}
          >
            <AiOutlineRight />
          </button>
          <button
            className="navigationButton_5"
            onClick={scrollLeft}
            disabled={scrollIndex === 0}
            style={{ backgroundColor: "transparent" }}
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
          <div className={isXs ? "fifthMainPageXs" : "fifthMainPage"}>
            <div>
              <div className="commentLogoMainDiv">
                <img className="commentLogo" src={Logo_9} alt="" />
              </div>
            </div>

            <p className="fifthPage_p">
              "Sanayi sektöründe teknolojinin ilerlemesi ve mühendislik
              becerilerinin gelişmesi, birçok sektörde büyük bir dönüşüm
              sağlamaktadır. Bu dönüşüm, üretim süreçlerinin optimize edilmesi,
              verimliliğin artırılması ve kalitenin iyileştirilmesi gibi
              hedefler doğrultusunda gerçekleşmektedir."
            </p>

            <a>
              {" "}
              <h4>
                Ahmet Yıldırım <br /> 'Üretim Müdürü-Plastik Ünitesi'{" "}
              </h4>
            </a>
          </div>
          <div className={isXs ? "fifthMainPageXs" : "fifthMainPage"}>
            <div>
              <div className="commentLogoMainDiv">
                <img className="commentLogo" src={Logo_2} alt="" />
              </div>
            </div>

            <p className="fifthPage_p">
              "Teknoloji ve mühendislik, işletmelerin daha verimli ve rekabetçi
              olmasını sağlamak için birlikte çalışmaktadır. Yeni nesil
              sensörler, otomasyon sistemleri ve yapay zeka uygulamaları, üretim
              süreçlerini daha akıllı hale getirerek insan hatasını minimize
              etmekte ve kaliteyi artırmaktadır."
            </p>
            <a>
              {" "}
              <h4>
                Muhammed Hamza KüçükKürtül <br /> 'Genel Muhasebe Uzamanı/Dış
                Tİcaret Sorumlusu'{" "}
              </h4>
            </a>
          </div>
          <div className={isXs ? "fifthMainPageXs" : "fifthMainPage"}>
            <div>
              <div className="commentLogoMainDiv">
                <img className="commentLogo" src={Logo_3} alt="" />
              </div>
            </div>

            <p className="fifthPage_p">
              " Veri analitiği ve büyük veri yönetimi, işletmelerin üretim
              süreçlerinde daha iyi kararlar almasını sağlamakta ve maliyetleri
              düşürmektedir. Endüstriyel robotlar ve otomatik üretim hatları,
              daha hızlı ve hassas üretim yapılmasını sağlamakta ve iş gücü
              verimliliğini artırmaktadır."
            </p>
            <a>
              {" "}
              <h4>
                Bekir Gelebek <br /> 'Yüksek Elektrik Mühendisi-Proje Müdürü'{" "}
              </h4>
            </a>
          </div>
          <div className={isXs ? "fifthMainPageXs" : "fifthMainPage"}>
            <div>
              <div className="commentLogoMainDiv">
                <img className="commentLogo" src={Logo_4} alt="" />
              </div>
            </div>
            <p className="fifthPage_p">
              "Sürdürülebilirlik, enerji verimliliği ve çevresel etkiyi azaltma,
              teknoloji ve mühendislik tarafından da desteklenen önemli
              hedeflerdir. Yeni malzemelerin kullanımı ve yenilikçi tasarımlar,
              ürün performansını iyileştirmekte ve endüstrinin müşteri
              beklentilerine cevap vermesini sağlamaktadır."
            </p>
            <a>
              {" "}
              <h4>
                Cumali Danabaş
                <br /> 'Direktör Mühendislik Bölümü / Teknik Müdür Hizmetler
                Bölümü'{" "}
              </h4>
            </a>
          </div>
          <div className={isXs ? "fifthMainPageXs" : "fifthMainPage"}>
            <div>
              <div className="commentLogoMainDiv">
                <img className="commentLogo" src={Logo_5} alt="" />
              </div>
            </div>

            <p className="fifthPage_p">
              " Sürekli iyileştirme ve yenilikçilik kültürü, teknoloji ve
              mühendislik disiplinleri aracılığıyla kurulmaktadır. Endüstriyel
              sektörlerdeki dönüşüm, teknoloji ve mühendislik becerilerinin
              sürekli olarak geliştirilmesini gerektirmektedir."
            </p>
            <a>
              {" "}
              <h4>
                Ramazan Altun <br /> 'AB Proje Geliştirme Uzmanı'{" "}
              </h4>
            </a>
          </div>
          <div className={isXs ? "fifthMainPageXs" : "fifthMainPage"}>
            <div>
              <div className="commentLogoMainDiv">
                <img className="commentLogo" src={Logo_6} alt="" />
              </div>
            </div>
            <p className="fifthPage_p">
              " Eğitim ve sürekli öğrenme, teknoloji ve mühendislik alanlarında
              yetenekli profesyonellerin yetişmesini sağlamaktadır. İnovasyon,
              teknoloji ve mühendislik çalışmalarının önemli bir sonucudur ve
              işletmelerin rekabet avantajını artırır."
            </p>
            <a>
              {" "}
              <h4>
                Samet Dal <br /> 'Üretim Direktörü- Genel Müdür'{" "}
              </h4>
            </a>
          </div>
          <div className={isXs ? "fifthMainPageXs" : "fifthMainPage"}>
            <div>
              <div className="commentLogoMainDiv">
                <img className="commentLogo" src={Logo_7} alt="" />
              </div>
            </div>
            <p className="fifthPage_p">
              " İşbirliği ve paylaşılan bilgi, teknoloji ve mühendislik
              alanlarında ilerlemenin anahtarıdır. Dijitalleşme, teknoloji ve
              mühendislik disiplinlerini daha fazla entegre etmekte ve
              işletmelerin verimliliğini artırmaktadır."
            </p>
            <a>
              {" "}
              <h4>
                Şehriban Oruç <br /> 'Halkla İlişkiler Genel Müdürü'{" "}
              </h4>
            </a>
          </div>
          <div className={isXs ? "fifthMainPageXs" : "fifthMainPage"}>
            <div>
              <div className="commentLogoMainDiv">
                <img className="commentLogo" src={Logo_8} alt="" />
              </div>
            </div>
            <p className="fifthPage_p">
              " Dijital simülasyon ve sanal gerçeklik, teknoloji ve mühendislik
              çalışmalarında prototip oluşturmayı kolaylaştırır ve tasarımda
              zaman ve maliyet tasarrufu sağlar. Veri güvenliği ve gizlilik,
              teknoloji ve mühendislik çalışmalarının temel bir odak noktasıdır
              ve işletmelerin itibarını korur."
            </p>
            <a>
              {" "}
              <h4>
                Ahmet Vakkas Kemik <br /> ' Fİrma Genel Koordinatörü'{" "}
              </h4>
            </a>
          </div>
          <div className={isXs ? "fifthMainPageXs" : "fifthMainPage"}>
            <div>
              <div className="commentLogoMainDiv">
                <img className="commentLogo" src={Logo_1} alt="" />
              </div>
            </div>
            <p className="fifthPage_p">
              " Dijital simülasyon ve sanal gerçeklik, teknoloji ve mühendislik
              çalışmalarında prototip oluşturmayı kolaylaştırır ve tasarımda
              zaman ve maliyet tasarrufu sağlar. Veri güvenliği ve gizlilik,
              teknoloji ve mühendislik çalışmalarının temel bir odak noktasıdır
              ve işletmelerin itibarını korur."
            </p>
            <a>
              {" "}
              <h4>
                llker Taşkesen
                <br /> 'Proje Yöneticisi, Gıda Alanı'{" "}
              </h4>
            </a>
          </div>
        </div>
      </div>
      <div className={isXs ? "" : "b"}></div>
    </div>
  );
};
