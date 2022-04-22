import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllRoutes from './AllRoutes';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <AllRoutes />
      </HashRouter>
    </div>
  );
}

export default App;
