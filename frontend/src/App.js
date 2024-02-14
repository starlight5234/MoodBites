import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
                    <Route path="/demo" exact element={<Demo />} />
                </Routes>
            </Router>
        </>

    );
}

export default App;
