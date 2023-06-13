import React from "react";
import {
  Stack,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import "../../styles/Home.css";
import "../../styles/Services.css";
import ProjectImage2 from "../../assets/HomePageImages/pipe1.jpeg";
import ProjectImage3 from "../../assets/HomePageImages/pipe2.jpeg";

export const ProjectEnvironment = () => {
  const isXs = useMediaQuery("(max-width: 599.95px)");
  return (
    <div>
      {" "}
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
              <Link to="/projects/extraction">
                <CardMedia
                  height="400px"
                  component="img"
                  image={ProjectImage2}
                />

                <CardContent
                  className="engineeringProjectCardContent"
                  style={{ background: "#dfdfdf" }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    style={{ color: "#2CD4E0", fontWeight: "700" }}
                  >
                    Uçucu Yağların Ekstraksiyonu
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        </Grid>

        <Grid
          style={{
            background: "#dfdfdf",
            height: "100%",
            width: "100%",
            paddingRight: isXs ? "25px" : "150px",
            paddingLeft: isXs ? "25px" : "",
          }}
        >
          <Grid item>
            <Card className="cards">
              <Link to="/projects/food">
                <CardMedia
                  height="400px"
                  component="img"
                  image={ProjectImage3}
                />

                <CardContent style={{ background: "#dfdfdf" }}>
                  <Typography
                    variant="h5"
                    component="div"
                    style={{ color: "#2CD4E0", fontWeight: "700" }}
                  >
                    Gıda Atıklarının Değerlendirilmesi
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};
