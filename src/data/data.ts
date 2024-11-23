import {
  faHouse,
  faUser,
  faGear,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import profile from "../assets/img/profile.jpeg";
import friend1 from "../assets/img/friend1.jpeg";
import friend2 from "../assets/img/friend2.jpeg";
import friend3 from "../assets/img/friend3.jpeg";
import friend4 from "../assets/img/friend4.jpeg";

export const loginArray = [
  { text: "registration", active: true },
  { text: "login", active: false },
];

export const pagesInfoArray = [
  { pageName: "home", iconName: faHouse, subPage: null },
  { pageName: "profile", iconName: faUser, subPage: null },
  { pageName: "setting", iconName: faGear, subPage: null },
  { pageName: "logout", iconName: faPowerOff, subPage: null },
];

export const defualtUser = {
  userName: "overlord",
  level: { lvl: 74, pro: 35 },
  img: profile,
  Current: { coin: 41800, crown: 102 },
};

export const friendList = [
  {
    userName: "PixelQueen",
    userStatus: 1,
    userImg: friend1,
    inGame: "battelfild 1",
    lvl: 66,
  },
  {
    userName: "ShadowBlaze",
    userStatus: 2,
    userImg: friend2,
    inGame: null,
    lvl: 63,
  },
  {
    userName: "NebulaKnight",
    userStatus: 2,
    userImg: friend4,
    inGame: null,
    lvl: 15,
  },
  {
    userName: "IronWolf",
    userStatus: 3,
    userImg: friend3,
    inGame: null,
    lvl: 109,
  },
];
