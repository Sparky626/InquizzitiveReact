import React from "react";
import axios from 'axios';
import "../App.css";
import InquizzNoBg from '../Images/Inquizzitive-nobg.jpg';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CreateAccount from "./CreateAccount";

function Login () {
  const navigate = useNavigate();
  const home = () => navigate('/');
  const createaccountpage = () =>  navigate('/createaccount');
  const [inputs, setInputs] = useState("");
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    const instance = axios.create({
      baseURL: 'https://ocqgyz1dnd.execute-api.us-east-1.amazonaws.com/production/account',
      withCredentials: false,
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    });
    instance.post('https://ocqgyz1dnd.execute-api.us-east-1.amazonaws.com/production/account', inputs)
    .then(function (response){
      console.log(response);
    })
    .catch(function (error){
      console.log(error);
    });
  };
  
  return (
    <>
      <img
          src={InquizzNoBg}
          height="300px"
          width="300px"
          className="splashimg"
          id="splashimg"
        />
      <h1 className="center" style={{animation: "fadeIn 2.0s"}}>Login</h1>
      <div className="center">
          <form onSubmit={handleSubmit} className="centerform">
            <label>
                Email: 
            </label>
            <div className="center">
              <input
                type ="text"
                name = "email"
                value = {inputs.email || ""}
                onChange = {handleChange}
              />
            </div>
            
            <label>
                Password: 
              </label>
            <div className="center">
              
              <input
                type ="text"
                name = "password"
                value = {inputs.password || ""}
                onChange = {handleChange}
              />
            </div>
            <div className="center" style={{marginTop: "15px"}}>
              <input
                className="formbutton"
                type ="submit"
                text = "Login"
              />
              <div className="space"></div>
              <button className="button" onClick={createaccountpage} style={{animation: "none"}}>
              Create Account
              </button>
            </div>
          </form>
      </div>
      <div className="center">
        <audio id="player" src="Music/Menu.mp3" />
        <button className="icnbtns" id="sound" onClick={home}>
          <i className="material-icons">volume_up</i>
        </button>
        <button className="icnbtns" onClick={home}>
          <i className="material-icons">home</i>
        </button>
      </div>
    </>
  );
}

export default Login;