import React, { Component } from 'react'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'
import { useRoutes } from "hookrouter";
import { ParallaxProvider } from 'react-scroll-parallax'

const routes = {
  "/": () => <HomePage />,
  "/about": () => <AboutPage />,
};

export default function App() {
  const routeResult = useRoutes(routes);

  return (
    <ParallaxProvider>
      {routeResult || <NotFoundPage />}
    </ParallaxProvider>
  )

}
