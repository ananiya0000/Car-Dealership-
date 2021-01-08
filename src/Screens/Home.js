import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

//components

import Hero from "../Components/Hero";

import House from "../Components/House";
import Car from "../Components/Car";
import HouseCategory from "../Components/HouseCategory";
import CarCatergory from "../Components/CarCategory";
/*








*/

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
function App() {
  const classes = useStyles();
  return (
    <div>
      <Hero image="https://www.contemporist.com/wp-content/uploads/2017/11/modern-house-design-large-car-garage-031117-134-01-800x533.jpg" />
      <Typography
        variant="h6"
        color="secondary"
        className={classes.listing_text}
      >
        LATEST HOUSE LISTING
      </Typography>
      {/* House Component */}

      <Grid
        container
        spacing={2}
        className={classes.grid}
        align="center"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <House />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <House />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <House />
        </Grid>
      </Grid>

      <div className={classes.viewMore}>
        <Button variant="contained" color="primary" href="#">
          View More
        </Button>
      </div>

      {/* House Listing */}

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
      </Grid>
      <Link to="/login">
        <div className={classes.viewMore}>
          <Button variant="contained" color="primary">
            View More
          </Button>
        </div>
      </Link>

      {/* BROWSE BY CATEGORY */}
      <Typography
        variant="h6"
        color="secondary"
        className={classes.listing_text}
      >
        BROWSE BY CATEGORY
      </Typography>
      <Grid
        container
        spacing={2}
        className={classes.grid}
        align="center"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <HouseCategory />
        </Grid>

        <Grid item xs={6} sm={6} md={4} lg={3}>
          <HouseCategory />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <HouseCategory />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <HouseCategory />
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
}

export default App;
