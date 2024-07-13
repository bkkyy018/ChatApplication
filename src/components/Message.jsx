import React from "react";

function Message() {
  return (
    <>
      <div className=" p-2 ring-1 flex  font-thin gap-2 flex-row-reverse  place-items-end">
        <div className=" messageInfo  text-white ">
          <img
            className=" rounded-full h-[40px] w-[40px]"
            src="src/assets/dp.jpg"
            alt=""
          />
          <span>just now</span>
        </div>
        <div className=" messageContent  p-2  flex  text-white flex-col-reverse gap-3 place-items-end float-left">
          <span className="p-2 bg-blue-700 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl overflow-auto max-w-[300px]">
            Heyy Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias, ullam nam maiores accusantium ratione velit, tenetur numquam nisi aperiam unde nostrum provident labore libero ex, quia quasi! Id saepe, accusamus odit voluptatum quia nostrum assumenda sunt vitae ipsum dignissimos?
          </span>
          <img
            className=" rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl"
            src="src/assets/dp.jpg"
            alt=""
            width="200px"
            height="200px"
          />
          <img
            className=" rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl"
            src="src/assets/dp.jpg"
            alt=""
            width="200px"
            height="200px"
          />
        </div>
      </div>
    </>
  );
}

export default Message;
