import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../UserContext";

function Message(message) {
  const {currentUser}=useContext(UserContext)
  const {data}=useContext(UserContext)
  const ref=useRef()
  useEffect(()=>{
    ref.current?.scrollIntoView({behaviour:"smooth"})
  },[message.msg])
  //cd console.log(message.msg.date.seconds)
  return (
    <>
      <div ref={ref} className=" p-2 ring-1 flex  font-thin gap-2 flex-row-reverse  place-items-end">
        <div className=" messageInfo  text-white ">
          <img
            className=" rounded-full h-[40px] w-[40px]"
            src={message.senderId===currentUser.uid?data.user.photoURL:currentUser.photoURL}
            alt=""
          />
          <span>{message?.msg.date}</span>
        </div>
        
        <div className=" messageContent  p-2  flex  text-white flex-col-reverse gap-3 place-items-end float-left">
        { message.msg.text && <span className="p-2 bg-blue-700 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl overflow-auto max-w-[300px]">
           {message?.msg.text}
          </span>} 
          {message?.msg.img && <img
            className=" rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl"
            src="src/assets/dp.jpg"
            alt=""
            width="200px"
            height="200px"
          />}         
        </div>
      </div>
    </>
  );
}

export default Message;
