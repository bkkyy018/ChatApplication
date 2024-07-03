import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./pages/Home.jsx";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     children:[
//       {
//         path:'home',
//         element:<Home/>,
//         children:[
//           {
//             path:"signup",
//             element:<SignUp/>
//           }
//         ]
//       },
//       {
//         path:'login',
//         element:<Login/>,
//       }
//     ]
//   },
// ]);
// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App/>}>
//       <Route path="" element={<Home/>} />
//       <Route path="signup" element={<SignUp/>}/>
//       <Route path="login" element={<Login/>}/>
//     </Route>
//   )
// )
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
