import './App.css'
import {BrowserRouter as Router,  Routes,  Route,  Link} from 'react-router-dom';
import Home from "./pages/Home";
import Survival from "./pages/Survival";
import Infinity from "./pages/Infinity";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount"
import NoPage from "./pages/NoPage";
import Account from "./pages/Account";
import "bootstrap/dist/css/bootstrap.min.css";
import ForgotPassword from './pages/ForgotPassword';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element = {<Home/>} exact/>
          <Route path = "/survival" element = {<Survival/>} exact/>
          <Route path = "/infinity" element = {<Infinity/>} exact/>
          <Route path = "/leaderboard" element = {<Leaderboard/>} exact/>
          <Route path = "/login" element = {<Login/>} exact/>
          <Route path = "/createaccount" element = {<CreateAccount/>} exact/>
          <Route path = "/account" element = {<Account/>} exact/>
          <Route path = "/forgotpass" element = {<ForgotPassword/>} exact/>
          <Route path = "*" element = {<NoPage/>} exact/>
        </Routes>
        </Router>    
    </>
  );
}

export default App
