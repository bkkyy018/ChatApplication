import React, { useContext } from "react";
import SideBar from "../components/SideBar";
import ChatLayOut from "../components/ChatLayOut";
import { UserContext } from "../UserContext";

function Home() {
  
  return (
   <>
   <div className=" min-w-full min-h-screen bg-gray-700 flex justify-center">
        <div className=" w-[80vw] min-h-[90vh] bg-blue-900 my-auto rounded-xl grid grid-cols-3 overflow-hidden">
          <SideBar/>
          <ChatLayOut />
        </div>
   </div>
   </>
  );
}

export default Home;