import React from 'react'
import InquizzNoBg from '../Images/Inquizzitive-nobg.jpg';
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useRef, useState, useEffect } from "react";

function Home() {

    const navigate = useNavigate();
    const survivalPage = () => navigate('/survival');
    const infinityPage = () => navigate('/infinity');
    const leaderboardPage = () => navigate('/leaderboard');
    const loginPage = () => navigate('/login');
    const handleLogout = () =>{
      const login = document.getElementById('login');
      const logout = document.getElementById('logout');
      logout.style.display = "block";
      login.style.display = "none";
      localStorage.clear();
      window.location.reload();     
    }
    useEffect(() => {
      const loggedInUser = localStorage.getItem('user');
      if(loggedInUser) {
          const user = document.getElementById('user');
          const login = document.getElementById('login');
          const logout = document.getElementById('logout');
          logout.style.display = "block";
          login.style.display = "none";
          user.innerHTML = "User: " + loggedInUser;
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
                <button 
                  className="button" 
                  onClick={survivalPage}
                >
                  Survival
                </button>
                <div className="space">

                </div>
                <button 
                  className="button" 
                  onClick={infinityPage}
                >
                  Infinity
                </button>
                </div>
                <div className="center">
                <button 
                  className="button" 
                  onClick={leaderboardPage}
                >
                  Leaderboard
                </button>
                </div>
                <div className="center" style={{ margin: "auto" }}>
                <button 
                  id = "login"
                  className="button" 
                  onClick={loginPage}
                >
                  Login
                </button>
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
            <h2 id = "user" className='center' style={{marginTop: "15px", animation: "fadeIn 2.0s"}}></h2>
            <div className="center">
              
              <audio id="player" src="Music/Menu.mp3" />
              <button className="icnbtns" id="sound">
                <i className="material-icons">volume_up</i>
              </button>
            </div>
        </>

    )
}

export default Home