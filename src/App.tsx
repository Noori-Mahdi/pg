import { useState } from "react";
import "./App.css";
import { Login } from "./page/Login/Login";
import { UserProvider } from "./context/User";
import { MainPage } from "./page/MainPage/MainPage";

function App() {
  const [userStatus, setUserStatus] = useState(false);

  return <UserProvider>{userStatus ? <Login onChange={setUserStatus}/> :<MainPage/>}</UserProvider>;
}

export default App;
