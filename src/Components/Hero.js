import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hero_Wrapper: {
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  SearchInput: {
    border: "none",
    width: "55%",
    padding: "20px",
    outlineWidth: "0",
  },
  SearchButton: {
    height: "120%",
    marginLeft: "0.2rem",
    marginTop: "0.5rem",
    padding: "1rem",
    color: "#fff",
    backgroundColor: "rgb(77, 140, 223)",
  },
}));

const Hero = ({ image }) => {
  const classes = useStyles();
  return (
    <>
      <Box
        style={{
          backgroundImage: `url(
      ${image}
    )`,
        }}
        className={classes.hero_Wrapper}
      >
        <Box>
          <div className="search__banner">
            <input
              className={classes.SearchInput}
              type="text"
              placeholder="Search"
            />
            <Button className={classes.SearchButton}>Search</Button>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
