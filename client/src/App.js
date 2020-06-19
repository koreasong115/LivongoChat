import React from 'react'
import HomePage from './components/HomePage'
import ChatPage from './components/ChatPage'
import NotFoundPage from './components/NotFoundPage'
import { useRoutes } from "hookrouter";
import { ParallaxProvider } from 'react-scroll-parallax'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const routes = {
  "/": () => <HomePage />,
  "/home": () => <HomePage />,
  "/about": () => <ChatPage />,
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about/*" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  )
}
  