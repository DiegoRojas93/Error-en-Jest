import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { About } from './pages/About';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NavBar } from '../Components/NavBar';

export const AppRouter = () => {

  return (
    <Router>

      <NavBar />

      <div className='container'>
        <Routes >
            <Route path='/login' element={ <Login /> } />
            <Route path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path="*" element={<Home to ="/" />}/>
        </Routes>
      </div>

    </Router>
  )
}
