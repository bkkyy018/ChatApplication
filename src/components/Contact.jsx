import { useContext } from "react";
import { UserContext } from "../UserContext";

// eslint-disable-next-line react/prop-types
const Contact=({name,img,data,lastMsg})=>{
  const {dispatch}=useContext(UserContext);
  const handleSelect=(dt)=>{
    dispatch({type:"CHANGE_USER",payload:dt})
  }
  console.log(data)
  return (
    <>
      <div>
        <div className=" w-[100%] h-[9%] bg-sky-800 hover:bg-sky-900 rounded-md flex items-center gap-3  border-b-[1px] border-gray-500" onClick={()=>handleSelect(data)}>
          <img
            className=" w-[3vw] h-[6vh] object-cover rounded-full"
            src={img}
            alt="contact"
          />
          <div className="flex items-center flex-col ">
            <h2 className=" font-semibold" >{name}</h2>
            <span>{lastMsg}</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
