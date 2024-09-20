import React from "react";
import "../App.css";
import InquizzNoBg from '../Images/Inquizzitive-nobg.jpg';
import { useNavigate } from "react-router-dom";
import { muteunmute } from "../main";

function Leaderboard() {
    const navigate = useNavigate();
    const home = () =>  navigate('/');
    return (
      <>
        <img
          src={InquizzNoBg}
          height="150px"
          width="150px"
          className="leadersplashimg"
          id="leadersplashimg"
        />
        <div className="leaderboard" id="leaderboard">
          <h2>Top 5 Infinity</h2>
          <div>
            <h3>Scorer 1</h3>
            <h3>Scorer 2</h3>
            <h3>Scorer 3</h3>
            <h3>Scorer 4</h3>
            <h3>Scorer 5</h3>
          </div>
          <h2>Top 5 Survival</h2>
          <div>
            <h3>Scorer 1</h3>
            <h3>Scorer 2</h3>
            <h3>Scorer 3</h3>
            <h3>Scorer 4</h3>
            <h3>Scorer 5</h3>
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

    );
}

export default Leaderboard;