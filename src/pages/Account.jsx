import React from 'react'
import InquizzNoBg from '../Images/Inquizzitive-nobg.jpg';
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useRef, useState, useEffect } from "react";
import { muteunmute } from '../main';

function Home() {

    const navigate = useNavigate();
    const home = () => navigate('/');
    const loginPage = () => navigate('/login');
    const handleLogout = () =>{
      const login = document.getElementById('login');
      const logout = document.getElementById('logout');
      const survivalscore = document.getElementById('survivalscore');
      const infinityscore = document.getElementById('infinityscore');
      const user = document.getElementById('user');
      login.style.display = "none";
      user.style.display = "none";
      infinityscore.style.display = "none";
      survivalscore.style.display = "none";
      logout.style.display = "block";
      localStorage.clear();
      window.location.reload();     
    }
    useEffect(() => {
      const loggedInUser = localStorage.getItem('user');
      if(loggedInUser) {
          const user = document.getElementById('user');
          const login = document.getElementById('login');
          const logout = document.getElementById('logout');
          const survivalscore = document.getElementById('survivalscore');
          const infinityscore = document.getElementById('infinityscore');
          survivalscore.style.display = "block";
          infinityscore.style.display = "block";
          logout.style.display = "block";
          user.style.display = "block";
          login.style.display = "none";
          user.innerHTML = loggedInUser;
          survivalscore.innerHTML = "Survival High Score: " + localStorage.getItem('survivalscore');
          infinityscore.innerHTML = "Infinity High Score: " + localStorage.getItem('infinityscore');
      }
      else{
        console.log("No one is logged in!");
      }
    },[])

    return (
        <>
            <img
                src = {InquizzNoBg}
                className="mainsplashimg"
                style={{ margin: "auto" }}
                alt = "not loading"
            />
            <div className="buttoncontainer">
                <div className="center">
                <h2 id = "user" className='center' style={{display : "none" , marginTop: "15px", animation: "fadeIn 2.0s"}}></h2>
                <h2 id = "survivalscore" className='center' style={{display : "none" , marginTop: "15px", animation: "fadeIn 2.0s"}}></h2>
                <h2 id = "infinityscore" className='center' style={{display : "none" , marginTop: "15px", animation: "fadeIn 2.0s"}}></h2>
                <button 
                  id = "logout"
                  className="button" 
                  style={{display: "none", animation: "fadeIn 2.0s"}}
                  onClick={handleLogout}
                >
                  Logout
                </button>
                </div>
            </div>
            
            <div className="center">
              <button className="icnbtns" id="sound" onClick={muteunmute}>
                <i className="material-icons">volume_up</i>
              </button>
              <button className="icnbtns" onClick={home}>
                <i className="material-icons">home</i>
              </button>
            </div>
        </>

    )
}

export default Home