import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/home/Home.jsx';
import Home1 from './Home/Home1.jsx';
import About from './component/about/About.jsx';
import Order from './component/order/Order.jsx';
import Grandpa from './component/Grandpa/Grandpa.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children :[
      
     {  
      path:'home',
      element:<Home1></Home1>
     },
     {
      path:"about",
      element:<About></About>
     },
     {
      path:"order",
      element:<Order></Order>,
      loader: () => fetch('tshart.json')
     },
     {
      path:"grandpa",
      element:<Grandpa></Grandpa>
     }

    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
