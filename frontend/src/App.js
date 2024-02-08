import React, { useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
