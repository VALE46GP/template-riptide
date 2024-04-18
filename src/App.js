import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.sass';

function App() {
    return (
        <Router>
            <div className="app">
                <div className="nav-container" >
                    <Navigation />
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
