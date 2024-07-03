import React, { useContext } from 'react'
import { UserContext } from '../UserContext';
import { NavLink } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebase';

function Login() {
  const {email, setEmail,password, setPassword}=useContext(UserContext)
  const handleLogin=async (e)=>{
    e.preventDefault()
    try{
      await signInWithEmailAndPassword(auth,email.password)
      console.log("Sign up Successfully")
      // window.location.href='./login'
    }
    catch(error)
    {
        console.log(error)
    }
  
  }
  return (
      <div className=" flex justify-center ">
        <div className=" flex justify-center w-[30vw] h-[60vh] bg-blue-950 mt-6 rounded-xl">
          <div>
            <h2 className=" mt-3 font-semibold text-gray-400 text-2xl ml-[34%]">
              Login
            </h2>
            <form
            onSubmit={handleLogin}
              action=""
              className=" grid grid-row-4 grid-flow-row space-y-6 mt-5 text-white"
            >
              <div>
                <input
                  className=" w-[290px] h-[37px] rounded-md placeholder:px-7 bg-blue-900 ring-1 ring-gray-400 "
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  required
                />
              </div>
              <div>
                <input
                  className=" w-[290px] h-[37px] rounded-md placeholder:px-7 bg-blue-900 ring-1 ring-gray-400 "
                  type="password"
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  placeholder="Password"
                  id="pswd"
                  required
                />
              </div>
              {/* <div>
              <input className=" w-[290px] h-[37px] rounded-md placeholder:px-7 bg-blue-900 ring-1 ring-gray-400 " type="text" placeholder="Confirm Password" id="Conpswd" required/>
            </div> */}
              <div>
                <button
                  type="submit"
                  className="w-[290px] h-[37px] rounded-md bg-pink-600 hover:bg-pink-900 ring-1 ring-gray-500 text-white"
                >
                  Login
                </button>
              </div>
              <div>
                <nav>
                  If don't have an account please
                  <NavLink
                    to="/signup"
                    className=" text-red-600 p-2 rounded-md hover:text-red-800"
                  >
                    Signin
                  </NavLink>
                </nav>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Login
