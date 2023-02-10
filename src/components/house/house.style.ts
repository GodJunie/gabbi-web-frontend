import styled, { createGlobalStyle } from "styled-components";
import { Colors } from "common";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  white-space: pre-line;
  min-height: 100vh;

  padding: 80px 0 0 0;
`;

export const Viewport = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HouseContainer = styled.div`
  width: 1000px;
  height: 650px;

  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);

  box-shadow: 0px 4px 15px rgba(90, 90, 90, 0.1);
  border-radius: 20px;

  position: relative;
`;

export const HouseImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  z-index: 0;

  object-fit: contain;
`;

export const HouseExterior = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  z-index: 10;
  object-fit: contain;

  :hover {
    opacity: 0.1;
  }
`;

export const HouseInterior = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  z-index: 5;
  object-fit: contain;
`;
