import { NavBar } from "../../components/NavBar/NavBar";
import { Home } from "../Home/Home";

export const MainPage = () => {
    return ( 
        <div className="flex">
        <NavBar />
        <Home />
        </div>
     );
}
