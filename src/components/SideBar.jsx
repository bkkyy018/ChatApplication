import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Contact from './Contact'

function SideBar() {
  return (
    <>
    <div className=' bg-sky-800 border-r-2 border-black'>
      <Navbar/>
      <Search/>
      <Contact/>
    </div>
    
    </>
  )
}

export default SideBar
