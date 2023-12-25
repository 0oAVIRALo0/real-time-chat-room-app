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

const Chat = ({ enterRoom }) => {
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
    <div>
      <div>
        <h1>Welcome to: {enterRoom.toUpperCase()}</h1>
      </div>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <span>{message.user}</span>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message here..."
          value={newMsg}
          onChange={handleOnChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
