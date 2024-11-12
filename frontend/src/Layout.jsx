import React from 'react'
import {Outlet} from 'react-router-dom'
import React from 'react';                  
import { useState, useEffect } from 'react'; 
import ReactDOM from 'react-dom';           
import App from './App';                     


function Layout() {
  return (
    <>
    <Outlet/>
    </>
  )
}

export default Layout
