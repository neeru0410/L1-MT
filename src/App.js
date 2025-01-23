import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
