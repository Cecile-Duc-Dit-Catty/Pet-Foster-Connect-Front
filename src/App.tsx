// import { useState } from 'react';
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Header from './layouts/header/header.tsx';
import Footer from './layouts/footer/footer.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import AnimalsPage from './pages/AnimalsPage/AnimalsPage.tsx';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/animaux" element={<AnimalsPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
