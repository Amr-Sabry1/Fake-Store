import React from 'react'
import NavBar from '../NavBar/navbar'

import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
export default function mainlayout() {
  return (
    <>

    <NavBar>
      <h2>hi</h2>
    </NavBar>
<Outlet></Outlet>
<Footer/>
    </>
  )
}
