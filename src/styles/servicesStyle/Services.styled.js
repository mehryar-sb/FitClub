import styled from "styled-components";
import { device } from "../theme";

export const ServiceWrapper = styled.section`
  width: 100%;
  display: flex;
  gap: 2rem;
  margin-bottom: 80px;
  @media ${device.mobile} {
    flex-direction: column;
    margin-bottom: 60px;
  }
`;
export const Images = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  align-items: start;
  grid-auto-rows: 225px;
  img {
    width: 100%;
    height: 100%;
  }
  & > :nth-child(1) {
    grid-row: span 2;
    object-fit: fill;
  }
  & > :nth-child(2) {
    grid-column: 2/4;
  }
  @media ${device.mobile} {
    gap: 1.2rem;
    grid-auto-rows: 150px;
  }
`;

export const PhraseWrapper = styled.div`
  flex: 1;
  text-transform: uppercase;
  .title {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    & > span:first-child {
      color: ${({ theme }) => theme.colors.orange};
      font-size: 1.7rem;
      font-weight: 700;
    }
    div {
      font-size: 4.5rem;
      font-weight: 700;

      & > span:first-child {
        margin-right: 1.2rem;
      }
      & > span:last-child {
        color: #fff;
      }
    }
  }
  ul {
    margin: 20px 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    li {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 1.5rem;
      font-size: 2rem;
      font-weight: 600;
      color: #fff;
      img {
        width: 35px;
      }
    }
  }
  .partners {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const PartnerBox = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 1.4rem;
  img {
    width: 40px;
  }
  @media ${device.mobile} {
    justify-content: center;
  }
`;
