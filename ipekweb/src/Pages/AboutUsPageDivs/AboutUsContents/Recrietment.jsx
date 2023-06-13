import React, { useState } from "react";
import recrutamento from "../../../assets/recrutamento.jpg";
import "../../../styles/AboutUs.css";
import { useMediaQuery } from "@mui/material";
import {
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  checkboxContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
  checkboxText: {
    color: "white",
  },
}));

export const Recrietment = () => {
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const isXs = useMediaQuery("(max-width: 599.95px)");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const classes = useStyles();
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          height: isXs ? "200px" : "200px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${recrutamento})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            margin: isXs ? "20px 30px 0 30px" : "20px 100px 0 100px",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            alignItems: "start",
            justifyContent: "center",
            paddingLeft: "50px",
          }}
        >
          <h2 style={{ color: "white", width: "100%" }}>
            Sürekli olarak yetkin ve kendini işine adamış profesyoneller
            arıyoruz.
            <p style={{ color: "white" }}> TAKIMIMIZA KATIL!</p>
          </h2>
        </div>
      </div>
      <div
        style={{
          margin: isXs ? "0 30px 40px 30px" : "0 100px 40px 100px",
          height: "calc(100% - 120px)",
          color: "#2CD4E0",
        }}
      >
        <h2>HI FOOD – İşe Alım</h2>
        <p
          className="engineeringProjectMainDiv_p"
          style={{
            fontSize: "13px",
            fontWeight: "500",
          }}
        >
          HI FOOD, uluslararası boyutta, modern endüstriyel ekipmanlarla
          donatılmış ve sürekli yenilenen bir Endüstriyel Kaynak ve Bakım
          Hizmeti şirketidir.
          <br />
          <br />
          <br /> Müşterilerimize üstün kaliteli hizmet sunmanın yanı sıra
          pazardaki konumumuzu sağlamlaştırmak ve önemli rekabet avantajları
          geliştirmek için insan ve teknik kaynağımızın gelişimine sürekli
          yatırım yapmaktayız.
          <br />
          <br /> <br />
          Sürekli olarak yetkin ve kendini işine adamış profesyoneller arıyoruz.
          Verilerinizle formu doldurun ve ekibimize katılma şansını yakalayın!
        </p>
      </div>
      <div
        style={{
          margin: "0 auto",
          padding: isXs ? "20px 30px 0 30px" : "20px 100px 0 100px",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: isXs ? "column" : "row",
              marginBottom: "15px",
            }}
          >
            <div style={{ width: isXs ? "100%" : "50%", marginRight: "35px" }}>
              <input
                type="text"
                placeholder="Adayın İsmi"
                style={{
                  width: isXs ? "calc(95% - 15px)" : "100%",
                  height: "30px",
                  border: "1px solid #d0d7de",
                  borderRadius: "5px",
                  paddingLeft: "15px",
                }}
              />
            </div>
            <div style={{ width: isXs ? "100%" : "50%" }}>
              <input
                type="text"
                placeholder="Doğum Tarihi"
                style={{
                  width: isXs ? "calc(95% - 15px)" : "100%",
                  height: "30px",
                  border: "1px solid #d0d7de",
                  borderRadius: "5px",
                  paddingLeft: "15px",
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: isXs ? "column" : "row",
              marginBottom: "15px",
            }}
          >
            <div style={{ width: isXs ? "100%" : "50%", marginRight: "30px" }}>
              <input
                type="text"
                placeholder="Email Adresi"
                style={{
                  width: isXs ? "calc(95% - 15px)" : "100%",
                  height: "30px",
                  border: "1px solid #d0d7de",
                  borderRadius: "5px",
                  paddingLeft: "15px",
                }}
              />
            </div>
            <div style={{ width: isXs ? "100%" : "50%" }}>
              <input
                type="text"
                placeholder="Telefon Numarası"
                style={{
                  width: isXs ? "calc(95% - 15px)" : "100%",
                  height: "30px",
                  border: "1px solid #d0d7de",
                  borderRadius: "5px",
                  paddingLeft: "15px",
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: isXs ? "column" : "row",
              marginBottom: "15px",
            }}
          >
            <div style={{ width: isXs ? "100%" : "50%", marginRight: "35px" }}>
              <input
                type="text"
                placeholder="Milliyeti"
                style={{
                  width: isXs ? "calc(95% - 15px)" : "100%",
                  height: "30px",
                  border: "1px solid #d0d7de",
                  borderRadius: "5px",
                  paddingLeft: "15px",
                }}
              />
            </div>
            <div style={{ width: isXs ? "100%" : "50%" }}>
              <input
                type="text"
                placeholder="İkamet Adresi"
                style={{
                  width: isXs ? "calc(95% - 15px)" : "100%",
                  height: "30px",
                  border: "1px solid #d0d7de",
                  borderRadius: "5px",
                  paddingLeft: "15px",
                }}
              />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <textarea
            placeholder="Nitelikler"
            style={{
              width: isXs ? "calc(95% - 15px)" : "100%",
              height: "250px",
              border: "1px solid #d0d7de",
              borderRadius: "5px",
              paddingLeft: "15px",
            }}
          ></textarea>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: isXs ? "column" : "row",
          }}
        >
          <div style={{ width: "50%", marginRight: "35px" }}>
            <input
              type="text"
              placeholder="Başvurulan Rol"
              style={{
                width: isXs ? "calc(95% - 15px)" : "100%",
                height: "30px",
                border: "1px solid #d0d7de",
                borderRadius: "5px",
                paddingLeft: "15px",
                marginBottom: isXs ? "10px" : "",
              }}
            />
          </div>
          <div style={{ width: isXs ? "100%" : "50%", marginRight: "35px" }}>
            <div>
              <input type="file" onChange={handleFileSelect} id="fileInput" />
              <p style={{ fontSize: "12px", marginTop: "0" }}>
                Müfredatı pdf olarak yükleyin
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classes.checkboxContainer}
        style={{ marginBottom: "50px", paddingLeft: isXs ? "30px" : "100px" }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={handleCheckboxChange}
              color="primary"
            />
          }
          label={
            <Typography
              variant="body2"
              className={classes.checkboxText}
              style={{ color: "#5c6873", fontSize: "12px" }}
            >
              Gizlilik politikasını okudum.Onaylıyorum.{""}
              <Link to="/privacyPolicy" style={{ color: "black" }}>
                - HFGP
              </Link>
            </Typography>
          }
        />
        <Button
          variant="contained"
          style={{ color: "white", backgroundColor: "#2CD4E0" }}
          disabled={!isChecked}
        >
          ADAYLIĞI GÖNDER
        </Button>
      </div>
    </div>
  );
};
