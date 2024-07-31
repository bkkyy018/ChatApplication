import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";
function Search() {
  const { setSearchTerm, searchTerm, currentUser } = useContext(UserContext);
  const [searchUser, setSearchUser] = useState(null);
  //Searche the contacts
  const handleSearch = async () => {
    console.log()
    const q = query(
      collection(db, "users"),
      where("displayName", "==", searchTerm)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setSearchUser(doc.data());
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  // Handle keydown
  const handleKey = (e) => {
    if (searchTerm == "") setSearchUser(null);
    e.code === "Enter" && handleSearch();
  };
  //Handle select contact
  const handleSelect = async () => {
    //Cheak the group chat(in firebase chat) exist or not , if not then create it
    const combineId =
      currentUser.uid > searchUser.uid
        ? currentUser.uid + searchUser.uid
        : searchUser.uid + currentUser.uid;
    const res = await getDoc(doc(db, "chats", combineId));
    if (!res.exists()){
      await setDoc(doc(db, "chats", combineId), { messages:[] });
      //Update the UserChats
      await updateDoc(doc(db, "UserChats", currentUser.uid), {
        [combineId + ".userInfo"]: {
          uid:searchUser.uid,
          displayName:searchUser.displayName,
          photoURL:searchUser.photoURL
        },
        [combineId+".date"]:serverTimestamp()
      });
      
      await updateDoc(doc(db, "UserChats", searchUser.uid), {
        [combineId + ".userInfo"]: {
          uid:currentUser.uid,
          displayName:currentUser.displayName,
          photoURL:currentUser.photoURL
        },
        [combineId+".date"]:serverTimestamp()
      });
      console.log("upDate Done !!")     
    }
    setSearchTerm("")
      setSearchUser(null)
  };
  return (
    <>
      <div className=" border-b-2">
        <div className=" bg-sky-800  flex justify-center">
          <input
            className=" w-[90%] h-[3em]  bg-sky-800 placeholder:text-gray-400 text-slate-50 outline-none"
            type="text"
            placeholder="Search for user"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            onKeyDown={handleKey}
          />
        </div>
        <hr />
        {searchUser && (
          <div>
            <div
              onClick={() => handleSelect()}
              className=" w-[100%] h-[9%] bg-sky-800 hover:bg-sky-900 rounded-md flex items-center gap-3  border-b-[1px] border-gray-500"
            >
              <img
                className=" w-[3vw] h-[6vh] object-cover rounded-full"
                src={searchUser.photoURL}
                alt="contact"
              />
              <div className="flex items-center flex-col ">
                <h2 className=" font-semibold">{searchUser.displayName}</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Search;
