import styled, { createGlobalStyle } from "styled-components";
import { Colors } from "common";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  white-space: pre-line;
`;

//#region main
export const Viewport = styled.div<{ width: number; height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

export const MainBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;

export const MainCompass = styled.img`
  width: 90px;
  height: 95px;

  position: absolute;

  right: 58px;
  bottom: 36px;
`;
//#endregion
