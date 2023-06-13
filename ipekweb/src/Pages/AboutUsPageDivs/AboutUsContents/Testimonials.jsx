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
          <p className="AboutUsTestimonialsDivs_p">
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
          <p className="AboutUsTestimonialsDivs_p">
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
      </div>
      <div className="AboutUsTestimonialsMainDiv">
        <div className={isXs ? "fifthMainPageXs" : "fifthMainPage"}>
          <div>
            <div className="commentLogoMainDiv">
              <img className="commentLogo" src={Logo_8} alt="" />
            </div>
          </div>
          <p className="AboutUsTestimonialsDivs_p">
            " Dijital simülasyon ve sanal gerçeklik, teknoloji ve mühendislik
            çalışmalarında prototip oluşturmayı kolaylaştırır ve tasarımda zaman
            ve maliyet tasarrufu sağlar. Veri güvenliği ve gizlilik, teknoloji
            ve mühendislik çalışmalarının temel bir odak noktasıdır ve
            işletmelerin itibarını korur."
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
