import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Survival from "./pages/Survival";
import Infinity from "./pages/Infinity";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Layout />}>
          <Route index element = {<Home />}/>
          <Route path="survival" element={<Survival />} />
          <Route path="infinity" element={<Infinity />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />  
        </Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App
