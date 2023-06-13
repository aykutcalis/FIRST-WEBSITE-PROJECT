import React from "react";
import ProjectImage1 from "../../../assets/engineering.jpg";
import "../../../styles/AboutUs.css";
import { useMediaQuery } from "@mui/material";

export const MainAboutUs = () => {
  const isXs = useMediaQuery("(max-width: 599.95px)");
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          height: isXs ? "200px" : "300px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${ProjectImage1})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            margin: isXs ? "20px 30px 0 30px" : "20px 100px 0 100px",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </div>
      <div
        style={{
          margin: isXs ? "0 30px 40px 30px" : "0 100px 40px 100px",
          height: "calc(100% - 120px)",
          color: "#2CD4E0",
        }}
      >
        <h2>HI FOOD – Endüstriyel Boru Tesisatlarında uzmanız</h2>
        <p
          className="engineeringProjectMainDiv_p"
          style={{
            fontSize: "13px",
            fontWeight: "500",
          }}
        >
          2003 yılında kurulan HI FOOD, modern uygulama süreçleri ve yenilikçi
          teknolojiler aracılığıyla metal yapıların, boruların ve endüstriyel
          ekipmanların imalatına ve montajına adanmış genç bir şirkettir.
          <br />
          <br />
          <br /> Genç olmamıza rağmen işimizi her zaman kalite ve profesyonellik
          ile yapıyor ve müşterilerimizin her zaman yanındayız. Bu sebeplerden
          dolayı HI FOOD'ı seçmek, kaliteli hizmet ve iyi yapılmış bir iş
          garantisi anlamına gelir. <br />
          <br />
          <br />
          Ekibimiz, Portekiz'de ve yurtdışında gerçekleştirilen projeler
          sayesinde, alanında geniş bir deneyime sahip, uygun şekilde
          sertifikalandırılmış ve garantilidir. Bugünlerde, HI FOOD, sürekli
          olarak çalışmalarımızı yansıtan önemli müşterilerin çeşitli tavsiye
          mektupları ve destekleyici beyanlarında belirtildiği gibi, Portekiz ve
          küresel endüstri pazarında bir kıyaslama şirketidir.
          <br /> <br />
          <br />
          Ana hedefi, hizmetlerinin geliştirilmesinde sürekli iyileştirmedir.
          İşbirlikçilerimiz sürekli olarak eğitilir ve pazar gereksinimlerini
          karşılamak için en son teknolojiye sahip teknik kaynaklar elde edilir.
          Bunlar şirket için temel değerlerdir.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "50px",
        }}
      >
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#eeeeee",
          }}
        >
          <iframe
            width={isXs ? "100%" : "80%"}
            height={isXs ? "250px" : "450px"}
            src="https://www.youtube.com/embed/J0zwlaxq9qI"
            title="YouTube Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
