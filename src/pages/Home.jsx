import React from "react";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { NavLink } from "react-router-dom";

function Home() {
    const { count } = useContext(UserContext);

  return (
    <div>
      <h1 className=" bg-purple-500 text-3xl">Heyy there {count}</h1>
    </div>
  );
}

export default Home;
