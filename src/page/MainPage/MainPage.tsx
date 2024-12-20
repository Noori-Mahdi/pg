import { HorizontalNavbar } from "../../components/HorizontalNavbar/HorizontalNavbar";
import { VerticalNavBar } from "../../components/VerticalNavBar/VerticalNavBar";
import { Home } from "../Home/Home";

export const MainPage = () => {
  return (
    <div className="flex flex-col bg-dark w-screen h-screen p-2">
      <div className="w-full">
        <HorizontalNavbar />
      </div>
      <div className="flex w-full justify-between flex-grow">
        <VerticalNavBar type="navBar"/>
        <VerticalNavBar type="friendList"/>
        {/* <Home /> */}
      </div>
    </div>
  );
};
