import styled, { createGlobalStyle } from "styled-components";
import { Colors } from "common";

export const Container = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1000; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 572px;
  height: 721px;

  padding: 12px;

  box-shadow: 0px 4px 15px rgba(90, 90, 90, 0.1);
  border-radius: 20px;

  background-color: hsla(0, 100%, 50%, 1);
  background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);

  position: relative;
`;

export const ModalViewport = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalCloseBtn = styled.button<{ width: number; height: number }>`
  position: absolute;

  right: 12px;
  top: 12px;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  padding: 0;
  border: none;
  background-color: transparent;

  z-index: 10;
`;

//#region btns
export const GoogleBtn = styled.button`
  width: 300px;
  height: 50px;

  filter: drop-shadow(0px 2px 10px rgba(90, 90, 90, 0.2));
  border-radius: 20px;

  border: none;
  padding: 0 35px;

  background: linear-gradient(91.59deg, #a4d2ff 0%, #5d3be4 100%);

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AppleBtn = styled.button`
  width: 300px;
  height: 50px;

  filter: drop-shadow(0px 2px 10px rgba(90, 90, 90, 0.2));
  border-radius: 20px;

  border: none;
  padding: 0 35px;

  background: linear-gradient(91.53deg, #ececec 0%, #111111 100%);

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WalletConnectBtn = styled.button`
  width: 300px;
  height: 50px;

  filter: drop-shadow(0px 2px 10px rgba(90, 90, 90, 0.2));
  border-radius: 20px;

  border: none;
  padding: 0 35px;

  background: linear-gradient(91.44deg, #b5f6ff 0%, #3b99fc 102.11%);

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MetamaskConnectBtn = styled.button`
  width: 300px;
  height: 50px;

  filter: drop-shadow(0px 2px 10px rgba(90, 90, 90, 0.2));
  border-radius: 20px;

  border: none;
  padding: 0 35px;

  background: linear-gradient(91.59deg, #ffb671 0%, #ff4747 100%);

  display: flex;
  flex-direction: row;
  align-items: center;
`;
//#endregion

export const Dash = styled.div`
  width: 130px;
  height: 0px;

  border: 0.5px dashed ${Colors.neutralBlack};
`;

export const EmailContainer = styled.div`
  width: 300px;
  height: 48px;

  background: rgba(255, 255, 255, 0.8);

  box-shadow: 0px 2px 10px rgba(90, 90, 90, 0.2);
  border-radius: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SendBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 44px;
  height: 36px;

  background-color: ${Colors.brand};
  border-radius: 20px;

  padding: 0;
  border: none;

  :disabled {
    background-color: ${Colors.neutralGray300};
  }
`;
