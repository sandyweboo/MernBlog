import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import SingUp from "./pages/SingUp";
import SingIn from "./pages/SingIn";
import Header from "./component/Header";
import FooterCom from "./component/Footer";

function App() {
  return (
<BrowserRouter>
<Header/>
  <Routes>
  <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/dashboard' element={<Dashboard />}/>
  <Route path='/singup' element={<SingUp />} />
  <Route path='/singin' element={<SingIn />}/>
  </Routes>
  <FooterCom/>
</BrowserRouter>
  );
}

export default App;
