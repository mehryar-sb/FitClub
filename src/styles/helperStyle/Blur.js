import styled from "styled-components";
import { device } from "./../theme";

export const Blurdiv = styled.div`
  background: rgb(253, 120, 43, 0.69);
  position: absolute;
  border-radius: 50%;
  filter: blur(150px);
  z-index: -9;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  top: ${(props) => props.t};
  left: ${(props) => props.l};
  right: ${(props) => props.r};
  transform: translateY(${(props) => (props.y ? "-50%" : "")});
  transform: translateX(${(props) => (props.x ? "50%" : "")});

  @media ${device.mobile} {
    height: ${(props) => +props.h.slice(0, 2) / 10};
  }
`;
