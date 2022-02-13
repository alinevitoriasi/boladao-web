import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import AppBar from "./components/appBar"

import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"

const App = () => {
   return(
      <BrowserRouter>
        <AppBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre"  element={<About/>}/>
          <Route path="/contato"  element={<Contact/>}/>
       </Routes>
      </BrowserRouter>
   )
}

export default App