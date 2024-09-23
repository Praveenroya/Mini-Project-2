import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UploadPage from './pages/UploadPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import VideoDetail from './pages/VideoDetail';
import Navbar from './components/NavBar';
import './api';
import './styles.css';
import 'boxicons';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/videos/:videoId" element={<VideoDetail />} />
       
        </Routes>
    </Router>
  );
};

export default App;
