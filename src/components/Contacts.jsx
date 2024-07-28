import { useContext } from 'react'
import Contact from './Contact'
import { UserContext } from '../UserContext'
function Contacts() {
const {contactList}=useContext(UserContext)
console.log(contactList)
return (
    <>
    {contactList.map((item)=>(<Contact key={item.id} name={item.name} img={item.imgURL}/>))}
    </>
  )
}
export default Contacts
