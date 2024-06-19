import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Assuming your main services page is Home
import WebDevelopment from './components/WebDevelopment';
import AppDevelopment from './components/AppDevelopment';
import BackendDevelopment from './components/BackendDevelopment';
import "./index.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/personal-website" element={<Home />} />
        <Route path="/personal-website/web-development" element={<WebDevelopment />} />
        <Route path="/personal-website/app-development" element={<AppDevelopment />} />
        <Route path="/personal-website/backend-development" element={<BackendDevelopment />} />
      </Routes>
    </Router>
  );
};

export default App;
