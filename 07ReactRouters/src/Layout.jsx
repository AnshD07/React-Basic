import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components'

function Layout() {
  return (
    <> 
      <Header />
      <Outlet />  //! use this layout as base upper and lower all are remain same so performace of webpage fast no need to rerendar at every route
      <Footer />
    </>
  )
  //! for optimization

  //* Header and footer stay same in middle outlet can be change on the base of router
}

export default Layout