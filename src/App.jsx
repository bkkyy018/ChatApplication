import { useState } from 'react'
import { UserContext } from './UserContext';
import { Outlet } from 'react-router-dom';
function App() {
  const contactLi=[
    {
        id:1,
        name:'Roneyy',
        imgURL:"src/assets/img1.jpg"
    },
    {
         id:2,
        name:'Orton',
         imgURL:"src/assets/img2.jpg"
    },
    {
         id:3,
        name:'Aleyyy',
         imgURL:"src/assets/img5.jpg"
    },
    {
         id:4,
        name:'Wickkk',
         imgURL:"src/assets/img4.jpg"
    },
]
localStorage.setItem("contacts",JSON.stringify(contactLi))
const contactList=JSON.parse(localStorage.getItem("contacts"))
let x=90
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [searchTerm,setSearchTerm]=useState("")
  return (
    <>
    <UserContext.Provider value={{user, setUser,email, setEmail,password, setPassword,contactList,searchTerm,setSearchTerm,x}}>
      <Outlet/>
    </UserContext.Provider>
    </>
  )
}

export default App
