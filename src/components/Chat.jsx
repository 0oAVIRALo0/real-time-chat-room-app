import SignOut2 from "./SignOut2";
import { useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { useEffect } from "react";

const Chat = ({ enterRoom, handleSignOut }) => {
  const [newMsg, setNewMsg] = useState("");

  const messagesRef = collection(db, "messages");

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(
      messagesRef,
      where("room", "==", enterRoom),
      orderBy("createdAt")
    );
    const unsuscribe = onSnapshot(q, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsuscribe();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newMsg === "") return;

    await addDoc(messagesRef, {
      text: newMsg,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room: enterRoom,
    });

    setNewMsg("");
  };

  const handleOnChange = (event) => {
    setNewMsg(event.target.value);
  };

  return (
    <div className="chat-container">
      <div>
        <h1 className="chatname">Welcome to: {enterRoom.toUpperCase()}</h1>
      </div>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <span className="username">{message.user}:</span>
            <span className="message-text">{message.text}</span>
          </div>
        ))}
      </div>

      <div>
        <div className="form-conatiner">
          <form onSubmit={handleSubmit}>
            <input
              className="input-container-chat"
              type="text"
              placeholder="Type your message here..."
              value={newMsg}
              onChange={handleOnChange}
            />
            <button className="send-btn" type="submit">
              Send
            </button>
          </form>
        </div>
        <SignOut2
          className="chat-signout"
          handleSignOut={handleSignOut}
        ></SignOut2>
      </div>
    </div>
  );
};

export default Chat;
