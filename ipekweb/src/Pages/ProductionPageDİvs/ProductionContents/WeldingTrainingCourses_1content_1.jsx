import React from "react";
import News_1 from "../../../assets/ProductionPageImages/kaynaktraining_1.jpg";

export const WeldingTrainingCourses_1content_1 = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "start",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${News_1})`,
              backgroundSize: "cover",
              backgroundRepeat: "none",
              width: "95%",
              height: "350px",
              margin: "20px 0",
            }}
          ></div>
        </div>
        <div style={{ width: "50%" }}>
          <h2>MIG MAG - Seviye1</h2>
          <br/>
          <br/>
          <h3>Ders Adı</h3>
          <br/>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};
