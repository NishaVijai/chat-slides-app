import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

export const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => doc.data());
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    console.log("Sending message:", input);
    if (!input.trim()) return;

    await addDoc(collection(db, "messages"), {
      text: input,
      sender: "user",
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <section className="chat-container">
      <h2>Chat Window</h2>
      <form action="" className="chat-form" onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
        <section className="chat-input-section">
          <label htmlFor="chat-input">
            Type your message:
          </label>
          <input id="chat-input" name="chat-input" value={input} onChange={(e) => setInput(e.target.value)} />
        </section>

        <button>Send</button>
        {/* <button type="button">Send</button> */}
        {/* <button onClick={sendMessage}>Send</button> */}
      </form>

      <h3>Chat Messages:</h3>
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className="message">
            {msg.text}
          </div>
        ))}
      </div>
    </section>
  );
};
