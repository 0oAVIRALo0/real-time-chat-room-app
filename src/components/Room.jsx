import SignOut from "./SignOut";
import { useState } from "react";

const Room = ({ setRoomValue, handleSignOut }) => {
  const [roomName, setRoomName] = useState("");

  const handleOnClick = () => {
    setRoomValue(roomName);
  };

  const handleOnChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div className="room-container">
      <label>Enter Room Name:</label>
      <input
        className="input-container"
        type="text"
        value={roomName}
        onChange={handleOnChange}
      />
      <div className="btn-container">
        <button className="enter-btn" onClick={handleOnClick}>
          Enter
        </button>
        <SignOut handleSignOut={handleSignOut}></SignOut>
      </div>
    </div>
  );
};

export default Room;
