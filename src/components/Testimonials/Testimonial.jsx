import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {


  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>About Us </span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
     <p style={{color: 'gray'}}>
     <b style={{color: 'blue' , fontSize: "30px"}}>Company Name: Leoleance Pharmaceutical  </b>
     <br/>
     <br/>
     <b style={{color: 'black'}}>Mission:</b> Our mission is to improve global health outcomes by discovering, developing, and delivering innovative and life-saving pharmaceutical products that address unmet medical needs.
     <br/>
     <br/>
<b style={{color: 'black'}}>Vision:</b> Our vision is to be a leading global healthcare company dedicated to advancing medical science, improving patient care, and making a positive impact on communities worldwide.
<br/><br/>

<b style={{color: 'black'}}>Core Values:</b> We are guided by the following core values that define our culture and shape our business practices:
<br/><br/>
<b style={{color: 'black'}}>Patient-Centricity:</b> We place patients at the center of everything we do. Their health, well-being, and satisfaction are our top priorities, and we strive to develop medications that meet their needs and improve their lives.
<br/><br/>
<b style={{color: 'black'}}>Scientific Excellence:</b> We uphold the highest standards of scientific rigor and innovation. Our commitment to advancing medical science and pushing the boundaries of knowledge drives our research and development efforts.
<br/><br/>
<b style={{color: 'black'}}>Integrity and Ethics:</b> We conduct our business with the utmost integrity, adhering to ethical principles and regulatory requirements. We prioritize transparency, honesty, and accountability in all our interactions, ensuring the trust and confidence of patients, healthcare professionals, and stakeholders.
<br/><br/>
<b style={{color: 'black'}}>Collaboration and Partnerships: </b> We believe in the power of collaboration. We actively seek partnerships with healthcare professionals, academic institutions, research organizations, and patient advocacy groups to foster knowledge exchange, leverage expertise, and deliver meaningful healthcare solutions.
<br/><br/>
<b style={{color: 'black'}}>Access to Medicines:</b> We are dedicated to ensuring access to our medicines for patients worldwide. We strive to make our products affordable, available, and accessible, particularly in underserved communities and developing countries.
     </p>
    </div>
  );
};

export default Testimonial;
