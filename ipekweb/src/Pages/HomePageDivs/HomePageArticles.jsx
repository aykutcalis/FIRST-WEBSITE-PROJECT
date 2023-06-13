import React from "react";
import News_1 from "../../assets/HomePageImages/pipe1.jpeg";
import News_2 from "../../assets/HomePageImages/pipe2.jpeg";
import News_3 from "../../assets/HomePageImages/pipe3.jpeg";
import News_4 from "../../assets/HomePageImages/pipe4.jpeg";
import News_5 from "../../assets/HomePageImages/pipe5.jpeg";
import { Grid, Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

export const HomePageArticles = () => {
  const isXs = useMediaQuery("(max-width: 599.95px)");
  return (
    <div>
      <div>
        <div className={isXs ? "DivMainXs" : "DivMain"}>
          <div>
            <h1 className="divTitle">MAKALELER</h1>
          </div>
          <div className="DivMainText">
            <p>En son haberleri HI FOOD kalitesiyle takip edin.</p>
          </div>
          <div className="divSecondTitle">
            <div>
              <h1 className="divSecondTitle_h">SON MAKALELER</h1>
            </div>
          </div>
        </div>
        <Box
          className={isXs ? "mainHomeDivFourthPageXs" : "mainHomeDivFourthPage"}
        >
          <Grid container className={isXs ? "leftDivsXs" : "leftDivs"}>
            <Grid
              xs={12}
              md={11}
              className="mainPage_4"
              style={{ backgroundImage: `url(${News_1})` }}
            >
              <button className="newsButton_left">
                HI FOOD Akademi: Bir Formasyona Yatırım Yapmak İçin 5 Motif
              </button>
            </Grid>
          </Grid>
          <Grid container className={isXs ? "rightDivsXs" : "rightDivs"}>
            <Grid
              xs={12}
              md={5}
              className="mainPage_4"
              style={{ backgroundImage: `url(${News_2})` }}
            >
              <button className="newsButton">
                Baraj: Ingula, Başka Bir HI FOOD Uluslararası Projesi!
              </button>
            </Grid>
            <Grid
              xs={12}
              md={5}
              className="mainPage_4"
              style={{ backgroundImage: `url(${News_3})` }}
            >
              <button className="newsButton">
                Endüstriyel Bakım: Başarılı Olmak İçin 4 Strateji!
              </button>
            </Grid>
            <Grid
              xs={12}
              md={5}
              className="mainPage_4"
              style={{ backgroundImage: `url(${News_4})` }}
            >
              <button className="newsButton">
                Rafineri NATEMA: HI FOOD, Madagaskar'da bir projeye katıldı!
              </button>
            </Grid>
            <Grid
              xs={12}
              md={5}
              className="mainPage_4"
              style={{ backgroundImage: `url(${News_5})` }}
            >
              <button className="newsButton">
                İş Projesi: İş Planının önemi!
              </button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};
