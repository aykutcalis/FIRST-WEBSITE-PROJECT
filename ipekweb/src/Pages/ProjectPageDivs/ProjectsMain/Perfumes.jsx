import React, { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import projectPageTop from "../../../assets/ProjectPageImage/projecttop.jpeg";
import ProjectImage2 from "../../../assets/HomePageImages/pipe2.jpeg";
import ProjectImage3 from "../../../assets/HomePageImages/pipe3.jpeg";
import ProjectImage13 from "../../../assets/HomePageImages/pipe4.jpeg";
import { Link } from "react-router-dom";
import "../../../styles/Home.css";
import "../../../styles/Services.css";
import "../../../styles/Project.css";
import { useMediaQuery } from "@mui/material";

export const Perfumes = () => {
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
      <div style={{ marginTop: "30px" }}></div>
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
        }}
      >
        <div
          style={{
            color: "#2CD4E0",
            width: "60%",
            padding: isXs ? "0  40px 0 50px" : "0 40px 50px 50px",
          }}
        >
          <h3>Mühendislik Projeleri - Üretim Öncesi ve Endüstriyel Montaj</h3>
          <p
            className="engineeringProjectMainDiv_p"
            style={{
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            HI FOOD TECH yakın zamanda NYC - ABD'de kozmetik (koku) alanında bir
            üretim tesisinin inşasına katıldı. Ön üretimden şantiye montajına
            kadar, 26 ila 48 mm çapında 26.000 metreden fazla boru kullanıldı.
            Borulamanın yanı sıra boruları tamamlayan tüm yapıların yapımında ve
            iki adet yarı otomatik robotun yapımında da görev aldık.
            <br />
            <br /> Tesis, parfüm üretimi alanında bir referans olan TAKASAGO
            grubuna aittir. İş, Contexa SA tarafından gerçekleştirildi.
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
