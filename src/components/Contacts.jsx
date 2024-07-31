import { useContext, useEffect, useState } from "react";
import Contact from "./Contact";
import { UserContext } from "../UserContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

function Contacts() {
  const [contactList, setContactList] = useState([]);
  const { currentUser } = useContext(UserContext);
  let contactLL=[]
  useEffect(() => {
     const getContact = () => {
      const unsub = onSnapshot(doc(db, "UserChats", currentUser.uid), (doc) => {
        setContactList(doc.data());
      });
      return ()=>{
        unsub()
      }
    };
   currentUser.uid && getContact()
  },[currentUser?.uid]);
  console.log(contactList)
    contactLL=Object.entries(contactList)
  return (
    <>
      {contactLL?.sort((a,b)=>(b[1].date-a[1].date)).map((item) => (
        <Contact key={item[0]} name={item[1].userInfo.displayName} img={item[1].userInfo.photoURL} data={item[1].userInfo} lastMsg={item[1].lastMessage?.text} />
      ))}
    </>
  );
}
export default Contacts;
