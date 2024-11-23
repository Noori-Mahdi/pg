import { faHouse, faUser, faGear, faPowerOff, faCoins, faCrown} from "@fortawesome/free-solid-svg-icons";
import profile from '../assets/img/profile.jpeg'
export const loginArray = [
  { text: "registration", active: true },
  { text: "login", active: false },
];

export const pagesInfoArray = [
    {pageName:'home', iconName:faHouse,subPage:null},
    {pageName:'profile', iconName:faUser,subPage:null},
    {pageName:'setting', iconName:faGear,subPage:null},
    {pageName:'logout', iconName:faPowerOff,subPage:null},
];

export const defualtUser ={
  userName:'overlord',
  level: {lvl:74,pro:35},
  img: profile,
  Current: {coin:41800,crown:102}
}
