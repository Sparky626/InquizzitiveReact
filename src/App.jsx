import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,  Routes,  Route,  Link} from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Survival from "./pages/Survival";
import Infinity from "./pages/Infinity";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element = {<Home/>} exact/>
          <Route path = "/survival" element = {<Survival/>} exact/>
          <Route path = "/infinity" element = {<Infinity/>} exact/>
          <Route path = "/leaderboard" element = {<Leaderboard/>} exact/>
          <Route path = "/login" element = {<Login/>} exact/>
          <Route path = "*" element = {<NoPage/>} exact/>
        </Routes>
        </Router>    
    </>
  );
}

export default App
