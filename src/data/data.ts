import { faHouse, faUser, faGear, faPowerOff } from "@fortawesome/free-solid-svg-icons";

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
