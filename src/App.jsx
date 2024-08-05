import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  console.log("App component rendered");
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;