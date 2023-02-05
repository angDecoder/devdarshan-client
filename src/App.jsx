import React from 'react';
import {
  Routes,
  Route,
  Outlet
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home.jsx';
import Login from './components/Form/Login';
import Register from './components/Form/Register';

function App() {
  return (
    <Routes>
      <Route element={
        <>
          <Navbar />
          <Outlet />
        </>
      } >
      <Route path='/' element={<Home />}   />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App