import SignIn from "./components/SignIn";
import Room from "./components/Room";
import Chat from "./components/Chat";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import Cookies from "universal-cookie";
// import SignOut from "./components/SignOut";
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [enterRoom, setEnterRoom] = useState(null);

  const handleSetRoomValue = (roomName) => {
    setEnterRoom(roomName);
  };

  if (!isAuth) {
    return (
      <div>
        <SignIn setIsAuth={setIsAuth}></SignIn>
      </div>
    );
  }

  if (enterRoom) {
    return (
      <div>
        <Chat enterRoom={enterRoom}></Chat>
      </div>
    );
  } else {
    return (
      <div>
        <Room setRoomValue={handleSetRoomValue}></Room>
      </div>
    );
  }
}

export default App;
