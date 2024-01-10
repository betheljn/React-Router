import React from 'react'
import { Routes, Route } from "react-router-dom";
import Blue from './Blue';
import Red from './Red';
import Home from './Home';
import Green from './Green'
import Yellow from './Yellow'

export default function MainSection() {
  return (
      <div id="main-section">
      <Routes>
        <Route path='/blue' element={<Blue />}></Route>
        <Route path='/red' element={<Red />}></Route>
        <Route path='/green' element={<Green />}></Route>
        <Route path='/yellow' element={<Yellow />}></Route>
        <Route path='/' element={<Home />}></Route>
        
      </Routes>
    </div>
  )
}
