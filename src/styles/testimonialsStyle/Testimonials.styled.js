import styled from "styled-components";
import { device } from "./../theme";

export const TestiWrapper = styled.section`
  width: 100%;
  margin-bottom: 230px;
  display: flex;
  justify-content: space-between;
  @media ${device.tablet} {
    flex-direction: column;
    gap: 15rem;
    margin-bottom: 290px;
  }
  @media ${device.mobile} {
    flex-direction: column;
    gap: 15rem;
    margin-bottom: 300px;
  }
`;

export const LeftTesti = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-transform: uppercase;
  span:nth-child(1) {
    color: ${({ theme }) => theme.colors.orange};
    font-size: 1.7rem;
    font-weight: 500;
  }

  span:nth-child(2) {
    font-size: 5rem;
    font-weight: 600;
  }
  span:nth-child(3) {
    font-size: 5rem;
    font-weight: 600;
    color: #fff;
  }
`;

export const ActiveTesti = styled.div`
  position: absolute;
  top: 22rem;
  overflow: hidden;
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  text-justify: auto;
  p {
    line-height: 2;
    font-weight: 400;
    text-transform: lowercase;
    margin-bottom: 1rem;
  }
  span:nth-child(2) {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.orange};
    font-weight: 500;
  }
  span:nth-child(3) {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const RightTesti = styled.div`
  position: relative;
  flex: 1;
  height: 250px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 30rem;
  right: 40rem;
  gap: 1.1rem;
  img {
    width: 20px;
    cursor: pointer;
  }
  @media ${device.tablet} {
    bottom: -42rem;
  }
  @media ${device.mobile} {
    bottom: -40rem;
    right: 50%;
    transform: translateX(50%) !important;
  }
`;
export const SliderImage = styled.div`
  width: 24rem;
  height: 28rem;
  position: absolute;
  right: 13rem;
  top: 2.5rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  @media ${device.tablet} {
    right: 30%;
  }
  @media ${device.mobile} {
    right: 50%;
    transform: translateX(50%) !important;
  }
`;

export const BorderBox = styled(SliderImage)`
  top: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.orange};
  z-index: -2;
  right: 33rem;
  @media ${device.tablet} {
    right: 57%;
  }
  @media ${device.mobile} {
    right: 53%;
    transform: translateX(50%) !important;
  }
`;

export const FillBox = styled(SliderImage)`
  top: 3.7rem;
  background-image: ${({ theme }) => theme.colors.gradiant};
  z-index: -2;
  right: -7.3rem;

  @media ${device.tablet} {
    right: -3%;
  }
  @media ${device.mobile} {
    right: 45%;
    transform: translateX(50%) !important;
  }
`;
