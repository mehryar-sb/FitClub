import styled from "styled-components";
import { ProgramHeaders } from "../ProgramsStyle/Programs.styled";
import { device } from "./../theme";
export const PlansWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  margin-bottom: 60px;
  @media ${device.mobile} {
    flex-direction: column;
  }
`;
export const HeaderWrapper = styled(ProgramHeaders)`
  margin: 0 auto 20px auto;
`;
export const BodyrWrapper = styled.div`
  display: flex;
  gap: 2.8rem;
  margin: 25px auto;
  width: 75%;
  @media ${device.mobile} {
    flex-direction: column;
    width: 80%;
    margin: 0 auto 5px auto;
  }
  @media ${device.tablet} {
    width: 95%;
  }
`;

export const BodyDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
  color: #fff;
  padding: 1.5rem 2rem;

  background-image: ${(props) =>
    props.id === 1 ? ({ theme }) => theme.colors.gradiant : ""};
  background-color: ${({ theme }) => theme.colors.gray};
  transform: scale(${(props) => (props.id === 1 ? "1.1" : "1")});
  svg {
    fill: ${(props) =>
      props.id === 1 ? "#fff" : ({ theme }) => theme.colors.orange};
    width: 35px;
    height: 45px;
  }
  span:nth-of-type(1) {
    font-size: 1.7rem;
    font-weight: 600;
  }
  span:nth-of-type(2) {
    font-size: 4.5rem;
    font-weight: 600;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  .features {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
    }
    span {
      font-size: 1.5rem;
    }
  }
  span:nth-child(5) {
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      filter: brightness(0.9);
    }
  }
  @media ${device.mobile} {
    width: 90%;
    transform: scale(1) !important;
    padding: 4rem 2rem;
  }
`;

export const PlansButton = styled.button`
  padding: 1.2rem 3rem;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 600;
  color: ${(props) =>
    props.id === 1 ? (props) => props.theme.colors.orange : ""};
`;
