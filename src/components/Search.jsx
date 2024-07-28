import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";
function Search() {
  const { setSearchTerm, searchTerm} = useContext(UserContext);
  const [serachUser,setSearchUser]=useState(null)
  //Searche the contacts
  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", searchTerm)
    );
      
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setSearchUser(doc.data());
        console.log(serachUser)
      });
    } catch(error) {
      console.log(error)
    }
  };
 // Handle keydown
  const handleKey=(e)=>
  {
    if(searchTerm=="")
      setSearchUser(null)
    e.code === "Enter" && handleSearch();
  }
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
        <hr/>
        { serachUser && (<div>
        <div className=" w-[100%] h-[9%] bg-sky-800 hover:bg-sky-900 rounded-md flex items-center gap-3  border-b-[1px] border-gray-500">
          <img
            className=" w-[3vw] h-[6vh] object-cover rounded-full"
            src={serachUser.photoURL}
            alt="contact"
          />
          <div className="flex items-center flex-col ">
            <h2 className=" font-semibold" >{serachUser.displayName}</h2>
            <span>Hello</span>
          </div>
        </div>
      </div>)}
      
        {/* <div>
          {isSearch?searchCompo():console.log("Enter a key ")}
        </div> */}
      </div>
    </>
  );
}
export default Search;
