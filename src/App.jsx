import SignIn from "./components/SignIn";
import Room from "./components/Room";
import Chat from "./components/Chat";
import "./App.css";
import { useState } from "react";
import { signOut } from "firebase/auth";
import Cookies from "universal-cookie";
import { auth } from "./firebase-config";
import "bootstrap/dist/css/bootstrap.min.css";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [enterRoom, setEnterRoom] = useState(null);

  const handleSetRoomValue = (roomName) => {
    setEnterRoom(roomName);
  };

  const handleSignOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setEnterRoom(null);
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
        <Chat enterRoom={enterRoom} handleSignOut={handleSignOut}></Chat>
      </div>
    );
  } else {
    return (
      <div>
        <Room
          setRoomValue={handleSetRoomValue}
          handleSignOut={handleSignOut}
        ></Room>
      </div>
    );
  }
}

export default App;
