import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: "#616261",
    padding: theme.spacing(4),
    marginTop: theme.spacing(0),
  },
  sectionTitle: {
    marginBottom: theme.spacing(1),
    textDecoration: "underline",
  },
  link: {
    display: "block",
    marginBottom: theme.spacing(1),
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(2),
  },
  formInput: {
    marginBottom: theme.spacing(1),
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
  },
  checkboxText: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
}));

const FooterMenuDiv = () => {
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <footer className={classes.footerContainer}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4} className="FooterSubscribeDivContact">
            <Typography
              variant="h6"
              className="FooterMenuDivContent"
              style={{ color: "white" }}
            >
              İLETİŞİM
            </Typography>
            <h4 className={classes.h4} style={{ color: "white" }}>
              İş Telefon: (+351) 252 240 490
            </h4>
            <h4 className={classes.h4} style={{ color: "white" }}>
              Cep Telefon :(+351) 555 555 555
            </h4>
            <h4 className={classes.h4} style={{ color: "white" }}>
              Fax : 123 456 789
            </h4>
            <h4 className={classes.h4} style={{ color: "white" }}>
              E-posta : jkfakshjf@gmail.com
            </h4>
          </Grid>
          <Grid item xs={12} sm={4} className="FooterSubscribeDiv">
            <Typography
              variant="h6"
              className="FooterMenuDivContent"
              style={{ color: "white" }}
            >
              MENÜ
            </Typography>
            <Link
              to="/secretPolicy"
              className={classes.link}
              style={{ color: "white", textDecoration: "none" }}
            >
              GİZLİLİK POLİTİKASI
            </Link>
            <Link
              to="/services"
              className={classes.link}
              style={{ color: "white", textDecoration: "none" }}
            >
              SERVİSLER
            </Link>
            <Link
              to="/projects"
              className={classes.link}
              style={{ color: "white", textDecoration: "none" }}
            >
              PROJELER
            </Link>
            <Link
              to="/about"
              className={classes.link}
              style={{ color: "white", textDecoration: "none" }}
            >
              HAKKIMIZDA
            </Link>
            <Link
              to="/courses"
              className={classes.link}
              style={{ color: "white", textDecoration: "none" }}
            >
              KURSLAR
            </Link>
            <Link
              to="/contact"
              className={classes.link}
              style={{ color: "white", textDecoration: "none" }}
            >
              İLETİŞİM
            </Link>
            <Link
              to="/menu"
              className={classes.link}
              style={{ color: "white", textDecoration: "none" }}
            >
              BLOG
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              className="FooterMenuDivContent"
              style={{ color: "white" }}
            >
              KAYDOL
            </Typography>
            <Typography style={{ color: "white" }}>
              <strong>
                Faaliyetlerimiz ve projelerimizle ilgili içeriklerle hakkımızda
                bilgi alacaksınız.
              </strong>
            </Typography>
            <form className={classes.formContainer}>
              <TextField label="İsim" className={classes.formInput} />
              <TextField label="E-posta" className={classes.formInput} />
              <div className={classes.checkboxContainer}>
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
                    >
                      <Link to="/privacyPolicy" style={{ color: "white" }}>
                        Gizlilik politikasını {""}
                      </Link>
                      okudum.Onaylıyorum.
                    </Typography>
                  }
                />
              </div>
              <Button
                variant="contained"
                style={{ color: "white", backgroundColor: "lightblue" }}
                disabled={!isChecked}
              >
                KAYDOL
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default FooterMenuDiv;
