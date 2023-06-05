import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export const ServicesCards = () => {
  return (
    <Grid className="ServicesCardsMainGrid" container spacing={1}>
      <Grid item xs={12} sm={4}>
        <Card className="cards">
          <CardMedia
            height="150px"
            component="img"
            image="https://images.unsplash.com/photo-1669201910436-bfa30e794514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          />
          <CardContent>
            <Typography variant="h5" component="div">
            Mühendislik Projeleri - Üretim Öncesi ve Endüstriyel Montaj
            </Typography>
            <Typography variant="body2" component="p">
              Başlığım Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Porro dolorum libero esse? Dolorem quibusdam voluptatibus sunt
              nulla earum qui deleniti hic dignissimos aut. Repudiandae totam,
              soluta minus enim necessitatibus debitis.
            </Typography>
          </CardContent>
          <CardActions className="CardActionsDiv">
            <button className="moreButton">DAHA FAZLASINI KEŞFET</button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card className="cards">
          <CardMedia
            height="150px"
            component="img"
            image="https://images.unsplash.com/photo-1669201910436-bfa30e794514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          />
          <CardContent>
            <Typography variant="h5" component="div">
            Endüstriyel Bakım Hizmetleri
            </Typography>
            <Typography variant="body2" component="p">
              Başlığım Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Porro dolorum libero esse? Dolorem quibusdam voluptatibus sunt
              nulla earum qui deleniti hic dignissimos aut. Repudiandae totam,
              soluta minus enim necessitatibus debitis.
            </Typography>
          </CardContent>
          <CardActions className="CardActionsDiv">
            <button className="moreButton">DAHA FAZLASINI KEŞFET</button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card className="cards">
          <CardMedia
            height="150px"
            component="img"
            image="https://images.unsplash.com/photo-1669201910436-bfa30e794514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          />
          <CardContent>
            <Typography variant="h5" component="div">
            Çevre Projeleri - Freetilizer
            </Typography>
            <Typography variant="body2" component="p">
              Başlığım Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Porro dolorum libero esse? Dolorem quibusdam voluptatibus sunt
              nulla earum qui deleniti hic dignissimos aut. Repudiandae totam,
              soluta minus enim necessitatibus debitis.
            </Typography>
          </CardContent>
          <CardActions className="CardActionsDiv">
            <button className="moreButton">DAHA FAZLASINI KEŞFET</button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};
