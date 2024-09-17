import React from "react";
import axios from 'axios';
import "../App.css";
import InquizzNoBg from '../Images/Inquizzitive-nobg.jpg';
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import CreateAccount from "./CreateAccount";

function Login () {
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [email, pwd])

  const navigate = useNavigate();
  const home = () => navigate('/');
  const createaccountpage = () =>  navigate('/createaccount');
  /*const [inputs, setInputs] = useState("");
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
  };*/
  const handleSubmit = async (e) =>{
      e.preventDefault();
      console.log(email, pwd);
      setEmail('');
      setPwd('');
      setEmail(email.toLowerCase());
      const instance = axios.create({
        baseURL: 'https://ocqgyz1dnd.execute-api.us-east-1.amazonaws.com/production/account',
        withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          }
      });
      instance.get('https://ocqgyz1dnd.execute-api.us-east-1.amazonaws.com/production/account?email='+ email)
      .then(function (response){
        console.log(response);
        if(response.status == 200 && response.data != null && response.data.password == pwd){
          alert(response.data.message);
          navigate('/');
        }
        else{
          alert("Incorrect Login!");
            /*instance.post('https://ocqgyz1dnd.execute-api.us-east-1.amazonaws.com/production/account', )
            .then(function (response){
              console.log(response);
            })
            .catch(function (error){
              console.log(error);
            });
            navigate("/login");*/
        }
      })

  }
  
  return (
    <>
      {success ? (
                <section>
                    <h1 style={{animation: "fadeIn 2.0s"}}>You are logged in!</h1>
                    <br />
                    <p>
                    <button className="icnbtns" onClick={home}>
                      <i className="material-icons">home</i>
                    </button>
                    </p>
                </section>
        ) : (
        <section>
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
                    ref = {userRef}
                    autoCapitalize="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value = {email}
                    required
                  />
                </div>
                <label>
                    Password: 
                  </label>
                <div className="center">
                  <input
                    type ="password"
                    name = "password"
                    onChange={(e) => setPwd(e.target.value)}
                    value = {pwd}
                    required
                  />
                </div>
                <div className="center" style={{marginTop: "15px"}}>
                  <input
                    className="formbutton"
                    type ="submit"
                    value = "Login"
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
        </section>
      )}
    </>
  );
}

export default Login;