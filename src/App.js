import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllRoutes from './AllRoutes';
import './style/App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <AllRoutes />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
