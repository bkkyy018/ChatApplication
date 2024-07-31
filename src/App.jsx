import {useReducer, useState } from "react";
import { UserContext } from "./UserContext";
import { Outlet, useNavigate } from "react-router-dom";
function App() {
   const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  // const [contactList, setContactList] = useState({});
  const navigate = useNavigate();
  const initialState={
    chatId:null,
    userX:{},
  }
  const chatReducer=(state,action)=>{
    switch(action.type)
    {
      case "CHANGE_USER":
        return{
          user:action.payload,
          chatID:currentUser.uid > action.payload.uid
          ? currentUser.uid + action.payload.uid
          : action.payload.uid + currentUser.uid
        }
        default:return state
    }
  }
  const [state,dispatch]=useReducer(chatReducer,initialState)
  // useEffect(()=>{
  //   const fetchData=async ()=>
  //     {
  //       try {
  //         const querySnapshot = await getDocs(collection(db, "users"));
  //         const items = querySnapshot.docs.map(doc => doc.data());
  //         setContactList(items);
  //         console.log(contactList)
  //       } catch (error) {
  //         console.log(error)
  //       }
  //     }
  //     fetchData()
  // },[currentUser])
console.log(state)
  return (
    <>
      <UserContext.Provider
        value={{data:state,
          dispatch,
          user, 
          setUser,
          email,
          setEmail,
          password,
          setPassword,
          searchTerm,
          setSearchTerm,
          navigate,
          currentUser,
          setCurrentUser,
        }}
      >
        <Outlet/>   
      </UserContext.Provider>
    </>
  );
}

export default App;
