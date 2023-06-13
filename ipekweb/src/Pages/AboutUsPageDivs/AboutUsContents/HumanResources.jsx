import React from "react";
import HumanResourcess from "../../../assets/HumanResourcess.jpeg";
import "../../../styles/AboutUs.css";
import { useMediaQuery } from "@mui/material";

export const HumanResources = () => {
  const isXs = useMediaQuery("(max-width: 599.95px)");
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          height: isXs ? "200px" : "500px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${HumanResourcess})`,
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
        <h2>HI FOOD – Uzmanlaşmış İnsan Kaynakları</h2>
        <p
          className="engineeringProjectMainDiv_p"
          style={{
            fontSize: "13px",
            fontWeight: "500",
          }}
        >
          İnsan kaynakları, insan varlığımızdır. Bir hizmet sağlayıcı olarak
          onlar aynı zamanda bizim stratejik kaynağımızdır. İnsan kaynağı, sahip
          olduğu yaratıcılık, temsil ettiği yenilik ve potansiyel nedeniyle
          şirketin bir varlığıdır ve eğitime yatırım yapılarak değerinin
          artırılması gerekmektedir.
          <br /> <br />
          Üretim/hizmet sağlayan ekibimiz, diğerlerinin yanı sıra endüstriyel
          bakım ve makine mühendisliği ile ilgili profesyonel kaynakçılar, boru
          tesisatçıları, çilingirler, mekanikçiler, tasarımcılar ve
          asistanlardan oluşmaktadır. Önceliğimiz, işbirlikçilerimiz için
          sürekli eğitimdir.
          <br />
          <br /> Son zamanlarda katıldıkları eğitimlerden bazıları şunlardır: İş
          sağlığı ve güvenliği; Güvenlik pasaportu; Punta kaynağı: kaynak
          teknolojisi; EAM kaynağı -111 - IIW Seviye 1 (1); EAM kaynağı -111 -
          IIW Seviye 1 (2); Teknik resim: kaynaklı çelik yapılar ve gruplar (1);
          stres yönetimi ve çatışma yönetimi; İletişim ve ekip çalışması;
          Metroloji vb. Kaynakçılarımızın çoğu, Bureau Veritas Certification
          (RINAVE) veya Portekiz Kaynak ve Kalite Enstitüsü (Instituto de
          Soldadura e Qualidade - ISQ) gibi ilgili kurumlar tarafından
          profesyonel kaynakçı olarak sertifikalandırılmıştır.
          <br /> <br />
          Farklı kaynak işlemlerinde uzmanlaştık, örneğin:- Korumalı metal ark
          kaynağı (SMAW kaynağı) – Karbon çeliği ve paslanmaz çelikte Proses 111
          (manuel metal ark kaynağı).- Gaz metal ark kaynağı / özlü ark kaynağı
          (GMAW/ FCAW kaynağı) – Karbon çeliği ve paslanmaz çelikte Proses 135,
          136 ve 138.- Tungsten/Asal gaz kaynağı (TIG) – Karbon çeliği ve
          paslanmaz çelikte Proses 141.- Tungsten/Asal gaz kaynağı (TIG) –
          Proses 141 alüminyum alaşımlarında. <br />
          <br />
          Operasyonel düzeyde, özel olarak eğitilmiş işbirlikçilere sahip
          olmanın avantajları, HI FOOD'ın üretkenliği ve karlılığı artırmasına,
          iş verimliliğini artırarak maliyetleri düşürmesine ve müşterilerimize
          sağlanan iş ile kaliteyi ve memnuniyeti artırmalarına olanak tanıyan
          bir sermaye kazancı olarak bizi tanıtmasına olanak tanır. .
        </p>
      </div>
    </div>
  );
};
