import React from 'react'
import {Outlet} from 'react-router-dom'
import React from 'react';                  
import { useState, useEffect } from 'react'; 
import ReactDOM from 'react-dom';           
import App from './App';       
import './App.css';              
import styles from './App.module.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 


function Layout() {
  return (
    <>
    <Outlet/>
    </>
  )
}

export default Layout
