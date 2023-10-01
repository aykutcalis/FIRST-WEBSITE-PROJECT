import React from "react";
import { Container, Grid } from "@mui/material";
import "../../styles/contact.css";

export const ContactPageMain = () => {
  return (
    <div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.198909725488!2d28.911225075288378!3d41.02090401864851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabbf6e77dfb59%3A0xf37f5a9aaa26ef01!2sMaltepe!5e0!3m2!1str!2str!4v1687004241308!5m2!1str!2str"
          style={{ width: "100%", height: "400px", marginTop: "70px" }}
        ></iframe>
      </div>
      <Container className="ContactContainer" style={{ marginBottom: "20px" }}>
        <h2 style={{ color: "#2CD4E0" }}>TÜRKİYE</h2>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <p>Adres Bilgileri</p>
            <p>İstanbul/Zeytinburnu</p>
            <p>Maltepe Mah. Davutpaşa cad </p>
            <p>no:22/66</p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <p>İletişim Bilgileri</p>
            <p>tlf.(+ 532) 738 14 81</p>
            <p>E-posta:geral@hifoodtech.pt</p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <p>Diğer Bilgiler</p>
            <p>GPS 41.02048, 28.90914</p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
