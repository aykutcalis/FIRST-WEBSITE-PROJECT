import React, { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import projectPageTop from "../../../assets/ProjectPageImage/ProjectTop.jpg";
import ProjectImage2 from "../../../assets/HomePageImages/pipe6.jpeg";
import ProjectImage3 from "../../../assets/HomePageImages/pipe7.jpeg";
import ProjectImage13 from "../../../assets/HomePageImages/pipe8.jpeg";
import { Link } from "react-router-dom";
import "../../../styles/Home.css";
import "../../../styles/Services.css";
import "../../../styles/Project.css";
import { useMediaQuery } from "@mui/material";

export const Extraction = () => {
  const isXs = useMediaQuery("(max-width: 799.95px)");
  const resimListesi = [ProjectImage2, ProjectImage3, ProjectImage13];

  const [aktifResim, setAktifResim] = useState(0);

  const birSonrakiResim = () => {
    setAktifResim((prevState) => (prevState + 1) % resimListesi.length);
  };

  const birOncekiResim = () => {
    setAktifResim(
      (prevState) => (prevState - 1 + resimListesi.length) % resimListesi.length
    );
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${projectPageTop})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          overflow: "hidden",
        }}
        className="ServicesTopMain"
      >
        <h1>PROJELER | Uçucu Yağların Ekstraksiyonu</h1>
        <div className="Breadcrumb">
          <Link to="/">
            <strong>Home Page</strong>
          </Link>
          <p>/</p>
          <Link href="">
            <strong>Projeler</strong>
          </Link>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div
          className="engineeringProjectMainDiv"
          style={{
            backgroundImage: `url(${resimListesi[aktifResim]})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            margin: "20px 100px 0 100px",
            height: "calc(100% - 120px)",
          }}
        >
          <div
            style={{
              width: "95%",
              height: "100%",
              display: "flex",
              justifyContent: "space-between ",
              alignItems: "center",
            }}
          >
            <NavigateBeforeIcon
              onClick={birOncekiResim}
              style={{
                width: "30px",
                height: "30px",
                color: "white",
                backgroundColor: "#2CD4E0",
                cursor: "pointer",
              }}
            />

            <NavigateNextIcon
              onClick={birSonrakiResim}
              style={{
                width: "30px",
                height: "30px",
                color: "white",
                backgroundColor: "#2CD4E0",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: isXs ? "column" : "row",
          borderBottom: "1px solid #7f8c97",
        }}
      >
        <div
          style={{
            color: "#2CD4E0",
            width: "60%",
            padding: isXs ? "0  40px 0 50px" : "0 40px 50px 50px",
          }}
        >
          <h3>Uçucu Yağların Ekstraksiyonu</h3>
          <p
            className="engineeringProjectMainDiv_p"
            style={{
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            Freetilizer teknolojisi, narenciye kabuklarından esansiyel yağların
            çıkarılmasına izin veren, patent bekleyen bir teknolojidir. Bu
            anlamda, kendini portakal suyu üretimine adamış büyük bir İspanyol
            grup tarafından talep edildiğinde, bu sektördeki mevcut bir soruna
            çözüm bulmak için birkaç test gerçekleştirdik: yan ürünlerin
            (portakal kabuğu) fazlalığı. sadece laboratuvar ölçeğinde değil,
            aynı zamanda endüstriyel ölçekte. Elde edilen sonuçlar teknolojinin
            gelişiminin sağladığı başarıyı göstermektedir. Tek bir işlemde ve
            tek bir matristen (portakal kabukları), mevcut işlemlerden çok daha
            yüksek, yaklaşık %4'lük bir verimle aromaları ve uçucu yağları
            çıkarmak mümkündür. Üretilen katı fraksiyon, hayvan yemi için un
            olarak kullanılabilir. Geliştirilen Endüstriyel Teknoloji, ortak
            şirketin yalnızca kârını artırmasına değil.
          </p>
        </div>
        <div style={{ marginLeft: "25px", marginBottom: isXs ? "25px" : "" }}>
          <div
            style={{
              width: "80%",
              borderLeft: "2px solid black",
              height: "60%",
              padding: "0 0 30px 20px",
            }}
          >
            <p
              style={{
                fontSize: "25px",
                fontWeight: "500",
                color: "#2CD4E0",
              }}
            >
              Detaylar
            </p>

            <p
              className="engineeringProjectMainDiv_p"
              style={{
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              Müşteri:
              <span style={{ fontSize: "13px", fontWeight: "500" }}>
                Some Firm
              </span>
            </p>

            <p
              className="engineeringProjectMainDiv_p"
              style={{
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              Kategori:
              <span style={{ fontSize: "13px", fontWeight: "500" }}>
                Mühendislik Projeleri
              </span>
            </p>
            <p
              className="engineeringProjectMainDiv_p"
              style={{
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              Konum:
              <span style={{ fontSize: "13px", fontWeight: "500" }}>
                İzmir/Türkiye
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
