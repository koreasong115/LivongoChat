import React from 'react'
import HomePage from './components/HomePage'
import ChatPage from './components/ChatPage'
import NotFoundPage from './components/NotFoundPage'
import { useRoutes } from "hookrouter";
import { ParallaxProvider } from 'react-scroll-parallax'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/about" component={ChatPage} />

      </Switch>
    </BrowserRouter>
  )
}
