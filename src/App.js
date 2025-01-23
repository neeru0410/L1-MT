import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {

    const isAuthenticated = localStorage.getItem('authenticated'); 

    return (
        <Router>
            <Routes>
            {isAuthenticated ? (
                    <Route path="/home" element={<Home />} />
                ) : (
                    <Route path="/" element={<Login />} />
                )}
            </Routes>
        </Router>
    );
};

export default App;
