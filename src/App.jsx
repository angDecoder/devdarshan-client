import React from 'react';
import {
  Routes,
  Route,
  Outlet
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home.jsx';

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

      </Route>
    </Routes>
  )
}

export default App