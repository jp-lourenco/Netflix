import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { Browse } from './pages';

function App() {
    const user = null;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="browse" element={<Browse />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
