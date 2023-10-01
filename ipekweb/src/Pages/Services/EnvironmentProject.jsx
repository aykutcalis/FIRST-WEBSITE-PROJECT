import React from "react";
import ServicesImage from "../../assets/ServicesImages/servis.jpg";
import ProjectImage1 from "../../assets/geridonusum.jpg";
import ProjectImage2 from "../../assets/HomePageImages/pipe8.jpeg";
import ProjectImage3 from "../../assets/HomePageImages/pipe10.jpeg";
import { Link } from "react-router-dom";
import { ServicesYoutube } from "./ServicesYoutube";
import "../../styles/Home.css";
import "../../styles/Services.css";
import { useMediaQuery } from "@mui/material";
import {
  Stack,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export const EnvironmentProject = () => {
  const isXs = useMediaQuery("(max-width: 599.95px)");
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${ServicesImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          overflow: "hidden",
        }}
        className="ServicesTopMain"
      >
        <h1>GERİ DÖNÜŞÜM | Çevre Projeleri - Geri Dönüşüm</h1>
        <div className="Breadcrumb">
          <Link to="/">
            <strong>Home Page</strong>
          </Link>
          <p>/</p>
          <Link href="">
            <strong>Servisler</strong>
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
            backgroundImage: `url(${ProjectImage1})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            margin: "20px 100px 0 100px",
            height: "calc(100% - 120px)",
          }}
        ></div>
      </div>
      <div
        style={{
          margin: "0 100px 40px 100px",
          height: "calc(100% - 120px)",
          color: "#2CD4E0",
        }}
      >
        <h2>Çevre Projeleri - Freetilizer</h2>
        <p
          style={{
            fontSize: "15px",
            fontWeight: "500",
            fontFamily: "sans-serif",
          }}
        >
          Uzun bir araştırma ve prosedürel ve mekanik çözümler üretme sürecinin
          ardından FREETILIZER doğdu.<br></br> <br></br>
          <br></br> Yan ürünleri ve organik atıkları dönüştüren ve
          değerlendiren, bunları düzeltici maddelere veya organik gübrelere ve
          hatta hayvan yemi için unlara dönüştüren hızlı ve çevre dostu bir
          teknoloji. Bu teknoloji aynı zamanda aromaların ve esansiyel yağların,
          mevcut yöntemlerden çok daha yüksek verim oranlarıyla karlılık
          düzeyleriyle çıkarılmasına izin verir ve bunların değerlendirilmesine
          izin veren tüm özellikleri garanti eder. FREETILIZER teknolojisi,
          organik yan ürünlerde bulunan besin maddelerinin, seçilmiş enzimlerden
          oluşan bir kompleks kullanılarak homojenizasyon, çalkalama, pH ve
          sıcaklık kontrollü bir reaktörde dönüştürülmesinden oluşur.<br></br>{" "}
          <br></br> <br></br> İşlem, bir vakumlu kurutma adımıyla sona erer -
          verimli kurutma, bu da stabilize bir ürünün oluşumuyla sonuçlanır.
          <br></br>
          <br></br> <br></br> HI FOOD TECH'ın amacı, kârlılığın yanı sıra,
          kuruluşların sosyal ve çevresel farkındalığını artırmak, döngüsel
          ekonomi perspektifinde ekonomik ve çevresel katma değer sağlayan
          çözümler sunmaktır.
        </p>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1 className="divTitle">PROJELER</h1>
      </div>
      <Stack
        className="projectPagesStack"
        style={{
          flexDirection: isXs ? "column" : "row",
          justifyContent: "center",
        }}
      >
        <Grid
          style={{
            background: "#dfdfdf",
            height: "100%",
            width: "100%",
            paddingLeft: isXs ? "25px" : "150px",
            paddingRight: isXs ? "25px" : "",
          }}
        >
          <Grid item style={{ height: "75%" }}>
            <Card className="cards">
              <CardMedia height="200px" component="img" image={ProjectImage2} />
              <CardContent
                className="engineeringProjectCardContent"
                style={{ background: "#dfdfdf" }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  style={{ color: "#2CD4E0", fontWeight: "700" }}
                >
                  Mühendislik Projeleri
                </Typography>
                <Typography variant="body2" component="p"></Typography>
              </CardContent>
              <CardActions
                className="CardActionsDiv"
                style={{ background: "#dfdfdf" }}
              >
                <Link className="moreLinkButton" to="/projects/extraction">
                  DAHA FAZLASINI KEŞFET
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Grid
          style={{
            background: "#efefef",
            height: "100%",
            width: "100%",
            paddingRight: isXs ? "25px" : "150px",
            paddingLeft: isXs ? "25px" : "",
          }}
        >
          <Grid item>
            <Card className="cards">
              <CardMedia height="200px" component="img" image={ProjectImage3} />
              <CardContent style={{ background: "#efefef" }}>
                <Typography
                  variant="h5"
                  component="div"
                  style={{ color: "#2CD4E0", fontWeight: "700" }}
                >
                  Mühendislik Projeleri
                </Typography>
                <Typography variant="body2" component="p"></Typography>
              </CardContent>
              <CardActions
                className="CardActionsDiv"
                style={{ background: "#efefef" }}
              >
                <Link className="moreLinkButton" to="/projects/food">
                  DAHA FAZLASINI KEŞFET
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Stack>
      <ServicesYoutube />
    </div>
  );
};
