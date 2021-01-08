import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
//Icons
import HotelIcon from "@material-ui/icons/Hotel";
import BathtubIcon from "@material-ui/icons/Bathtub";
import SquareFootIcon from "@material-ui/icons/SquareFoot";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  houseDesc: {
    display: "flex",
    justifyContent: "space-around",
  },
  DescItem: {
    display: "flex",
  },
  par: {
    marginTop: "5px",
    marginLeft: "5px",
  },
  cardFooter: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#586F7C",
    color: "#fff",
  },
});

export default function House() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=6&m=1026205392&s=612x612&w=0&h=pe0Pqbm7GKHl7cmEjf9Drc7Fp-JwJ6aTywsGfm5eQm4="
          title="Contemplative Reptile"
        />
        <CardContent>
          <div className={classes.houseDesc}>
            <div className={classes.Desc}>
              <div className={classes.DescItem}>
                <div>
                  <HotelIcon color="secondary" />
                </div>
                <p color="secondary" className={classes.par}>
                  1
                </p>
              </div>
            </div>
            <div className={classes.Desc}>
              <div className={classes.Desc}>
                <div className={classes.DescItem}>
                  <div>
                    <BathtubIcon color="secondary" />
                  </div>
                  <p color="secondary" className={classes.par}>
                    1
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.Desc}>
              <div className={classes.Desc}>
                <div className={classes.DescItem}>
                  <div>
                    <SquareFootIcon color="secondary" />
                  </div>
                  <p color="secondary" className={classes.par}>
                    {" "}
                    250 sqft
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "10px" }}> Addis Ababa</div>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardFooter}>
        <div>1,600,000 ETB</div>
      </CardActions>
    </Card>
  );
}
