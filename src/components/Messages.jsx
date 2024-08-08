import { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { UserContext } from "../UserContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

function Messages() {
  const { data } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const getChat = () => {
      const unsub = onSnapshot(doc(db, "chats", data.chatID), (doc) => {
         doc.exists() && setMessages(doc.data().messages);
        console.log(doc.data())
      })
      return () => {
        unsub();
      };
    };
    data.chatID && getChat();
    console.log(data.chatID)
  }, [data.chatID]);
  console.log(messages[0]);
  console.log(messages);
  return (
    <>
      <div className=" h-[35rem] overflow-y-scroll">
      {messages?.map((msg)=>{
       return <Message msg={msg} key={msg?.id} />
      })}  
      </div>
    </>
  );
}

export default Messages;
