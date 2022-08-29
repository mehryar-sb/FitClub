import React from "react";
import github from "../../img/github.png";
import instagram from "../../img/instagram.png";
import linkdin from "../../img/linkedin.png";
import logo from "../../img/logo.png";
import { EndFooter } from "../../styles/footerStyle/Footer.styled";
import { Blurdiv } from "../../styles/helperStyle/Blur.js";
const FooterDown = () => {
  return (
    <EndFooter>
      <hr />
      <div>
        <img src={github} alt="" />
        <img src={instagram} alt="" />
        <img src={linkdin} alt="" />
      </div>
      <div>
        <img src={logo} alt="" />
      </div>
      <Blurdiv w="40rem" h="30rem" r="47%" t="0"></Blurdiv>
      <Blurdiv w="40rem" h="30rem" l="47%" t="0"></Blurdiv>
    </EndFooter>
  );
};

export default FooterDown;
