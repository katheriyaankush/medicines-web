import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Email id: leolence@gmail.com
          <br/>
          Contact: 9876431100
        </span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
