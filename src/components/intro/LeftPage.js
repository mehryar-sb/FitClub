import React, { useState } from "react";
import {
  LeftWrapper,
  Details,
  Boxes,
  Box,
  ButtunsWrapper,
  DropDown,
} from "./../../styles/introStyles/WelcomePage.styled";
import Logo from "../../img/logo.png";
import Calories from "../../img/calories.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";
const LeftPage = () => {
  const transition = { type: "tween", duration: 2 };
  const [show, setShow] = useState(false);
  const showHandler = function () {
    setShow(!show);
  };
  return (
    <LeftWrapper>
      <header>
        <img src={Logo} alt="" />
        <nav>
          <ul className="nav">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#programs">Program</a>
            </li>
            <li>
              <a href="#us">Why us</a>
            </li>
            <li>
              <a href="#plans">Plans</a>
            </li>
            <li>
              <a href="#testi">Testimonials</a>
            </li>
          </ul>
        </nav>

        <DropDown>
          <li>
            <svg
              onClick={showHandler}
              style={{ width: "25px", height: "25px", color: "#fff" }}
              fill="#fff"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </li>
          {show && (
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#programs">Program</a>
              </li>
              <li>
                <a href="#us">Why us</a>
              </li>
              <li>
                <a href="#plans">Plans</a>
              </li>
              <li>
                <a href="#testi">Testimonials</a>
              </li>
            </ul>
          )}
        </DropDown>
      </header>

      <div className="ad">
        <span>the best fitness club in the town</span>
        <motion.div
          initial={{ left: "21rem" }}
          whileInView={{ left: "1rem" }}
          transition={{ ...transition, delay: 0.3 }}></motion.div>
      </div>

      <Details mt="5px">
        <span className="stroke-text">shape</span>
        <span>your</span>
      </Details>
      <Details>
        <span>ideal body</span>
      </Details>
      <div className="text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          molestiae eos maiores officia voluptatum odio? Odit natus atque
          similique sequi.
        </p>
      </div>

      <Boxes>
        <Box>
          <span>
            <CountUp end={140} start={100} duration={3.5} prefix="+" />
          </span>
          <span>expert coachs</span>
        </Box>
        <Box>
          <span>
            <CountUp end={978} start={800} duration={3.5} prefix="+" />
          </span>
          <span>members joined</span>
        </Box>
        <Box>
          <span>
            <CountUp end={50} start={0} duration={3.5} prefix="+" />
          </span>
          <span>fitness programs</span>
        </Box>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={transition}
          className="calories">
          <div>
            <img src={Calories} alt="" />
          </div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
        </motion.div>
      </Boxes>
      <ButtunsWrapper>
        <button>Get Started</button>
        <button>Learn More</button>
      </ButtunsWrapper>
    </LeftWrapper>
  );
};

export default LeftPage;
