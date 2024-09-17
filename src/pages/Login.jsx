import React from "react";
import axios from 'axios';
import "../App.css";
import InquizzNoBg from '../Images/Inquizzitive-nobg.jpg';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login () {
  const navigate = useNavigate();
  const home = () =>  navigate('/');
  const [inputs, setInputs] = useState("");
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('https://ocqgyz1dnd.execute-api.us-east-1.amazonaws.com/production/account', inputs)
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
            <label>
                Message:
              </label>
            <div className="center">
              <input
                type ="text"
                name = "message"
                value = {inputs.message || ""}
                onChange = {handleChange}
              />
            </div>
            <div className="center">
              <input
                className="formbutton"
                type ="submit"
              />
            </div>
          </form>
      </div>
    </>
  );
}

export default Login;