import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useRoutes } from "hookrouter";
import Home from './components/Home'
import About from './components/About'

const routes = {
  "/": () => <Home />,
  "/home": () => <Home />,
  "/about": () => <About />,
};

function App() {
  const routeResult = useRoutes(routes);

  return (
    <div>
      {routeResult || <About />}
    </div>
  )
}

export default App;
