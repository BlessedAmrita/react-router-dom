import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import { Home, AboutUs, ContactUs, Github, User, GithubData } from "./components"

// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[{
//       path:"",
//       element:<Home/>
//     },{
//       path:"aboutUs",
//       element:<AboutUs/>
//     },{
//       path:"contactUs",
//       element:<ContactUs/>
//     }]
//   }
// ])

const router= createBrowserRouter(createRoutesFromElements(
  <Route path='/' element=<Layout/> >
    <Route path='' element=<Home/> />
    <Route path='aboutUs' element=<AboutUs/> />
    <Route path='contactUs' element=<ContactUs/> />
    <Route path='github' element=<Github/> loader={GithubData} />
    <Route path='user/:userid' element=<User/> />
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
