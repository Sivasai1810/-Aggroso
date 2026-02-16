import React from 'react'
// import {BroswerRouter,Routes,Route} from "react-router-dom"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Workflow from './workflows/Workflow'
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='*' element={<Workflow/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
