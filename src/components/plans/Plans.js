import React from "react";
import { PlansWrapper } from "../../styles/plansStyle/Plans.styled";
import PlansHeader from "./PlansHeader";
import PlansBody from "./PlansBody";
import { BodyrWrapper } from "../../styles/plansStyle/Plans.styled";
import { plansData } from "./plansData";
import { Blurdiv } from "../../styles/helperStyle/Blur";

const Plans = () => {
  return (
    <PlansWrapper>
      <Blurdiv w="40rem" h="50rem" l="5rem" t="50%" y="true"></Blurdiv>
      <Blurdiv w="40rem" h="50rem" r="5rem" t="50%" y="true"></Blurdiv>
      <PlansHeader></PlansHeader>
      <BodyrWrapper>
        {plansData.map((data, i) => {
          return (
            <PlansBody
              key={i}
              id={i}
              icon={data.icon}
              name={data.name}
              price={data.price}
              features={data.features}></PlansBody>
          );
        })}
      </BodyrWrapper>
    </PlansWrapper>
  );
};

export default Plans;
