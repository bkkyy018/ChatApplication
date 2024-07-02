import { useState } from 'react'
import { UserContext } from './UserContext';
import Home from './pages/Home';
import { Outlet } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(23);
  return (
    <>
    <UserContext.Provider value={{count,setCount}}>
      <Home/>
      <Outlet/>
    </UserContext.Provider>
    </>
  )
}

export default App
