import React from "react";
import { ProgramHeaders } from "../../styles/ProgramsStyle/Programs.styled";
import ProgramsItem from "./ProgramsItem";

const Programs = () => {
  return (
    <section id="programs">
      <ProgramHeaders>
        <span className="stroke-text">explore our</span>
        <span>programs</span>
        <span className="stroke-text">to shape you</span>
      </ProgramHeaders>
      <ProgramsItem></ProgramsItem>
    </section>
  );
};

export default Programs;
