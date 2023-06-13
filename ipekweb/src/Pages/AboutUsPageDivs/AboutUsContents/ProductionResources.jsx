import React from "react";
import ProductionResourcess from "../../../assets/ProductionResourcess.jpeg";
import "../../../styles/AboutUs.css";
import { useMediaQuery } from "@mui/material";

export const ProductionResources = () => {
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
            backgroundImage: `url(${ProductionResourcess})`,
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
        <h2>HI FOOD – Üretim Kaynakları</h2>
        <p
          className="ProductionResourcess_p"
          style={{
            fontSize: "13px",
            fontWeight: "500",
          }}
        >
          Ekonomide, üretim kaynakları mal ve hizmet üretiminde kilit
          unsurlardır.
          <br /> PIPEMASTERS kurulduğundan bu yana tek bir yön izliyor:
          genişleme.
          <br /> Ürünlerimizin performans kalitesi ancak sahip olduğumuz geniş
          ekipman çeşitliliği ile mümkündür. Günümüzde PIPEMASTERS, ileri
          teknolojiye sahip bir şirkettir ve yüksek kalite gereksinimleri olan
          projelerin doğru bir şekilde uygulanmasına izin veren gelişmiş
          araçlara sahip olmaktan gurur duymaktadır.
          <br />
          <br />
          <br /> Tesisler ve ekipman:
          <br /> - 2 üretim ve yönetim tesisi (40x15 m)
          <br /> - Malzeme alımı ve ofisler.- Köprülü Vinç (5 ton) <br />- TIG
          Orbital Kaynak Makinası <br />- CNC 3 Eksen Boru Kıvırma Makinası{" "}
          <br />- 4 Adet Orbital Kesme ve Eğim Açma Makinası (çelik, karbon ve
          paslanmaz çelikte 0,20 mm - 12” arası)- Elektrikli Boru Kıvırma
          Makinası (u ila 3”) <br />- Boru Diş Açma Makinesi (4” e kadar)
          <br /> - Kaynaklı pasif temizleme makineleri - Kaynak Dumanı
          Aspiratörleri
          <br /> - Oksijenli kesme makinesi (12 mm'ye kadar) <br />- Kesme
          plazma makinesi (40 mm'ye kadar) <br />- Sertifikalı iskele
          <br /> - Kolon delme makinesi - Her türlü profili kesmek için 2 Şerit
          testere (600 mm'ye kadar)
          <br /> - 4 GMAW kaynak makinesi <br />- 45 TIG kaynak makinesi (yüksek
          frekans/elektrot) <br />- Paslanmaz çelik bitirme ve parlatma
          <br /> - Otomotiv endüstrisi için boruları bükmek ve bitirmek için CNC
          Boru Bükme Makinesi <br />- İzometrik ve benzeri çalışma ve planlama
          için CAD yazılımı
          <br /> - Karışık nakliye aracı
          <br /> - Eşya taşıma aracı
          <br /> - Uygun şekilde donatılmış 9 adet Hazırlık ve Bakım Tezgahı{" "}
          <br />- Yıkama makinesi
        </p>
      </div>
    </div>
  );
};
