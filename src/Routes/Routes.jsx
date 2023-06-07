import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Home/Home/Menu/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Privateroute from "./Privateroute";
import Secret from "../pages/Shared/Secret";
import Dashboard from "../Layout/Dashboard";
import Mycart from "../pages/dashboard/Mycart/Mycart";
import Allusers from "../pages/dashboard/Allusers/Allusers";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {

        path: 'login',
        element: <Login></Login>
        },
        {
          path : 'signup',
          element: <Signup></Signup>
        },
        {
          path : 'secret',
          element: <Privateroute><Secret></Secret></Privateroute>
        }
      ],
   
    },
    {
      path : 'dashboard',
      element: <Privateroute><Dashboard></Dashboard></Privateroute>,
      children: [
      {
        path: 'mycart',
        element:<Mycart></Mycart>
      },
      {
        path: 'allusers',
        element:<Allusers></Allusers>
      }
      ]
    }
  ]);