import React, { Component } from 'react'
import HomePage from './components/HomePage'
import ChatPage from './components/ChatPage'
import NotFoundPage from './components/NotFoundPage'
import { useRoutes } from "hookrouter";
import { ParallaxProvider } from 'react-scroll-parallax'

const routes = {
  "/": () => <HomePage />,
  "/home": () => <HomePage />,
  "/about": () => <ChatPage />,
};

export default function App() {
  const routeResult = useRoutes(routes);

  return (
    <ParallaxProvider>
      {routeResult || <NotFoundPage />}
    </ParallaxProvider>
  )

}
