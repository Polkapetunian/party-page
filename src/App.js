import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import Information from './pages/Information';
import Welcome from './pages/Welcome';
import SignUp from './pages/SignUp';


const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>Party page</h1>
        <NavBar />
        <Routes>
          <Route element={<Information />} path="/info" />
          <Route element={<Welcome />} path="/" />
          <Route element={<SignUp />} path="/anmalan" />
        </Routes>
      </div>
    </BrowserRouter >

  );
}

export default App;
