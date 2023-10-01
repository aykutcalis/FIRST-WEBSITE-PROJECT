import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
} from "@mui/material";
import ProductionImage1 from "../../assets/ProductionPageImages/kaynak1.jpg";
import ProductionImage2 from "../../assets/ProductionPageImages/kaynak2.jpg";
import ProductionImage3 from "../../assets/ProductionPageImages/kaynak3.jpg";
import ProductionImage4 from "../../assets/ProductionPageImages/kaynak4.jpg";
import ProductionImage5 from "../../assets/ProductionPageImages/kurs1.jpg";
import ProductionImage6 from "../../assets/ProductionPageImages/kurs2.jpg";
import ProductionImage7 from "../../assets/ProductionPageImages/kurs3.jpg";
import ProductionImage8 from "../../assets/ProductionPageImages/kurs4.jpg";
import ProductionImage9 from "../../assets/ProductionPageImages/kurs5.jpg";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

export const ProductionMain = () => {
  const isXs = useMediaQuery("(max-width: 599.95px)");
  return (
    <Stack>
      <Typography
        variant="h5"
        component="div"
        paddingTop={"70px"}
        style={{
          fontWeight: "700",
          color: "#3f444a",
          paddingLeft: isXs ? "20px" : "120px",
        }}
      >
        Üretim Evreleri
      </Typography>

      <Grid
        className="ServicesCardsMainGrid"
        container
        spacing={1}
        style={{ padding: isXs ? "20px 0px" : "20px 100px" }}
      >
        <Grid item xs={12} sm={3}>
          <Stack className="cards">
            <CardMedia
              height="150px"
              component="img"
              image={ProductionImage1}
            />

            <Typography
              variant="p"
              component="div"
              color="#67696c"
              style={{ fontSize: "14px", fontWeight: "600", marginTop: "15px" }}
            >
              MIG MAG Üretimi
            </Typography>
            <Typography
              variant="p"
              component="div"
              color="#67696c"
              style={{ fontSize: "14px", fontWeight: "400", marginTop: "15px" }}
            >
              MIG MAG Üretimi
            </Typography>

            <CardActions className="CoursesStackActionsDiv">
              <Link
                className="moreLinkButton"
                to="/courses/weldingTrainingCourses_1"
              >
                DAHA FAZLASINI KEŞFET
              </Link>
            </CardActions>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Stack className="cards">
            <CardMedia
              height="150px"
              component="img"
              image={ProductionImage2}
            />

            <Typography
              variant="p"
              component="div"
              color="#67696c"
              style={{ fontSize: "14px", fontWeight: "600", marginTop: "15px" }}
            >
              Tig Üretimi
            </Typography>
            <Typography
              variant="p"
              component="div"
              color="#67696c"
              style={{ fontSize: "14px", fontWeight: "400", marginTop: "15px" }}
            >
              TIG Kaynak Kursları
            </Typography>

            <CardActions className="CoursesStackActionsDiv">
              <Link
                className="moreLinkButton"
                to="/services/ındustrial-project"
              >
                DAHA FAZLASINI KEŞFET
              </Link>
            </CardActions>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Stack className="cards">
            <CardMedia
              height="150px"
              component="img"
              image={ProductionImage3}
            />

            <Typography
              variant="p"
              component="div"
              color="#67696c"
              style={{ fontSize: "14px", fontWeight: "600", marginTop: "15px" }}
            >
              SMAW Üretimi
            </Typography>
            <Typography
              variant="p"
              component="div"
              color="#67696c"
              style={{ fontSize: "14px", fontWeight: "400", marginTop: "15px" }}
            >
              SMAW Üretimi
            </Typography>

            <CardActions className="CoursesStackActionsDiv">
              <Link
                className="moreLinkButton"
                to="/services/environment-project"
              >
                DAHA FAZLASINI KEŞFET
              </Link>
            </CardActions>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Stack className="cards">
            <CardMedia
              height="150px"
              component="img"
              image={ProductionImage4}
            />

            <Typography
              variant="p"
              component="div"
              color="#67696c"
              style={{ fontSize: "14px", fontWeight: "600", marginTop: "15px" }}
            >
              Ayna Üretimi
            </Typography>
            <Typography
              variant="p"
              component="div"
              color="#67696c"
              style={{ fontSize: "14px", fontWeight: "400", marginTop: "15px" }}
            >
              Ayna Üretimi
            </Typography>

            <CardActions className="CoursesStackActionsDiv">
              <Link
                className="moreLinkButton"
                to="/services/environment-project"
              >
                DAHA FAZLASINI KEŞFET
              </Link>
            </CardActions>
          </Stack>
        </Grid>
      </Grid>
      <Typography
        variant="h5"
        component="div"
        paddingTop={"20px"}
        style={{
          fontWeight: "700",
          color: "#3f444a",
          paddingLeft: isXs ? "20px" : "120px",
        }}
      >
        Diğer Üretim Evreleri
      </Typography>

      <Grid
        className="ServicesCardsMainGrid"
        container
        spacing={1}
        style={{ padding: isXs ? "20px 0px" : "20px 100px" }}
      >
        <Grid item xs={12} sm={3}>
          <Stack className="cards">
            <CardMedia
              height="150px"
              component="img"
              image={ProductionImage5}
            />

            <Typography
              variant="p"
              component="div"
              color="#67696c"
              style={{ fontSize: "14px", fontWeight: "600", marginTop: "15px" }}
            >
              Temel Üretim
            </Typography>
            <Typography
              variant="p"
              component="div"
              color="#67696c"
              style={{ fontSize: "14px", fontWeight: "400", marginTop: "15px" }}
            >
              Temel Üretim
            </Typography>

            <CardActions className="CoursesStackActionsDiv">
              <Link
                className="moreLinkButton"
                to="/services/engineering-project"
              >
                DAHA FAZLASINI KEŞFET
              </Link>
            </CardActions>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Stack className="cards">
            <CardMedia
              height="150px"
              component="img"
              image={ProductionImage6}
            />

            <Typography
              variant="p"
              component="div"
              color="#67696c"
              style={{ fontSize: "14px", fontWeight: "600", marginTop: "15px" }}
            >
              Forklift Üretimi
            </Typography>
            <Typography
              variant="p"
              component="div"
              color="#67696c"
              style={{ fontSize: "14px", fontWeight: "400", marginTop: "15px" }}
            >
              Forklift Üretimi
            </Typography>

            <CardActions className="CoursesStackActionsDiv">
              <Link
                className="moreLinkButton"
                to="/services/ındustrial-project"
              >
                DAHA FAZLASINI KEŞFET
              </Link>
            </CardActions>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Stack className="cards">
            <CardMedia
              height="150px"
              component="img"
              image={ProductionImage7}
            />

            <Typography
              variant="p"
              component="div"
              color="#67696c"
              style={{ fontSize: "14px", fontWeight: "600", marginTop: "15px" }}
            >
              İlk yardım Üretimi
            </Typography>
            <Typography
              variant="p"
              component="div"
              color="#67696c"
              style={{ fontSize: "14px", fontWeight: "400", marginTop: "15px" }}
            >
              İlk yardım Üretimi
            </Typography>

            <CardActions className="CoursesStackActionsDiv">
              <Link
                className="moreLinkButton"
                to="/services/environment-project"
              >
                DAHA FAZLASINI KEŞFET
              </Link>
            </CardActions>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Stack className="cards">
            <CardMedia
              height="150px"
              component="img"
              image={ProductionImage8}
            />

            <Typography
              variant="p"
              component="div"
              color="#67696c"
              style={{ fontSize: "14px", fontWeight: "600", marginTop: "15px" }}
            >
              Güvenlik Üretimi
            </Typography>
            <Typography
              variant="p"
              component="div"
              color="#67696c"
              style={{ fontSize: "14px", fontWeight: "400", marginTop: "15px" }}
            >
              Güvenlik Üretimi
            </Typography>

            <CardActions className="CoursesStackActionsDiv">
              <Link
                className="moreLinkButton"
                to="/services/environment-project"
              >
                DAHA FAZLASINI KEŞFET
              </Link>
            </CardActions>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Stack className="cards">
            <CardMedia
              height="150px"
              component="img"
              image={ProductionImage9}
            />

            <Typography
              variant="p"
              component="div"
              color="#67696c"
              style={{ fontSize: "14px", fontWeight: "600", marginTop: "15px" }}
            >
              Acil Durumlar Muharebe Üretimi
            </Typography>
            <Typography
              variant="p"
              component="div"
              color="#67696c"
              style={{ fontSize: "14px", fontWeight: "400", marginTop: "15px" }}
            >
              Acil Durumlar Muharebe Üretimi
            </Typography>

            <CardActions className="CoursesStackActionsDiv">
              <Link
                className="moreLinkButton"
                to="/services/environment-project"
              >
                DAHA FAZLASINI KEŞFET
              </Link>
            </CardActions>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
