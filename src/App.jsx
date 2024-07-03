import { useState } from 'react'
import { UserContext } from './UserContext';
import { Outlet } from 'react-router-dom';
function App() {
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <>
    <UserContext.Provider value={{user, setUser,email, setEmail,password, setPassword}}>
      <Outlet/>
    </UserContext.Provider>
    </>
  )
}

export default App
