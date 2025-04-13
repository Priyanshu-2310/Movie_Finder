import React from 'react'
import { Outlet } from 'react-router-dom'
import Detail from './Detail'
import Movies from './Movies'
const Layout = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Layout