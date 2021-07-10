import React from "react";
import Navbar from "./components/navbar";
import "./index.css"
import Home from "./components/home.js";
import about from "./components/about";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import estate from "./components/estate";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={estate} path='/estate' />
        <Route component={about} path='/about' />
      </Switch>
      </BrowserRouter>

  );
}

export default App;
