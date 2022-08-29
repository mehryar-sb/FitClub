import styled from "styled-components";
import { device } from "./../theme";

export const ProgramHeaders = styled.div`
  width: 90%;
  margin: 100px auto 20px auto;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 600;
  font-style: italic;
  color: #fff;
  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProgramList = styled.div`
  margin-bottom: 80px;
  display: flex;
  gap: 1.5rem;
  padding: 0 2rem 0 0;
  .box {
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray};

    height: 220px;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;

    cursor: pointer;
    &:hover {
      background-image: ${({ theme }) => theme.colors.gradiant};
    }
    svg {
      fill: #fff;
      width: 30px;
      height: 30px;
    }
    span {
      font-size: 1.5rem;
      font-weight: 500;
    }
    p {
      font-size: 1.3rem;
      font-weight: 400;
    }
    div {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      img {
        width: 15px;
        height: 13.5px;
      }
    }
  }
  @media ${device.mobile} {
    flex-direction: column;
  }
`;
