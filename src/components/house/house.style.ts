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
  justify-content: center;
`;

export const HouseContainer = styled.div`
  width: 900px;
  height: 650px;

  background: radial-gradient(
      at 40% 20%,
      hsla(28, 100%, 74%, 1) 0px,
      transparent 50%
    ),
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

export const CharacterContainer = styled.div`
  width: 250px;
  height: 300px;

  background-color: hsla(0, 100%, 50%, 1);
  background-image: linear-gradient(
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

  filter: drop-shadow(0px 4px 15px rgba(90, 90, 90, 0.1));

  box-shadow: 0px 4px 15px rgba(90, 90, 90, 0.1);
  border-radius: 20px;

  position: relative;
`;

export const CharacterEditButton = styled.button`
  position: absolute;

  width: 52px;
  height: 52px;

  right: 17px;
  bottom: 15.55px;

  background: rgba(250, 250, 250, 0.5);

  box-shadow: 0px 4px 15px rgba(90, 90, 90, 0.1);
  border-radius: 20px;

  border: none;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const CharacterViewport = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
  top: 0;

  pointer-events: none;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

export const LocationButton = styled.button`
  width: 100%;
  height: 55px;

  filter: drop-shadow(0px 2px 10px rgba(90, 90, 90, 0.2));
  border-radius: 20px;

  border: none;
  padding: 0 35px;

  background: linear-gradient(91.44deg, #b5f6ff 0%, #3b99fc 102.11%);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BuyMembershipButton = styled.button`
  width: 100%;
  height: 55px;

  filter: drop-shadow(0px 2px 10px rgba(90, 90, 90, 0.2));
  border-radius: 20px;

  border: none;
  padding: 0 35px;

  background: linear-gradient(91.59deg, #ffb671 0%, #ff4747 100%);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MembersContainer = styled.div`
  width: 1300px;

  background: ${Colors.neutralWhite};

  box-shadow: 0px 1px 10px rgba(90, 90, 90, 0.15);
  border-radius: 20px;

  padding: 20px;

  display: grid;

  grid-template-columns: repeat(4, 120px);
  grid-gap: 12px;
`;

export const InfoContainer = styled.div`
  width: 350px;
  height: 650px;

  background: ${Colors.neutralWhite};

  box-shadow: 0px 4px 15px rgba(90, 90, 90, 0.1);
  border-radius: 20px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

export const InfoViewport = styled.div`
  width: 310px;
  height: 610px;
  ::-webkit-scrollbar {
    width: 8px;
    height: 400px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${Colors.neutralGray300};
    border-radius: 20px;
  }

  ::-webkit-scrollbar-track {
    background: ${Colors.neutralGray200};
    border-radius: 20px;
  }

  overflow: auto;

  left: 0;
  top: 0;
`;

export const FurnitureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const FurnitureIcon = styled.img`
  width: 60px;
  height: 60px;

  object-fit: contain;
`;

export const FurnitureSlot = styled.div`
  width: 290px;
  height: 70px;

  box-shadow: 0px 1px 10px rgba(90, 90, 90, 0.15);
  border-radius: 20px;

  padding: 20px;

  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BuyMembership = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;

  box-shadow: 0px 1px 10px rgba(90, 90, 90, 0.15);
  border-radius: 20px;

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
`;
