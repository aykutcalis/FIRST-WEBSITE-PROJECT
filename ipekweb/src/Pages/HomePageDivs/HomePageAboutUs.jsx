import React from "react";
import { Container } from "react-bootstrap";
import { useMediaQuery } from "@mui/material";
import youtubeBackgroundImage from "../../assets/youtubeBackgroundImage.jpg";

export const HomePageAboutUs = () => {
  const isXs = useMediaQuery("(max-width: 599.95px)");
  return (
    <div>
      <div className={isXs ? "DivMainXs" : "DivMain"}>
        <div>
          <h1 className="divTitle">HI FOOD TECH HAKKINDA DAHA FAZLA BİLGİ</h1>
        </div>
        <div className="DivMainText">
          <p>
            Filmimizi izleyin ve herhangi bir projeye dahil olduğumuzda
            ekiplerimizin sorumluluk duygusunu ve misyonunu takdir edin. HI FOOD TECH, mutlak güveninize layık bir ortak olmak için sürekli büyüyor
            ve yenilik yapıyor.
          </p>
        </div>
      </div>
      <Container
        style={{
          backgroundImage: `url(${youtubeBackgroundImage})`,
          height: isXs ? "200px" : "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          border: "none",
        }}
      >
        <div style={{ width: "60%", height: "100%" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/J0zwlaxq9qI"
              title="YouTube Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};
