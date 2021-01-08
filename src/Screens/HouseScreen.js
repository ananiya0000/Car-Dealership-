import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

//components
import Hero from "../Components/Hero";
import House from "../Components/House";
import HouseCategory from "../Components/HouseCategory";

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

const HouseScreen = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Hero image="https://www.khov.com/blog/wp-content/uploads/2019/08/Ranch-Style-Home-at-K.-Hovnanians-Four-Seasons-at-Belle-Terre.jpg" />
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

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <House />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <House />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <House />
          </Grid>

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
      </div>
    </div>
  );
};

export default HouseScreen;
