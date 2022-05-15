import React from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
export const Root = () => {
  return (
    <div>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
};
