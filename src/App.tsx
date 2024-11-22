import { useState } from "react";
import "./App.css";
import { Login } from "./page/Login/Login";
import { UserProvider } from "./context/User";

function App() {
  const [userStatus, setUserStatus] = useState(false);

  return <UserProvider>{!userStatus ? <Login onChange={setUserStatus}/> : <></>}</UserProvider>;
}

export default App;
