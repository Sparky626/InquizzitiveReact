import React from 'react'
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
    const navigate = useNavigate();

    const survivalPage = () => navigate('/survival');
    const infinityPage = () => navigate('/infinity');
    const leaderboardPage = () => navigate('/leaderboard');
    const loginPage = () => navigate('/login');
    return (
        <>
            <img
                src=".src/Images/Inquizzitive-nobg.jpg"
                className="mainsplashimg"
                style={{ margin: "auto" }}
            />
            <div className="buttoncontainer">
                <div className="center" style={{ margin: "auto" }}>
                <button 
                  className="button" 
                  onClick={survivalPage}
                >
                  Survival
                </button>
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
                  className="button" 
                  onClick={loginPage}
                >
                  Login
                </button>
                </div>
            </div>
        </>

    )
}

export default Home