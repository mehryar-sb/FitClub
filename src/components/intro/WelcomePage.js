import React from "react";
import { Blurdiv } from "../../styles/helperStyle/Blur";
import { PagesWrapper } from "../../styles/introStyles/WelcomePage.styled";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";

const WelcomePage = () => {
  return (
    <PagesWrapper>
      <Blurdiv w="32rem" h="47rem" l="0"></Blurdiv>
      <LeftPage></LeftPage>
      <RightPage></RightPage>
    </PagesWrapper>
  );
};

export default WelcomePage;
