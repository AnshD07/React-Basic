import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth';
import { login, logout } from "./store/authSlice"
import { Header, Footer } from "./components/index"
import { Outlet } from 'react-router-dom';

function App() {

  const [loding, setLoding] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) { //! if there is User data then 
          dispatch(login({ userData }))
        } else {
          dispatch(logout()) //! if there is not login then logout
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoding(false))
  }, [])



  //! here environment varible use to store sensitive information like Password
  //! Access of env is different from vite, create-react-app and any other third party

  //* conditional rendering
  return !loding ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO : <Outlet />
        </main>
        <Footer />
      </div>
      test sentence by ansh dholakiya
    </div>
  ) : null

  //! use with if else for loading page bro
}

export default App
