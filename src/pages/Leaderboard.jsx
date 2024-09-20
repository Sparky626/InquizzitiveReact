import React, { useEffect } from "react";
import "../App.css";
import InquizzNoBg from '../Images/Inquizzitive-nobg.jpg';
import { useNavigate } from "react-router-dom";
import { muteunmute } from "../main";
import axios from "axios";
let Leaderboardfilled = false;
let db = new Array();
let survival = new Array();
let infinity = new Array();
function Leaderboard() {
    const navigate = useNavigate();
    const home = () =>  navigate('/');
    useEffect(() => {
      if (Leaderboardfilled == false){
          const instance = axios.create({
            baseURL: 'https://ocqgyz1dnd.execute-api.us-east-1.amazonaws.com/production/account',
            withCredentials: false,
            headers: {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
              }
          });
          instance.get('https://ocqgyz1dnd.execute-api.us-east-1.amazonaws.com/production/accounts')
          .then(function (response){
            for (const key in response.data){
              response.data[key].reverse().forEach(item => {
                db.push(item);
              });
            }
            db.sort(function(a, b){
              return b.infinityscore - a.infinityscore;
            });
            console.log("setting up leaderboard");
            const sscore1 = document.getElementById('sscore1');
            const sscore2 = document.getElementById('sscore2');
            const sscore3 = document.getElementById('sscore3');
            const sscore4 = document.getElementById('sscore4');
            const sscore5 = document.getElementById('sscore5');
            const iscore1 = document.getElementById('iscore1');
            const iscore2 = document.getElementById('iscore2');
            const iscore3 = document.getElementById('iscore3');
            const iscore4 = document.getElementById('iscore4');
            const iscore5 = document.getElementById('iscore5');
            iscore1.innerHTML = "1. " + db[0].username + " - " + db[0].infinityscore;
            iscore2.innerHTML = "2. " + db[1].username + " - " + db[1].infinityscore;
            iscore3.innerHTML = "3. " + db[2].username + " - " + db[2].infinityscore;
            iscore4.innerHTML = "4. " + db[3].username + " - " + db[3].infinityscore;
            iscore5.innerHTML = "5. " + db[4].username + " - " + db[4].infinityscore;
            db.sort(function(a, b){
              return b.survivalscore - a.survivalscore;
            });
            sscore1.innerHTML = "1. " + db[0].username + " - " + db[0].survivalscore;
            sscore2.innerHTML = "2. " + db[1].username + " - " + db[1].survivalscore;
            sscore3.innerHTML = "3. " + db[2].username + " - " + db[2].survivalscore;
            sscore4.innerHTML = "4. " + db[3].username + " - " + db[3].survivalscore;
            sscore5.innerHTML = "5. " + db[4].username + " - " + db[4].survivalscore;
            

          });
          
          
      }
      Leaderboardfilled = true;
    },[])
    

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
          <h2 style={{textDecoration: "underline"}}>Top 5 Infinity</h2>
          <div>
            <h3 id = "iscore1">Scorer 1</h3>
            <h3 id = "iscore2">Scorer 2</h3>
            <h3 id = "iscore3">Scorer 3</h3>
            <h3 id = "iscore4">Scorer 4</h3>
            <h3 id = "iscore5">Scorer 5</h3>
          </div>
          <h2 style={{textDecoration: "underline"}}>Top 5 Survival</h2>
          <div>
            <h3 id = "sscore1">Scorer 1</h3>
            <h3 id = "sscore2">Scorer 2</h3>
            <h3 id = "sscore3">Scorer 3</h3>
            <h3 id = "sscore4">Scorer 4</h3>
            <h3 id = "sscore5">Scorer 5</h3>
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