import React from "react";
import {
  HealthBox,
  HeroImgWrapper,
  RightWrapper,
} from "../../styles/introStyles/WelcomePage.styled";
import Heart from "../../img/heart.png";
import Hero from "../../img/hero.png";
import HeroBack from "../../img/hero_image_back.png";
import { motion } from "framer-motion";
const RightPage = () => {
  const transition = { type: "spring", duration: 2.5 };
  return (
    <RightWrapper>
      <div className="join">
        <button>join now</button>
      </div>
      <HealthBox
        as={motion.div}
        initial={{ right: "-2rem", opacity: 0 }}
        whileInView={{ right: "4rem", opacity: 1 }}
        transition={transition}>
        <div>
          <img src={Heart} alt="" />
        </div>
        <span>Heart Rate</span>
        <span>116 bpm</span>
      </HealthBox>
      <HeroImgWrapper>
        <img src={Hero} alt="" />
        <motion.img
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ right: 300, opacity: 1 }}
          transition={transition}
          src={HeroBack}
          alt=""
        />
      </HeroImgWrapper>
    </RightWrapper>
  );
};

export default RightPage;
