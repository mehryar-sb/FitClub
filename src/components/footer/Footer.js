import React from "react";
import { FooterWrapper } from "../../styles/footerStyle/Footer.styled";
import FooterDown from "./FooterDown";
import FooterUp from "./FooterUp";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterUp></FooterUp>
      <FooterDown></FooterDown>
    </FooterWrapper>
  );
};

export default Footer;
