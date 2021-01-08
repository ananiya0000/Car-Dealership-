import React from "react";
import "./Footer.css";
import { Button } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <h1>Jaido.net</h1>
        <p className="hrlooklike">---------------------</p>
        <p>Lorem epsuen asd asdsa</p>
        <div className="btn">
          <Button>Home</Button>
          <Button>About</Button>
          <Button>Cars</Button>
          <Button>House</Button>
        </div>
        <div className="footer__icons">
          <div className="facebook__icons">
            <FacebookIcon />
          </div>
          <div className="instagram__icons">
            <InstagramIcon />
          </div>
          <div className="twitter__icons">
            <TwitterIcon />
          </div>
        </div>
        <p className="copy">&copy; 2020 All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
