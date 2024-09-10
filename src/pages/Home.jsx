import React from 'react'
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
    const navigate = useNavigate();

    const survivalPage = () => navigate('/survival');
    return (
        <>
            <img
                src="src/Images/Inquizzitive-nobg.jpg"
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
                  onClick={survivalPage}
                >
                  Infinity
                </button>
                </div>
                <div className="center">
                <button 
                  className="button" 
                  onClick={survivalPage}
                >
                  Leaderboard
                </button>
                </div>
                <div className="center" style={{ margin: "auto" }}>
                <button 
                  className="button" 
                  onClick={survivalPage}
                >
                  Login
                </button>
                </div>
            </div>
        </>

    )
}

export default Home