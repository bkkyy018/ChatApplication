import React from 'react'
import Contact from './Contact'
import { UserContext } from '../UserContext'
function Contacts() {
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
return (
    <>
    {contactList.map((item)=>(<Contact key={item.id} name={item.name} img={item.imgURL}/>))}
    </>
  )
}
export default Contacts
