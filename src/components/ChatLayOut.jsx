import React from "react";
import Messages from "./Messages";
import Input from "./Input";
function ChatLayOut() {
  return (
    <>
      <div className=" col-span-2 flex flex-col">
        <div className=" ChatInfo flex justify-between items-center h-[7%] bg-slate-800 relative">
          <div className=" text-white ml-4 font-bold text-xl">Johnnn</div>
          <div className=" flex  items-center mr-5 gap-3 h-[30px] ">
            <img className=" cursor-pointer"
              src="src/assets/cam.png"
              alt="cam"
              height="30px"
              width="30px"
            />
            <img className=" cursor-pointer"
              src="src/assets/add.png"
              alt="add"
              height="30px"
              width="30px"
            />
            <img className=" cursor-pointer"
              src="src/assets/more.png"
              alt="more"
              height="30px"
              width="30px"
            />
          </div>
        </div>
        <div className=" no-scroll h-[37em] ">
          <Messages />
        </div>
        <div className=" ">
          <Input/>
        </div>
      </div>
    </>
  ); 
}
export default ChatLayOut;