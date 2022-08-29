import styled from "styled-components";
import { device } from "./../theme";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  margin-bottom: 50px;
  @media ${device.mobile} {
    margin-bottom: 10px;
  }
`;

export const StartFooter = styled.div`
  display: flex;
  justify-content: start;
  hr {
    width: 16rem;
    height: 0.5rem;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.orange};
    border: none;
    border-radius: 40%;
    @media ${device.mobile} {
      margin: 0 auto;
    }
  }
  div {
    width: 50%;
    font-size: 5rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    @media ${device.mobile} {
      width: 80%;
    }
  }
  @media ${device.mobile} {
    justify-content: center;
    text-align: center;
  }
`;
export const EndFooter = styled.div`
  position: relative;
  hr {
    width: 95%;
    margin: 0 auto;
  }
  div:nth-child(2) {
    width: 20%;
    margin: 0 auto;
    display: flex;
    gap: 2.5rem;
    justify-content: center;
    margin-top: 150px;
    img {
      width: 15%;
      height: 15%;
      cursor: pointer;
      @media ${device.mobile} {
        width: 50%;
        height: 50%;
      }
    }
    @media ${device.mobile} {
      margin-top: 50px;
    }
  }
  div:nth-child(3) {
    width: 20%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-top: 80px;
    img {
      width: 70%;
      height: 70%;
      @media ${device.mobile} {
        width: 190%;
        height: 190%;
      }
    }
    @media ${device.mobile} {
      margin-top: 30px;
    }
  }
`;
