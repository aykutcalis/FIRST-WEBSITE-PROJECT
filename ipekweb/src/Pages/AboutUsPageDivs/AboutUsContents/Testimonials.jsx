import React from "react";
import { useMediaQuery } from "@mui/material";
import Logo_5 from "../../../assets/HomePageImages/logo5.jpg";
import Logo_6 from "../../../assets/HomePageImages/logo6.jpg";
import Logo_7 from "../../../assets/HomePageImages/logo7.jpg";
import Logo_8 from "../../../assets/HomePageImages/logo8.jpg";
import "../../../styles/AboutUs.css";

export const Testimonials = () => {
  const isXs = useMediaQuery("(max-width: 599.95px)");
  return (
    <div>
      <div
        className={
          isXs ? "AboutUsTestimonialsMainDivXs" : "AboutUsTestimonialsMainDiv"
        }
      >
        <div className={isXs ? "fifthMainPageXs" : "fifthMainPage"}>
          <div>
            <div className="commentLogoMainDiv">
              <img className="commentLogo" src={Logo_5} alt="" />
            </div>
          </div>

          <p className="AboutUsTestimonialsDivs_p">
            "Firmanın teknik uzmanları, iş süreçlerimizde önemli bir rol
            oynuyor. İhtiyaçlarımızı anlamaları ve esneklikle hareket etmeleri,
            başarıya ulaşmamızda kritik bir etkendir. Onların mükemmel müşteri
            hizmetleri ve satış sonrası desteği, işbirliğimizin
            sürdürülebilirliğini sağlamaktadır."
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
          <p className="AboutUsTestimonialsDivs_p">
            "Tedarikçimiz, kaliteli ürünleri ve hizmetleriyle projelerimize
            değer katıyor. Güvenilirlikleri ve etkin iletişimleri sayesinde,
            işbirliğimizin başarılı bir şekilde devam etmesini sağlıyoruz. Hi
            Food ile kurduğumuz güçlü iş ilişkisi, işimize önemli avantajlar
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
          <p className="AboutUsTestimonialsDivs_p">
            "Firmanın uzmanlığı ve esnek yaklaşımı, projelerimizin başarısı için
            önemli bir faktördür. Onlar, özel ihtiyaçlarımıza uygun çözümler
            sunarak projelerimizin başarılı bir şekilde tamamlanmasına yardımcı
            oluyor. İşbirliğimizdeki profesyonellik ve verimlilik, bizi her
            zaman memnun ediyor."
          </p>
          <a>
            {" "}
            <h4>
              Şehriban Oruç <br /> 'Halkla İlişkiler Genel Müdürü'{" "}
            </h4>
          </a>
        </div>
      </div>
      <div className="AboutUsTestimonialsMainDiv">
        <div className={isXs ? "fifthMainPageXs" : "fifthMainPage"}>
          <div>
            <div className="commentLogoMainDiv">
              <img className="commentLogo" src={Logo_8} alt="" />
            </div>
          </div>
          <p className="AboutUsTestimonialsDivs_p">
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
      </div>
    </div>
  );
};
