import { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import { NavLink} from "react-router-dom";
import { auth, db, storage } from "../components/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

function SignUp() {
  const { user, setUser, email, setEmail, password, setPassword,navigate } =
    useContext(UserContext);

    /*navigate is a hook use to navigate different router*/

  const HandleRegister = async (e) => {
    e.preventDefault();
     const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
     const file = e.target[3].files[0];
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
       console.log(user);
      console.log("signin succesfully");
      const storageRef = ref(storage, displayName);
      /*storageRef is a referance to a specific location in firebase it allow upload , download and deleting  ## the functions are -->>  (uploadBytes,getDownloadURL,deleteObject)  */

      await uploadBytesResumable(storageRef, file).then(() => {
        /*uploadBytesResumable is a function provided by Firebase Storage that allows you to upload files to Firebase Storage with the ability to pause, resume, and monitor the progress of the upload. */
        getDownloadURL(storageRef).then(async (downloadURL) => {
          /*getDownloadURL is a function provided by Firebase Storage that allows you to retrieve the download URL for a file stored in your Firebase Storage bucket. */
          try {
            //Update profile
            await updateProfile(user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users",user.uid), {
              uid:user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "UserChats", user.uid), {});
            navigate("/login");
          } catch (err) {
            console.log(err);
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  const {currentUser,setCurrentUser}=useContext(UserContext);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      console.log(user)
    });
    return () => {
      unsub();
    };
  },[currentUser]);
  return (
    <>
      <div className=" flex justify-center ">
        <div className=" flex justify-center w-[30vw] h-[60vh] bg-blue-950 mt-6 rounded-xl">
          <div>
            <h2 className=" mt-3 font-semibold text-gray-400 text-2xl ml-[34%]">
              Sign Up
            </h2>
            <form
              onSubmit={HandleRegister}
              action=""
              className=" grid grid-row-6 grid-flow-row space-y-6 mt-5 text-white"
            >
              <div>
                <input
                  className=" w-[290px] h-[37px] rounded-md placeholder:px-7 bg-blue-900 ring-1 ring-gray-400 "
                  type="text"
                  value={user}
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                  placeholder="Username"
                  id="user"
                  required
                />
              </div>
              <div>
                <input
                  className=" w-[290px] h-[37px] rounded-md placeholder:px-7 bg-blue-900 ring-1 ring-gray-400 "
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
                  id="email"
                  required
                />
              </div>
              <div>
                <input
                  className=" w-[290px] h-[37px] rounded-md placeholder:px-7 bg-blue-900 ring-1 ring-gray-400 "
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                  id="pswd"
                  required
                />
              </div>
              <div>
                <input
                  //  className=" w-[290px] h-[37px] rounded-md placeholder:px-7 bg-blue-900 ring-1 ring-gray-400 appearance-none"
                  className=" hidden"
                  type="file"
                  placeholder=""
                  id="file"
                />
                <label
                  htmlFor="file"
                  className=" flex gap-4 items-center justify-start ml-2 cursor-pointer"
                >
                  <img
                    src="src/assets/addAvatar.png"
                    alt="add_avatar"
                    width="40px"
                    height="40px"
                  />
                  <span>Add Avatar</span>
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-[290px] h-[37px] rounded-xl bg-pink-600 hover:bg-pink-900 ring-1 ring-gray-500 text-white"
                >
                  Sign up
                </button>
              </div>
              <div>
                <nav>
                  If already have an account please
                  <NavLink
                    to="/login"
                    className=" text-red-600 p-2 rounded-xl hover:text-red-800"
                  >
                    Login
                  </NavLink>
                </nav>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
