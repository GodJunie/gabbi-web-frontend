import Logo from "img/icons/gabbi_logo.svg";
import LogoTypo from "img/icons/gabbi_logo_typo.svg";
import Profile from "img/icons/profile.svg";

import Close from "img/icons/close.svg";
import Mail from "img/icons/mail.svg";
import Send from "img/icons/arrow_right.svg";
import Link from "img/icons/link.svg";
import Copy from "img/icons/copy.svg";
import Edit from "img/icons/edit.svg";
import CheckWhite from "img/icons/check_white.svg";
import Back from "img/icons/back.svg";

export const Icons = {
  Logo,
  LogoTypo,
  Profile,
  Close,
  Mail,
  Send,
  Link,
  Copy,
  Edit,
  CheckWhite,
  Back,
};

import Google from "img/icons/google_icon.svg";
import Apple from "img/icons/apple_icon.svg";
import WalletConnect from "img/icons/wallet_connect_icon.svg";
import Metamask from "img/icons/metamask_icon.svg";
import Twitter from "img/icons/twitter.svg";
import Discord from "img/icons/discord.svg";
import Instagram from "img/icons/instagram.svg";

export const SocialIcons = {
  Google,
  Apple,
  WalletConnect,
  Metamask,
  Twitter,
  Discord,
  Instagram,
};

import Background from "img/main/background.png";
import Compass from "img/main/compass.png";

export const MainImages = {
  Background,
  Compass,
};

import Polygon from "img/icons/polygon.svg";

export const ChainIcons = {
  Polygon,
};

import BodyOn from "img/customize/body_on.png";
import BodyOff from "img/customize/body_off.png";
import EyesOn from "img/customize/eyes_on.png";
import EyesOff from "img/customize/eyes_off.png";
import ClothOn from "img/customize/cloth_on.png";
import ClothOff from "img/customize/cloth_off.png";
import HeadOn from "img/customize/head_on.png";
import HeadOff from "img/customize/head_off.png";
import FaceOn from "img/customize/face_on.png";
import FaceOff from "img/customize/face_off.png";

export const CustomizeTabIcons: {
  [key in CharacterParts]: {
    on: "*png";
    off: "*png";
  };
} = {
  body: {
    on: BodyOn,
    off: BodyOff,
  },
  eyes: {
    on: EyesOn,
    off: EyesOff,
  },
  cloth: {
    on: ClothOn,
    off: ClothOff,
  },
  head: {
    on: HeadOn,
    off: HeadOff,
  },
  face: {
    on: FaceOn,
    off: FaceOff,
  },
};
