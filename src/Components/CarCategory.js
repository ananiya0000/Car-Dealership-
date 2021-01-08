import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
//Icons

const useStyles = makeStyles({
  root: {
    maxWidth: 130,
    marginBottom: "10px",
  },
  media: {
    height: 70,
  },
  CarDesc: {
    display: "flex",
    justifyContent: "space-around",
  },
  carEngine: {
    display: "flex",
  },

  cardFooter: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#586F7C",
    color: "#fff",
  },
});

export default function CarCategory() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_ogp_001.png"
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardContent>
        <div style={{ color: "#586F7C" }}>Toyota</div>
      </CardContent>
    </Card>
  );
}
