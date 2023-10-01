import React from "react";
import { Link } from "react-router-dom";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

export const WrongPath = () => {
  return (
    <div>
      <div
        style={{
          height: "300px",
          width: "100%",
          marginTop: "110px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "red",
            }}
          >
            <WarningAmberIcon style={{ height: "40%", width: "40%" }} />{" "}
          </div>
          <h4 style={{ color: "#3f444a" }}>
            Sayfa Bulunamadı. Bu Sayfa Mevcut Değil!!!
          </h4>
        </div>

        <div>
          {" "}
          <Link to="/">Ana Sayfa 'ya geri dön</Link>
        </div>
      </div>
    </div>
  );
};
