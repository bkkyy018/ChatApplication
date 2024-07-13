import React, { useCallback, useContext, useState } from "react";
import { UserContext } from "../UserContext";
import Contact from "./Contact";
function Search() {
  const { contactList, setSearchTerm, searchTerm } = useContext(UserContext);
  const [isSearch,setisSearch]=useState(false)
  const [search,setSearch]=useState(false)
  //Searche the contacts
  function searchFun()
  {
      const searchList =contactList.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setisSearch(true)
      console.log("searched.....")
      setSearch(searchList)
  }
  //Render searched Component
  function searchCompo()
  {
     console.log(" search Compo.......")
    return(
      <>
      <div className=" searchContact min-h-0 text-white">
       {search.map((item)=>(<Contact key={item.id} img={item.imgURL} name={item.name}/>))}
     </div>
     </>
    );
  }
 // Handle keydown
  function handleSearch(e)
  {
    searchFun()
  }
  useCallback()
  return (
    <>
      <div className=" border-b-2">
        <div className=" bg-sky-800  flex justify-center">
          <input
            className=" w-[90%] h-[3em]  bg-sky-800 placeholder:text-gray-400 text-slate-50 outline-none"
            type="text"
            placeholder="Search for user"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            onKeyDown={handleSearch}
          />
        </div>
        <hr/>
        <div>
          {isSearch?searchCompo():console.log("Enter a key ")}
        </div>
      </div>
    </>
  );
}
export default Search;
