import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "./firebase";
import { UserContext } from "../UserContext";

function Navbar() {
   const {currentUser,setCurrentUser}=useContext(UserContext);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      console.log(user)
    });
    return () => {
      unsub();
    };
  },[currentUser]);
  return (
    <div className=" w-full h-[7%] bg-indigo-950 text-white  grid grid-cols-3">
      <div className=" flex items-center">
          Lets<span className=" text-pink-300">Chat</span>
      </div>
      <div className=" col-span-2 flex items-center justify-end space-x-4 ">
        <img
          className="w-9 h-8 rounded-full"
          src={currentUser.photoURL}
          alt="dp"
        />
        <span>{currentUser.displayName}</span>
        <NavLink to="login" className=" hover:text-yellow-600 cursor-pointer text-yellow-500 bg-indigo-800 rounded-md p-1 " >Logout</NavLink>
      </div>
    </div>
  );
}

export default Navbar;