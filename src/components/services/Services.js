import React from "react";
import {
  Images,
  PartnerBox,
  PhraseWrapper,
  ServiceWrapper,
} from "../../styles/servicesStyle/Services.styled";
import Img1 from "../../img/img1.png";
import Img2 from "../../img/img2.png";
import Img3 from "../../img/img3.png";
import Img4 from "../../img/img4.png";
import tick from "../../img/tick.png";
import { ServiceData } from "./serviceData";
import nb from "../../img/nb.png";
import addidas from "../../img/adidas.png";
import nike from "../../img/nike.png";

const Services = () => {
  return (
    <ServiceWrapper id="us">
      <Images>
        <img src={Img1} alt="" />
        <img src={Img2} alt="" />
        <img src={Img3} alt="" />
        <img src={Img4} alt="" />
      </Images>
      <PhraseWrapper>
        <div className="title">
          <span>some reasons</span>
          <div>
            <span className="stroke-text">why</span>
            <span>choose us?</span>
          </div>
        </div>

        <ul>
          {ServiceData.map((data) => {
            return (
              <li key={data.id}>
                <img src={tick} alt="" />
                <span>{data.text}</span>
              </li>
            );
          })}
        </ul>
        <span className="partners">our partners</span>
        <PartnerBox>
          <img src={nb} alt="" />
          <img src={addidas} alt="" />
          <img src={nike} alt="" />
        </PartnerBox>
      </PhraseWrapper>
    </ServiceWrapper>
  );
};

export default Services;
