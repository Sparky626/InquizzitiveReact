import React from "react";
import "../App.css";
import InquizzNoBg from '../Images/Inquizzitive-nobg.jpg';
import { useNavigate } from "react-router-dom";

function Infinity() {
    const navigate = useNavigate();
    const home = () =>  navigate('/');
    return (
      <>
      <img
        src={InquizzNoBg}
        height="350px"
        width="350px"
        className="splashimg"
        id="splashimg"
      />
      <div className="grid-container" id="grid">
        <div
          className="grid-item"
          id={9}
          onclick="igamestart(this.id,this.textContent)"
        >
          Random
        </div>
        <div
          className="grid-item"
          id={10}
          onclick="igamestart(this.id,this.textContent)"
        >
          Books
        </div>
        <div
          className="grid-item"
          id={11}
          onclick="igamestart(this.id,this.textContent)"
        >
          Film
        </div>
        <div
          className="grid-item"
          id={12}
          onclick="igamestart(this.id,this.textContent)"
        >
          Music
        </div>
        <div
          className="grid-item"
          id={13}
          onclick="igamestart(this.id,this.textContent)"
        >
          Musicals &amp; Theatres
        </div>
        <div
          className="grid-item"
          id={14}
          onclick="igamestart(this.id,this.textContent)"
        >
          Television
        </div>
        <div
          className="grid-item"
          id={15}
          onclick="igamestart(this.id,this.textContent)"
        >
          Video Games
        </div>
        <div
          className="grid-item"
          id={16}
          onclick="igamestart(this.id,this.textContent)"
        >
          Board Games
        </div>
        <div
          className="grid-item"
          id={17}
          onclick="igamestart(this.id,this.textContent)"
        >
          Science &amp; Nature
        </div>
        <div
          className="grid-item"
          id={18}
          onclick="igamestart(this.id,this.textContent)"
        >
          Computers
        </div>
        <div
          className="grid-item"
          id={19}
          onclick="igamestart(this.id,this.textContent)"
        >
          Mathematics
        </div>
        <div
          className="grid-item"
          id={20}
          onclick="igamestart(this.id,this.textContent)"
        >
          Mythology
        </div>
        <div
          className="grid-item"
          id={21}
          onclick="igamestart(this.id,this.textContent)"
        >
          Sports
        </div>
        <div
          className="grid-item"
          id={22}
          onclick="igamestart(this.id,this.textContent)"
        >
          Geography
        </div>
        <div
          className="grid-item"
          id={23}
          onclick="igamestart(this.id,this.textContent)"
        >
          History
        </div>
        <div
          className="grid-item"
          id={24}
          onclick="igamestart(this.id,this.textContent)"
        >
          Politics
        </div>
        <div
          className="grid-item"
          id={25}
          onclick="igamestart(this.id,this.textContent)"
        >
          Art
        </div>
        <div
          className="grid-item"
          id={26}
          onclick="igamestart(this.id,this.textContent)"
        >
          Celebrities
        </div>
        <div
          className="grid-item"
          id={27}
          onclick="igamestart(this.id,this.textContent)"
        >
          Animals
        </div>
        <div
          className="grid-item"
          id={28}
          onclick="igamestart(this.id,this.textContent)"
        >
          Vehicles
        </div>
        <div
          className="grid-item"
          id={29}
          onclick="igamestart(this.id,this.textContent)"
        >
          Comics
        </div>
        <div
          className="grid-item"
          id={30}
          onclick="igamestart(this.id,this.textContent)"
        >
          Gadgets
        </div>
        <div
          className="grid-item"
          id={31}
          onclick="igamestart(this.id,this.textContent)"
        >
          Anime &amp; Manga
        </div>
        <div
          className="grid-item"
          id={32}
          onclick="igamestart(this.id,this.textContent)"
        >
          Animation
        </div>
      </div>
      <div className="center">
        <img
          src="Images/Inquizzitive-nobg-logo.png"
          height="350px"
          width="350px"
          className="loadimg"
          id="loadimg"
        />
      </div>
      <div className="quiz" id="quiz">
        <h1 id="quizheader" />
        <div className="quizqs">
          <h2 id="question" />
          <div id="answer-buttons"></div>
          <div className="center">
            <button className="extbtn" id="exit" onclick="endGame()">
              End Loop!
            </button>
            <button className="nxtbtn" id="nxt">
              Next Question
            </button>
          </div>
        </div>
        <div className="scorecenter">
          <p>Score:</p>
          <p id="score">0</p>
        </div>
      </div>
      <div
        id="gameend"
        className="center"
        style={{ display: "none", paddingBottom: 0 }}
      >
        <img
          src="Images/Inquizzitive-nobg-logo.png"
          height="350px"
          width="350px"
          className="endimg"
          id="endimg"
        />
        <h1 id="gameover">Infinity Ended!</h1>
        <h1 id="fscore">Final Score: </h1>
      </div>
      <div className="center">
        <audio id="player" src="Music/Menu.mp3" />
        <button className="icnbtns" id="sound" onclick="muteunmute()">
          <i className="material-icons">volume_up</i>
        </button>
        <button className="icnbtns" onClick={home}>
          <i className="material-icons">home</i>
        </button>
      </div>
      </>
    );
}

export default Infinity;