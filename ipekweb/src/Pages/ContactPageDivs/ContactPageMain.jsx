import React from "react";
import { Container, Grid } from "@mui/material";
import "../../styles/contact.css";

export const ContactPageMain = () => {
  return (
    <div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.708242012194!2d27.206239275149507!3d38.47129647173477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b97d3d54d02239%3A0x5450df9fa4d69cdc!2zS8SxesSxbGF5LCDEsHN0aWtsYWwgQ2QuIDEwLTE0LCAzNTAzMCBCb3Jub3ZhL8Swem1pcg!5e0!3m2!1str!2str!4v1686659447245!5m2!1str!2str"
          style={{ width: "100%", height: "400px", marginTop: "70px" }}
        ></iframe>
      </div>
      <Container className="ContactContainer" style={{ marginBottom: "20px" }}>
        <h2 style={{ color: "#2CD4E0" }}>TÜRKİYE</h2>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <p>Adres Bilgileri</p>
            <p>İzmir/Bornova</p>
            <p>Kızılay Caddesi </p>
            <p>10/14,35030</p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <p>İletişim Bilgileri</p>
            <p>tlf.+351 252240490</p>
            <p>faks.+351 252240491</p>
            <p>E-posta:geral@hifood.pt</p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <p>Diğer Bilgiler</p>
            <p>GPS 41.398030, -8.744396</p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
