import React, { useEffect } from 'react'
import './App.css';

// Libary Imports
import { HashRouter, Link, Route, Switch } from "react-router-dom";

// Game Pages
import Home from './components/Home'
import Debug from './components/Debug'

function App() {
  
  useEffect(() => {
    
  }, [])
  
  return (
    <HashRouter>
      <div className="menu">
        <Link to="/"><h2>Home</h2></Link>
        <Link to="/debug"><h2>Debug</h2></Link>
      </div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/debug" component={Debug}/>
      </Switch> 
    </HashRouter>
  );
}

export default App;
