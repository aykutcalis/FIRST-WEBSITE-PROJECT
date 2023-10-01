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
              "Çözüm ortağımızla uzun yıllardır başarılı bir iş ilişkisi
              sürdürüyoruz. Onların sektördeki liderliği ve sağladıkları değerli
              uzmanlık, projelerimizin başarısında kritik bir rol oynuyor. Güven
              veren kaliteli ürünleri, bizi her zaman memnun ediyor ve güçlü bir
              işbirliği kurmamızı sağlıyor."
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
              "Hi Food, bizim için değerli bir iş ortağı haline geldi. Uzun
              süredir birlikte çalışıyoruz ve onların sağladığı çözümlerle
              ihtiyaçlarımızı eksiksiz karşılamaktan mutluluk duyuyoruz. Her
              projede bize en uygun çözümleri sunmaları, işbirliğimizin temelini
              oluşturuyor." 
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
              "İş süreçlerimizin etkin bir şekilde yönetilmesine yardımcı
              olan değerli bir ortak. Onlarla çalışmak, hızlı teslimatlar ve
              zamanında çözümlerle memnuniyetimizi artırıyor. Güvenilirlikleri
              ve müşteri odaklı yaklaşımları, başarılı işbirlikleri kurmamızı
              sağlıyor."
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
              "Müşterilerimize sunmak istediğimiz deneyimi güçlendirmek için
              Hi Food ile işbirliği yapıyoruz. Onların yenilikçi çözümleri,
              pazarlama stratejilerimizi destekleyen önemli bir unsurdur. İş
              ortağımızın sektördeki liderliği ve güncel trendleri takip etmesi,
              rekabet avantajı sağlamamıza yardımcı oluyor."
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
              "Firmanın teknik uzmanları, iş süreçlerimizde önemli bir rol
              oynuyor. İhtiyaçlarımızı anlamaları ve esneklikle hareket
              etmeleri, başarıya ulaşmamızda kritik bir etkendir. Onların
              mükemmel müşteri hizmetleri ve satış sonrası desteği,
              işbirliğimizin sürdürülebilirliğini sağlamaktadır."
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
              "Tedarikçimiz, kaliteli ürünleri ve hizmetleriyle projelerimize
              değer katıyor. Güvenilirlikleri ve etkin iletişimleri sayesinde,
              işbirliğimizin başarılı bir şekilde devam etmesini sağlıyoruz.
              Hi Food ile kurduğumuz güçlü iş ilişkisi, işimize önemli avantajlar
              sağlamaktadır."
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
              "Firmanın uzmanlığı ve esnek yaklaşımı, projelerimizin başarısı
              için önemli bir faktördür. Onlar, özel ihtiyaçlarımıza uygun
              çözümler sunarak projelerimizin başarılı bir şekilde
              tamamlanmasına yardımcı oluyor. İşbirliğimizdeki profesyonellik ve
              verimlilik, bizi her zaman memnun ediyor."
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
              "Uzun vadeli iş ortağımız, kaliteli boru ürünleriyle sektörde öncü
              bir konumda bulunuyor. Sürdürülebilirlik ve çevresel
              sorumluluklarına verdiği önem, işbirliğimizin değerini artırıyor.
              Onlarla çalışmak, müşterilerimize en iyi çözümleri sunmamızı
              sağlıyor."
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
              "Deneyimli ekibi sayesinde, karmaşık projelerdeki sorunlara anında
              çözümler sunabilme yeteneğine sahip. İşbirliğimizdeki etkili
              iletişim ve güvenilirlik, başarılı sonuçlar elde etmemizi
              sağlıyor. Uzun süredir süregelen iş ilişkimiz,
              karşılıklı güven ve başarıyı temsil ediyor."
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
