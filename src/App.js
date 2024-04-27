import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Adminnavbar from './components/adminnavbar';
import About from './layouts/About';
import Home from './layouts/Home';
import Login from './layouts/Login';
import Register from './layouts/Register';
import AnalysisResultPage from './layouts/AnalysisResultPage';


// Use createRoot to render the app
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div className="App">
        <Adminnavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/AnalysisResultpage' element={<AnalysisResultPage />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);

