import styled from "styled-components";
import { device } from "../theme";

// @media ${device.mobile} {

// }

// TODO : Welcome PAGE LAYOUT
export const PagesWrapper = styled.div`
  width: 100%;
  display: flex;
  @media ${device.mobile} {
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
  }
`;

// TODO : LEFT PAGE LAYOUT
export const LeftWrapper = styled.div`
  flex: 3;
  padding: 2rem 2rem 0 0;
  display: flex;
  flex-direction: column;
  img {
    width: 10re;
    height: 5rem;
  }
  header {
    display: flex;
    width: full;
    justify-content: space-between;
    align-items: center;
  }

  .nav {
    display: flex;
    gap: 1.5rem;

    font-size: 1.7rem;
    font-weight: 500;

    li {
      cursor: pointer;
      list-style: none;
      z-index: 2;

      a {
        text-decoration: none;
        color: #fff;
        &:hover {
          color: ${({ theme }) => theme.colors.orange};
        }
      }
    }
    @media ${device.mobile} {
      display: none;
    }
  }

  .ad {
    width: fit-content;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.appColor};
    border-radius: 3rem;
    margin-top: 80px;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #fff;
    font-weight: 600;
    padding: 0 1.5rem;
    position: relative;
    text-transform: uppercase;
    div {
      width: 25%;
      height: 80%;
      background-color: ${({ theme }) => theme.colors.orange};
      border-radius: 3rem;
      position: absolute;
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
    }
    span {
      z-index: 2;
    }
    @media ${device.mobile} {
      margin: 2rem auto;
      align-items: center;
    }
  }

  .text {
    font-size: 1.3rem;
    color: #fff;
    width: 70%;
    font-weight: 500;

    @media ${device.mobile} {
      margin: 0 auto;
    }
  }
`;

export const DropDown = styled.ul`
  display: none;
  position: relative;
  padding: 0;
  z-index: 100;

  li {
    list-style: none;
  }
  ul {
    position: absolute;
    right: 0;
    width: 14rem;
    height: 18.9rem;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    top: 100%;
    border-radius: 1.1rem;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    font-size: 2rem;
    font-weight: 500;
    gap: 1.5rem;
    a {
      text-decoration: none;
      color: #fff;
    }
  }

  @media ${device.mobile} {
    display: flex;
  }
`;

export const Details = styled.div`
  font-size: 7rem;
  margin-top: ${(props) => props.mt};
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;

  span:nth-of-type(1) {
    margin-right: 20px;
  }

  @media ${device.mobile} {
    display: flex;
    justify-content: center;
  }
`;

export const Boxes = styled.div`
  display: flex;
  width: 80%;
  margin-top: 10px;
  align-items: center;
  justify-content: end;
  .calories {
    flex: 1;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.caloryCard};
    border-radius: 0.5rem;
    display: grid;
    grid-template-columns: 5rem 1fr;
    align-items: center;
    justify-items: center;
    div {
      grid-row: 1 / span 2;
      justify-self: start;
      img {
        width: full;
        height: full;
      }
    }
    & > span:nth-of-type(1) {
      color: ${({ theme }) => theme.colors.gray};
      font-size: 1.5rem;
      font-weight: 600;
    }
    & > span:nth-of-type(2) {
      color: #fff;
      font-size: 2rem;
    }
  }
  @media ${device.mobile} {
    justify-content: space-between;
    width: 100%;
    gap: 3rem;
  }
`;
export const Box = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  font-weight: 700;
  & > span:nth-of-type(1) {
    color: #fff;
    font-size: 3rem;
  }

  & > span:nth-of-type(2) {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`;

export const ButtunsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 10px;
  button {
    padding: 7px 20px;
    border: none;
    font-size: 1.5rem;
    font-weight: 500;
    color: #fff;
    cursor: pointer;

    &:nth-child(1) {
      background-color: ${({ theme }) => theme.colors.orange};
    }
    &:nth-child(2) {
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.colors.orange};
    }
    &:hover {
      filter: brightness(0.9);
      filter: drop-shadow(1);
    }
  }
  @media ${device.mobile} {
    justify-content: center;
  }
`;

// TODO : RIGHT PAGE LAYOUT
export const RightWrapper = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.orange};
  padding: 2rem 1rem;
  position: relative;
  height: 547px;
  .join {
    display: flex;
    width: full;
    justify-content: end;
    button {
      outline: none;
      font-size: 1.5rem;
      font-weight: 600;
      border: none;
      background-color: #fff;
      padding: 0.5rem 1.5rem;
      cursor: pointer;
      @media ${device.mobile} {
        display: none;
      }
      &:hover {
        filter: brightness(0.9);
      }
    }
  }
  @media ${device.mobile} {
    width: 100%;
    background-color: transparent;
    margin-bottom: 140px;
  }
`;

export const HeroImgWrapper = styled.div`
  position: relative;

  img:nth-of-type(1) {
    position: absolute;
    width: 67rem;
    height: 41rem;
    top: 105px;
    right: 7.6rem;
    z-index: 2;
    @media ${device.tablet} {
      right: -5rem;
      top: 20rem;
    }
    @media ${device.mobile} {
      width: 60rem;
      height: 30rem;
      right: 10%;
      top: 0;
    }
  }

  img:nth-of-type(2) {
    position: absolute;
    width: 20rem;
    height: 35rem;
    right: 25rem;
    top: 3rem;
    @media ${device.mobile} {
      display: none;
    }

    @media ${device.tablet} {
      display: none;
    }
  }
`;

export const HealthBox = styled.div`
  width: 12rem;
  height: 13rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.appColor};
  position: absolute;
  top: 90px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: start;
  img {
    width: 45px;
    height: 40px;
  }

  font-weight: 500;
  & > span:nth-of-type(1) {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1.7rem;
  }
  & > span:nth-of-type(2) {
    color: #fff;
    font-size: 2.5rem;
  }
  @media ${device.mobile} {
    display: none;
  }
`;
