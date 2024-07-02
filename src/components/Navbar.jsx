import React from "react";

function Navbar() {
  return (
    <div className=" w-full h-[7%] bg-indigo-950 text-white  grid grid-cols-3">
      <div className=" flex items-center">
          Lets<span className=" text-pink-300">Chat</span>
      </div>
      <div className=" col-span-2 flex items-center justify-end space-x-4 ">
        <img
          className="w-9 h-8 rounded-full"
          src="src/assets/dp.jpg"
          alt="dp"
        />
        <span>Johnnn</span>
        <button className=" hover:text-yellow-600 cursor-pointer text-yellow-500 bg-indigo-800 rounded-md p-1 ">Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
