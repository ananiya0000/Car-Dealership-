import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
//Icons

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
  },
  media: {
    height: 240,
  },
  cardFooter: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#586F7C",
    color: "#fff",
  },
});

export default function HouseCategory() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://media.istockphoto.com/photos/europe-modern-complex-of-residential-buildings-picture-id1165384568?k=6&m=1165384568&s=612x612&w=0&h=EFKcg8aMptUfpr5TCFTyYnHEdDmUL0tmsOT3TWeXl8I="
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActions className={classes.cardFooter}>
        <div>APARTMENT</div>
      </CardActions>
    </Card>
  );
}
