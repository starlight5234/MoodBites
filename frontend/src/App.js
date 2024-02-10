import './App.css';
import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from './Pages/Home/Home';
import Demo from './Pages/Demo';
import ShowListing from './Pages/ShowListing/ShowListing';


function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/category/:categoryname" exact element={<ShowListing />} />
                </Routes>
            </Router>
        </>

    );
}

export default App;
