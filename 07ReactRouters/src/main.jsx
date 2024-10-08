import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import { Home, About, Contact, User, Github } from './components'  //default index.js will selected  
import { githubInfoLoader } from './components/Github/Github'

//! whole routing done here 


//! 1st method to routing
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,  //! here Footer and Header remain same both are included
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]

//   }
// ])

//! 2nd method to routing
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />}>
        //! can also done this for nesting of routes
            </Route>
            <Route path='contact' element={<Contact />} />
            <Route path='user/:params' element={<User />} />  //! varible chhe bhai te User ma jay chhe render thay chhe
            <Route
                loader={githubInfoLoader} //? for fetch request
                //! this is work for if mouse cursor hovring over button and then we need to fetch data and data store in cache memory so this is optimize approach good optimize approach save response in cache memory
                path='github'
                element={<Github />}
            />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
