import React from "react";
import ServicesImage from "../../assets/ServicesImages/servis.jpg";
import ProjectImage1 from "../../assets/endustri.png";
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

export const IndustrialProject = () => {
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
        <h1>HİZMETLER | Endüstriyel Bakım Hizmetleri</h1>
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
        <h2>Endüstriyel Bakım Hizmetleri</h2>
        <p
          className="engineeringProjectMainDiv_p"
          style={{
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          Endüstriyel bakım, mevcut kaynakların optimizasyonu, kullanım ömrünün
          uzatılması ve müşteriden tahliye edilmesi yoluyla şirketlerin
          stratejik vizyonunda giderek daha önemli hale geliyor. <br></br>
          <br></br>
          <br></br>
          <br></br>Endüstriyel Bakım hizmetleri ara sıra müdahale ve sürekli
          müdahale olmak üzere iki farklı şekilde yürütülebilir.<br></br>
          <br></br>
          <br></br>
          <br></br> Ara sıra yapılan bakım, faaliyet sektöründen bağımsız
          olarak, esasen müşterinin özel ihtiyaçlarına karşılık gelen düzeltici
          faaliyetlerle yönetilir. Bu anlamda Pipemasters, organizasyonun her
          alanında bizi farklı kılan değerlerle faaliyetlerine yön vermektedir:
          anında müdahale, ekip çalışması, deneyim, sonuçlara odaklanma,
          müşteriye yakınlık ve çalışanlarımızın motivasyonu ve şevki, bunun
          koşullarını oluşturur.<br></br>
          <br></br>
          <br></br> Başarılı müdahale Sürekli bakım, genellikle dış kaynak
          kullanımıyla gerçekleştirilen daha önleyici bir yönetimde hem
          kaynakların hem de tesislerin doğru çalışmasını sağlar.
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
                <Link className="moreLinkButton" to="/projects/otomation">
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
                <Link className="moreLinkButton" to="/projects/ındustryFrades">
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
