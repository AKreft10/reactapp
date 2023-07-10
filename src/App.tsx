import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from './components/menuBar';
import TemporaryBody from './components/temporaryBody';
import { Menu } from '@headlessui/react';
import Regulamin from './components/regulamin';
import { Container } from '@mui/material';

function App() {
  return (
    <Router>
      <MenuBar/>
          <Routes>
              <Route path="/regulamin" element={<Regulamin />} />
              <Route path="/main" element={<TemporaryBody/>} />
          </Routes>
    </Router>
  );
  
}

export default App;
