import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

//components
import Hero from "../Components/Hero";
import Car from "../Components/Car";
import CarCatergory from "../Components/CarCategory";

const useStyles = makeStyles((theme) => ({
  listing_text: {
    textAlign: "center",
    fontSize: "22px",
    marginTop: "60px",
    marginBottom: "50px",
  },
  grid: {
    width: "100%",
  },
  viewMore: {
    textAlign: "center",
    marginTop: "20px",
  },
}));
const CarScreen = () => {
  const classes = useStyles();
  return (
    <div>
      <Hero image="https://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brand/legacy/nameplate/cars/20_FRD_MST_42360_32.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg" />
      {/* Car Listing */}

      <Typography
        variant="h6"
        color="secondary"
        className={classes.listing_text}
      >
        LATEST CAR LISTING
      </Typography>

      <Grid
        container
        spacing={2}
        className={classes.grid}
        align="center"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Car />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Car />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Car />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Car />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Car />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Car />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Car />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Car />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Car />
        </Grid>
      </Grid>

      {/* Car Category */}

      <Typography
        variant="h6"
        color="secondary"
        className={classes.listing_text}
      >
        BROWSE BY BRAND
      </Typography>

      <Grid
        container
        spacing={1}
        className={classes.grid}
        align="center"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={3} sm={4} md={4} lg={2}>
          <CarCatergory />
        </Grid>

        <Grid item xs={3} sm={4} md={4} lg={2}>
          <CarCatergory />
        </Grid>
        <Grid item xs={3} sm={4} md={4} lg={2}>
          <CarCatergory />
        </Grid>
        <Grid item xs={3} sm={4} md={4} lg={2}>
          <CarCatergory />
        </Grid>

        <Grid item xs={3} sm={4} md={4} lg={2}>
          <CarCatergory />
        </Grid>
        <Grid item xs={3} sm={4} md={4} lg={2}>
          <CarCatergory />
        </Grid>
        <Grid item xs={3} sm={4} md={4} lg={2}>
          <CarCatergory />
        </Grid>

        <Grid item xs={3} sm={4} md={4} lg={2}>
          <CarCatergory />
        </Grid>
        <Grid item xs={3} sm={4} md={4} lg={2}>
          <CarCatergory />
        </Grid>
        <Grid item xs={3} sm={4} md={4} lg={2}>
          <CarCatergory />
        </Grid>

        <Grid item xs={3} sm={4} md={4} lg={2}>
          <CarCatergory />
        </Grid>
        <Grid item xs={3} sm={4} md={4} lg={2}>
          <CarCatergory />
        </Grid>
      </Grid>
    </div>
  );
};

export default CarScreen;
