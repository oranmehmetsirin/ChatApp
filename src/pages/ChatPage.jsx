import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useEffect, useState } from "react";
import Message from "../components/Message";

const ChatPage = ({ room, setRoom }) => {
  const [messages, setMessages] = useState([]);
  const sendMessage = async (e) => {
    e.preventDefault();
    const messagesCol = collection(db, "messages");

    await addDoc(messagesCol, {
      text: e.target[0].value,
      room,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });
    e.target.reset();
  };

  useEffect(() => {
    const messagesCol = collection(db, "messages");

    onSnapshot(messagesCol, (snapshot) => {
      const tempMsg = [];
      snapshot.docs.forEach((doc) => tempMsg.push(doc.data()));
      setMessages(tempMsg);
    });
  }, []);

  return (
    <div className="chat-page">
      <header>
        <h4>{auth.currentUser.displayName}</h4>
        <h4>{room}</h4>
        <button onClick={() => setRoom(null)}>Change The Room</button>
      </header>
      <main>
        {messages.map((data, i) => (
          <Message data={data} key={i} />
        ))}
      </main>
      <form onSubmit={sendMessage}>
        <input placeholder="Write Your Message..." type="text" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default ChatPage;
