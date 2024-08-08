import  { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { arrayUnion, doc, Timestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "./firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

function Input() {
  const { currentUser } = useContext(UserContext);
  const { data } = useContext(UserContext);
  const [text, setText] = useState("");
  const [imgSend, setImgSend] = useState("");
  const handleSend = async () => {
    if (imgSend) {
      const storageRef = ref(storage, uuid());
      await uploadBytesResumable(storageRef, imgSend).then(async () => {
        await getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateDoc(doc(db, "chats", data.chatID), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          } 
          catch (error) {
            console.log(error);
          }
        });
      });
      console.log("img Done")
    } else {
      try{
        const date=new Date();
        const dateNow=date.toLocaleTimeString().substring(0,5);
        console.log(dateNow)
      await updateDoc(doc(db,"chats", data.chatID), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: dateNow,
        }),      
      });
    await updateDoc(doc(db,"UserChats",currentUser.uid),{
      [data.chatID+".lastMessage"]:{
        text
      },
     [data.chatID+".date"]:dateNow,
    })
    await updateDoc(doc(db,"UserChats",data.user.uid),{
      [data.chatID+".lastMessage"]:{
        text
      },
     [data.chatID+".date"]:dateNow,
    })
  }
    catch(error)
    {
      console.log(error)
    }
  }
    setText("")
    setImgSend(null)
    console.log("DOneeeee")
  };
  
  return (
    <>
      <div className=" w-[100%] h-[3em] bg-white flex items-center justify-between">
        <input
          className=" outline-none shadow-2xl w-[70%] placeholder: ml-7"
          type="text"
          value={text}
          placeholder="type something....."
          onChange={(e) => setText(e.target.value)}
        />
        <div className=" flex items-center justify-end gap-4 mr-2">
          <img
            className=" cursor-pointer"
            src="src/assets/attach.png"
            alt=""
            height="30px"
            width="30px"
          />
          <input
            className=" hidden"
            type="file"
            name=""
            id="file"
            onChange={(e) => setImgSend(e.target.files[0])}
          />
          <label className=" cursor-pointer" htmlFor="file">
            <img src="src/assets/img.png" alt="" height="30px" width="30px" />
          </label>
          <button
            className=" bg-sky-600 rounded-lg p-1 hover:bg-sky-800"
            onClick={handleSend}
          >
            send
          </button>
        </div>
      </div>
    </>
  );
}

export default Input;
