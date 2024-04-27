import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigationbar from './components/navbar';
import About from './layouts/About us';
import Home from './layouts/Home';
import Login from './layouts/Login';
import Register from './layouts/Register';
import { AuthProvider } from '../src/Auth/Contexts/AuthContext';
import AnalysisResultPage from './layouts/AnalysisResultPage';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

   
    <Router>
      <div className="App">
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/AnalysisResultpage' element={<AnalysisResultPage />} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  </React.StrictMode>
);
