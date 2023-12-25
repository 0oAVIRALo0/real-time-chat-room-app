import { useState } from "react";

const Room = ({ setRoomValue }) => {
  const [roomName, setRoomName] = useState("");

  const handleOnClick = () => {
    setRoomValue(roomName);
  };

  const handleOnChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div>
      <label>Enter Room Name:</label>
      <input type="text" value={roomName} onChange={handleOnChange} />
      <button onClick={handleOnClick}>Enter</button>
    </div>
  );
};

export default Room;
