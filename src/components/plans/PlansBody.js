import React from "react";
import { BodyDetails, PlansButton } from "../../styles/plansStyle/Plans.styled";
import tick from "../../img/whiteTick.png";
const PlansBody = (props) => {
  const { icon, name, price, features, id } = props;
  return (
    <BodyDetails id={id}>
      {icon}
      <span>{name}</span>
      <span>${price}</span>
      <div className="container">
        {features.map((fe) => {
          return (
            <div key={fe} className="features">
              <img src={tick} alt="" />
              <span>{fe}</span>
            </div>
          );
        })}
      </div>
      <span>See more benefits {"->"} </span>
      <PlansButton id={id}>Join now</PlansButton>
    </BodyDetails>
  );
};

export default PlansBody;
