import React, { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import projectPageTop from "../../../assets/ProjectPageImage/projecttop.jpeg";
import ProjectImage2 from "../../../assets/HomePageImages/pipe9.jpeg";
import ProjectImage3 from "../../../assets/HomePageImages/pipe12.jpeg";
import ProjectImage13 from "../../../assets/HomePageImages/pipe13.jpeg";
import { Link } from "react-router-dom";
import "../../../styles/Home.css";
import "../../../styles/Services.css";
import "../../../styles/Project.css";
import { useMediaQuery } from "@mui/material";

export const Food = () => {
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
          <h3>Gıda Atıkları - Değerlendirilmesi İçin Çözüm</h3>
          <p
            className="engineeringProjectMainDiv_p"
            style={{
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            Gıda israfı, üretimden dağıtıma ve tüketimdeki israfa kadar ciddi
            bir gerçektir. Bu tema, FREETILIZER sürecinin sadece çevresel etkiyi
            en aza indirerek, sürdürülebilirliği teşvik etmekle kalmayıp aynı
            zamanda süreci karlı hale getirerek nasıl bir varlık olabileceğini
            keşfetmemize yol açtı.
            <br /> Bu proje, enzimlerin uygulama kapsamını ve bu tür yan
            ürünlerdeki etkilerini anlamayı mümkün kıldı.
            <br /> Sonuç olarak proses, termokimyasal değişken kontrollü bir
            reaktörde gerçekleştirilir, bu da enzimatik kompleksin hareketini
            artırmayı mümkün kılar, arıtma ve geri kazanım sürecinin 24 saatlik
            döngülerde gerçekleşmesini sağlar, böylece zamandan tasarruf garanti
            edilir. ve alan, yan ürünlerin yönetimi ile maliyetlerin ortadan
            kaldırılması ve aynı zamanda enerji verimli bir süreçte organik
            gübreler ve hayvan yemi için bazların üretimi yoluyla değer üretimi.
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
