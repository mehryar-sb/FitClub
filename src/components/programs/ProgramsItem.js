import React from "react";
import { ProgramList } from "../../styles/ProgramsStyle/Programs.styled";
import { programsData } from "./ProgramsData";
import RightArrow from "../../img/rightArrow.png";
const ProgramsItem = () => {
  return (
    <ProgramList>
      {programsData.map((program, i) => {
        return (
          <div key={i} className="box">
            {program.image}
            <span>{program.heading}</span>
            <p>{program.details}</p>
            <div>
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        );
      })}
    </ProgramList>
  );
};

export default ProgramsItem;
