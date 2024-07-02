import React from "react";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import SideBar from "../components/SideBar";
import ChatLayOut from "../components/ChatLayOut";

function Home() {
    const { count } = useContext(UserContext);

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
