import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Menu from './Pages/Menu';
import Home from './Pages/Home';
import Register from './Pages/Regsiter';
import Admin from './Pages/Admin';
import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes(){

    const location = useLocation();
    return(
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/admin/post' element={<Admin/>}></Route>
        </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;