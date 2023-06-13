import React from "react";
import ServicesImage from "../../assets/ServicesImages/servis.jpg";
import ProjectImage1 from "../../assets/engineering.jpg";
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

export const EngineeringProject = () => {
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
        <h1>
          HİZMETLER | Mühendislik Projeleri - Üretim Öncesi ve Endüstriyel
          Montaj
        </h1>
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
        <h2>Mühendislik Projeleri - Üretim Öncesi ve Endüstriyel Montaj</h2>
        <p
          className="engineeringProjectMainDiv_p"
          style={{
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          HI FOOD diğer faaliyet alanlarının yanı sıra ön imalat ve endüstriyel
          montaj alanlarında öne çıkıyor. Genel planları / yerleşimleri,
          izometrik planları, PID veya SKIDS prensibini ve çalışma şemalarını
          yorumlayarak, her türlü akışkan ve çeşitli faaliyet sektörleri için
          endüstriyel boruların prefabrikasyonunu ve montajını yapmaktayız. Boru
          rafları, köprüler veya destekler gibi metal yapıların ve diğer
          tamamlayıcı yapıların inşası ve montajı da Ipek Muhendislik'ın hem
          üretim araçları hem de ekibini oluşturan insan kaynakları açısından
          uygun olduğu ve öne çıktığı bir faaliyet sektörüdür. . HI FOOD, farklı
          müdahale alanlarını kapsamak için gıda pompaları veya parlatılmış
          bitirme gibi hem parlak hem de fırçalanmış parçaların dönüştürülmesi
          ve bitirilmesinde de farklılık gösterir. Çeşitli malzeme ve yüzeylerde
          bölmeli kapılar, ızgaralar/kapılar, merdivenler ve özel yapım yapılar,
          kaplamalar ve incelikli ve lüks kaplamalar gibi her türlü sanatsal
          sivil çilingir ürünlerini üretiyoruz. Üretim ve yönetim için uygun
          şekilde yapılandırılmış ve ileri teknolojiye sahip farklı makinelerle
          donatılmış iki tesise sahibiz; bunlardan 3 eksenli sayısal kontrollü
          bükme makinesi, oksigaz kesme ekipmanı, 40 mm'ye kadar plazma kesme,
          her türlü profili kesmek için şerit testere öne çıkıyor. 600 mm'ye
          kadar çok sayıda kaynak makinesinin yanı sıra: TIG Orbital kaynak
          makinesi, yüksek frekanslı TIG kaynak makineleri veya sinerjik MIG/MAG
          kaynak makineleri. Projelerin tüm planlaması ve hazırlığı, izometrik
          planlama için CAD araçlarıyla yapılır ve teknik çizim yazılımımız
          SOLIDWORKS'e sahibiz. çeşitli malzeme ve kaplamalarda
          ızgaralar/kapılar, merdivenler ve özel yapım yapılar, kaplamalar ve
          incelikli ve lüks kaplamalar. Üretim ve yönetim için uygun şekilde
          yapılandırılmış ve ileri teknolojiye sahip farklı makinelerle
          donatılmış iki tesise sahibiz; bunlardan 3 eksenli sayısal kontrollü
          bükme makinesi, oksigaz kesme ekipmanı, 40 mm'ye kadar plazma kesme,
          her türlü profili kesmek için şerit testere öne çıkıyor. 600 mm'ye
          kadar çok sayıda kaynak makinesinin yanı sıra: TIG Orbital kaynak
          makinesi, yüksek frekanslı TIG kaynak makineleri veya sinerjik MIG/MAG
          kaynak makineleri. Projelerin tüm planlaması ve hazırlığı, izometrik
          planlama için CAD araçlarıyla yapılır ve teknik çizim yazılımımız
          SOLIDWORKS'e sahibiz. çeşitli malzeme ve kaplamalarda
          ızgaralar/kapılar, merdivenler ve özel yapım yapılar, kaplamalar ve
          incelikli ve lüks kaplamalar. Üretim ve yönetim için uygun şekilde
          yapılandırılmış ve ileri teknolojiye sahip farklı makinelerle
          donatılmış iki tesise sahibiz; bunlardan 3 eksenli sayısal kontrollü
          bükme makinesi, oksigaz kesme ekipmanı, 40 mm'ye kadar plazma kesme,
          her türlü profili kesmek için şerit testere öne çıkıyor. 600 mm'ye
          kadar çok sayıda kaynak makinesinin yanı sıra: TIG Orbital kaynak
          makinesi, yüksek frekanslı TIG kaynak makineleri veya sinerjik MIG/MAG
          kaynak makineleri. Projelerin tüm planlaması ve hazırlığı, izometrik
          planlama için CAD araçlarıyla yapılır ve teknik çizim yazılımımız
          SOLIDWORKS'e sahibiz. Üretim ve yönetim için uygun şekilde
          yapılandırılmış ve ileri teknolojiye sahip farklı makinelerle
          donatılmış iki tesise sahibiz; bunlardan 3 eksenli sayısal kontrollü
          bükme makinesi, oksigaz kesme ekipmanı, 40 mm'ye kadar plazma kesme,
          her türlü profili kesmek için şerit testere öne çıkıyor. 600 mm'ye
          kadar çok sayıda kaynak makinesinin yanı sıra: TIG Orbital kaynak
          makinesi, yüksek frekanslı TIG kaynak makineleri veya sinerjik MIG/MAG
          kaynak makineleri. Projelerin tüm planlaması ve hazırlığı, izometrik
          planlama için CAD araçlarıyla yapılır ve teknik çizim yazılımımız
          SOLIDWORKS'e sahibiz. Üretim ve yönetim için uygun şekilde
          yapılandırılmış ve ileri teknolojiye sahip farklı makinelerle
          donatılmış iki tesise sahibiz; bunlardan 3 eksenli sayısal kontrollü
          bükme makinesi, oksigaz kesme ekipmanı, 40 mm'ye kadar plazma kesme,
          her türlü profili kesmek için şerit testere öne çıkıyor. 600 mm'ye
          kadar çok sayıda kaynak makinesinin yanı sıra: TIG Orbital kaynak
          makinesi, yüksek frekanslı TIG kaynak makineleri veya sinerjik MIG/MAG
          kaynak makineleri. Projelerin tüm planlaması ve hazırlığı, izometrik
          planlama için CAD araçlarıyla yapılır ve teknik çizim yazılımımız
          SOLIDWORKS'e sahibiz. çok sayıda kaynak makinesinin yanı sıra: TIG
          Orbital kaynak makinesi, yüksek frekanslı TIG kaynak makineleri veya
          sinerjik MIG/MAG kaynak makineleri. Projelerin tüm planlaması ve
          hazırlığı, izometrik planlama için CAD araçlarıyla yapılır ve teknik
          çizim yazılımımız SOLIDWORKS'e sahibiz. çok sayıda kaynak makinesinin
          yanı sıra: TIG Orbital kaynak makinesi, yüksek frekanslı TIG kaynak
          makineleri veya sinerjik MIG/MAG kaynak makineleri. Projelerin tüm
          planlaması ve hazırlığı, izometrik planlama için CAD araçlarıyla
          yapılır ve teknik çizim yazılımımız SOLIDWORKS'e sahibiz.
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
                <Link className="moreLinkButton" to="/projects/perfumes">
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
                <Link className="moreLinkButton" to="/projects/Frades">
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
