import React from "react";
import { useState } from "react";
import {
  ActiveTesti,
  BorderBox,
  FillBox,
  IconWrapper,
  LeftTesti,
  RightTesti,
  SliderImage,
  TestiWrapper,
} from "../../styles/testimonialsStyle/Testimonials.styled";
import { testimonialsData as testi } from "./testimonialsData";
import rightArrow from "../../img/rightArrow.png";
import leftArrow from "../../img/leftArrow.png";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const transition = { type: "tween", duration: 1.5 };

  const nextHandler = function () {
    setCurrent(current === testi.length - 1 ? 0 : current + 1);
  };
  const prevHandler = function () {
    setCurrent(current === 0 ? testi.length - 1 : current - 1);
  };
  return (
    <TestiWrapper id="testi">
      <LeftTesti>
        <span>testimonials</span>
        <span className="stroke-text">what they</span>
        <span>say about us</span>
        <AnimatePresence initial={false}>
          <ActiveTesti
            as={motion.div}
            key={current}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ ...transition, duration: 0.5 }}>
            <p>{testi[current].review}</p>
            <span>{testi[current].name}</span>
            {` - `}
            <span>{testi[current].status}</span>
          </ActiveTesti>
        </AnimatePresence>
      </LeftTesti>
      <RightTesti>
        <IconWrapper>
          <img onClick={prevHandler} src={leftArrow} alt="" />
          <img onClick={nextHandler} src={rightArrow} alt="" />
        </IconWrapper>
        <AnimatePresence initial={false}>
          <SliderImage
            as={motion.div}
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ ...transition, duration: 0.5 }}>
            <img src={testi[current].image} alt="" />
          </SliderImage>
        </AnimatePresence>

        <BorderBox
          as={motion.div}
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 200 }}
          transition={transition}></BorderBox>

        <FillBox
          as={motion.div}
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: -200 }}
          transition={transition}></FillBox>
      </RightTesti>
    </TestiWrapper>
  );
};

export default Testimonials;
