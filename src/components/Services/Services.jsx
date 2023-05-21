import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import health from "../../img/health.png";
import docLogo from "../../img/docLogo.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import medlogo from "../../img/medlogo.png";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Our Awesome</span>
        <span>Services</span>
        <span>
        At Leolence Pharmaceuticals, we offer a wide range of services 
        <br />
        aimed at delivering high-quality healthcare solutions and 
          <br />
        improving patient outcomes. 
        <br />
        </span>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={docLogo}
            heading={"Doctor Consultation"}
            detail={"We are here to provide you with professional medical guidance and support."}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={medlogo}
            heading={"Medicines"}
            detail={"We offer a comprehensive selection of medicines, including prescription drugs, over-the-counter medications, and healthcare products."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={health}
            heading={"Healthcare Devices"}
            detail={
              "We offer a range of innovative and reliable healthcare devices designed to help you monitor and manage your health effectively."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
