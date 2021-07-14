import React from "react";
import Navbar from "./components/Navbar";
import "./index.css"
import Home from "./components/Home.js";
import About from "./components/About";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Estate from "./components/Estate";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={Estate} path='/estate' />
        <Route component={About} path='/about' />
      </Switch>
      </BrowserRouter>

  );
}

export default App;
