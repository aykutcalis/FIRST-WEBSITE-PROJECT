import React from "react";
import youtubeBackgroundImage from "../../assets/youtubeBackgroundImage.jpg";
import { Container } from "react-bootstrap";

export const ServicesYoutube = () => {
  const isXs = window.innerWidth <= 600;

  return (
    <div>
      {isXs ? (
        <Container
          className={`d-flex justify-content-center align-items-center`}
          style={{
            backgroundImage: `url(${youtubeBackgroundImage})`,

            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "80%",
              height: "50%",
              marginTop: "5px",
            }}
          >
            <h1 style={{ color: "white" }}>
              Ipek Mühendislik - Mühendislik, Endüstriyel Bakım ve Çevre
              Projeleri
            </h1>
            <p style={{ color: "white" }}>
              Filmimizi izleyin ve herhangi bir projeye dahil olduğumuzda
              ekiplerimizin sorumluluk duygusunu ve misyonunu takdir edin. Ipek
              Muhendislik durdurulamaz ve mutlak güvene dayalı bir ortaklığı
              giderek daha fazla garanti ediyor.
            </p>
          </div>
          <div style={{ width: "90%", marginTop: "auto", marginBottom: "5px" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/rurtJhnEkTE"
              title="YouTube Video"
              border="none"
              allowFullScreen
              style={{ margin: "0 auto" }}
            ></iframe>
          </div>
        </Container>
      ) : (
        <Container
          className={`d-flex justify-content-center align-items-center `}
          style={{
            backgroundImage: `url(${youtubeBackgroundImage})`,
            height: "400px",
            display: "flex",

            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "55%",
            }}
          >
            <h1 style={{ color: "white" }}>
              HI FOOD - Mühendislik, Endüstriyel Bakım ve Çevre Projeleri
            </h1>
            <p style={{ color: "white" }}>
              Filmimizi izleyin ve herhangi bir projeye dahil olduğumuzda
              ekiplerimizin sorumluluk duygusunu ve misyonunu takdir edin. Pipe
              Masters durdurulamaz ve mutlak güvene dayalı bir ortaklığı giderek
              daha fazla garanti ediyor.
            </p>
          </div>
          <div style={{ width: "40%", height: "75%", paddingRight: "20px" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/J0zwlaxq9qI"
              title="YouTube Video"
              border="none"
              allowFullScreen
            ></iframe>
          </div>
        </Container>
      )}
    </div>
  );
};
