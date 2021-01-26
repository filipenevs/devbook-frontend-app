import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './reset.css';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import LoginPage from './Components/Login-Register/LoginPage';
import RegisterPage from './Components/Login-Register/RegisterPage';
import Page404 from './Components/Page404';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
