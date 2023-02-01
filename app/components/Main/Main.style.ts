import styled, { createGlobalStyle } from 'styled-components';
import { Colors } from 'common';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100vw;
  white-space: pre-line;
`;

//#region main
export const MainViewport = styled.div<{ width: number; height: number }>`
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
//#endregion

//#region about description
export const MainAboutDescription = styled.div`
  height: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${Colors.neutralWhite};
`;

export const MainAboutDescriptionViewport = styled.div<{ width: number }>`
  width: ${(props) => props.width}px;
  height: 100%;
  padding: 0 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//#endregion

//#region about
export const MainAbout = styled.div<{ height: number }>`
  height: ${(props) => props.height}px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  position: relative;

  background-color: transparent;
  background: radial-gradient(48.82% 56.51% at 50% 50.06%, rgba(38, 47, 53, 0.64) 0%, rgba(38, 47, 53, 0.72) 100%);
`;

export const MainAboutViewport = styled.div<{ width: number }>`
  width: ${(props) => props.width}px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainAboutImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  position: absolute;
  z-index: -1;
`;
//#endregion

//#region event
export const MainEvent = styled.div<{ height: number }>`
  height: ${(props) => props.height}px;

  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${Colors.secondary300};
`;

export const MainEventViewport = styled.div<{ width: number; isMobile: boolean }>`
  width: ${(props) => props.width}px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  padding: 0 ${(props) => (props.isMobile ? 32 : 64)}px;
`;
//#endregion

//#region challenge
export const MainChallenge = styled.div<{ height: number }>`
  height: ${(props) => props.height}px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${Colors.secondary400};
`;

export const MainChallengeViewport = styled.div<{ width: number; isMobile: boolean }>`
  width: ${(props) => props.width}px;
  height: 100%;

  padding: 0 ${(props) => (props.isMobile ? 32 : 64)}px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

export const MainChallengeProcess = styled.div<{ width: number; height: number; colGap: number }>`
  display: grid;

  grid-template-columns: ${(props) => props.width}px ${(props) => props.width}px ${(props) => props.width}px;
  grid-template-rows: 22px ${(props) => props.height}px;
  grid-row-gap: 20px;
  grid-column-gap: ${(props) => props.colGap}px;
`;
//#endregion

//#region agit
export const MainAgit = styled.div<{ height: number }>`
  width: 100%;
  height: ${(props) => props.height}px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${Colors.secondary200};
`;

export const MainAgitViewport = styled.div<{ width: number; isMobile: boolean }>`
  width: ${(props) => props.width}px;
  height: 100%;

  padding: 0 ${(props) => (props.isMobile ? 32 : 64)}px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

//#endregion

//#region blog description
export const MainBlogDescription = styled.div<{ height: number }>`
  height: ${(props) => props.height}px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  overflow: visible;

  background-color: ${Colors.secondary200};

  z-index: 1;
`;

export const MainBlogDescriptionViewport = styled.div<{ width: number; isMobile: boolean }>`
  width: ${(props) => props.width}px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  padding: 0 ${(props) => (props.isMobile ? 32 : 64)}px;

  z-index: 1;
`;

export const MainBlogDescriptionImage = styled.img<{ width: number; height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  object-fit: ${(props) => (props.width > 2200 ? 'fill' : 'cover')};
  position: absolute;

  bottom: -100px;
`;
//#endregion

//#region blog
export const MainBlog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${Colors.secondary100};

  z-index: 5;
`;

export const MainBlogViewport = styled.div<{ width: number; isMobile: boolean }>`
  width: ${(props) => props.width}px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  padding: 0 ${(props) => (props.isMobile ? 32 : 64)}px;
`;
//#endregion

//#region membership
export const MainMembership = styled.div<{ height: number }>`
  height: ${(props) => props.height}px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  position: relative;

  background-color: transparent;
  background: rgba(38, 47, 53, 0.2);
`;

export const MainMembershipViewport = styled.div<{ width: number; isMobile: boolean }>`
  width: ${(props) => props.width}px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  padding: 0 ${(props) => (props.isMobile ? 32 : 64)}px;
`;

export const MainMembershipImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  position: absolute;
  z-index: -1;
`;
//#endregion
