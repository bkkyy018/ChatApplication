import {useState } from "react";
import { UserContext } from "./UserContext";
import { Outlet, useNavigate } from "react-router-dom";
function App() {
  const contactList = [
    {
      id: 1,
      name: "Roneyy",
      imgURL: "src/assets/img1.jpg",
    },
    {
      id: 2,
      name: "Orton",
      imgURL: "src/assets/img2.jpg",
    },
    {
      id: 3,
      name: "Aleyyy",
      imgURL: "src/assets/img5.jpg",
    },
    {
      id: 4,
      name: "Wickkk",
      imgURL: "src/assets/img4.jpg",
    },
  ];

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  // const [contactList, setContactList] = useState({});
  const navigate = useNavigate();
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

  return (
    <>
      <UserContext.Provider
        value={{
          user,
          setUser,
          email,
          setEmail,
          password,
          setPassword,
          contactList,
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
