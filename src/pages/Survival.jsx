import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Survival() {
    const navigate = useNavigate();
    const home = () =>  navigate('/');
    return (
      <>
      <img
        src="src/Images/Inquizzitive-nobg.jpg"
        height="350px"
        width="350px"
        className="splashimg"
        id="splashimg"
      />
      <div className="grid-container" id="grid">
        <div
          className="grid-item"
          id={9}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Random
        </div>
        <div
          className="grid-item"
          id={10}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Books
        </div>
        <div
          className="grid-item"
          id={11}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Film
        </div>
        <div
          className="grid-item"
          id={12}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Music
        </div>
        <div
          className="grid-item"
          id={13}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Musicals &amp; Theatre
        </div>
        <div
          className="grid-item"
          id={14}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Television
        </div>
        <div
          className="grid-item"
          id={15}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Video Games
        </div>
        <div
          className="grid-item"
          id={16}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Board Games
        </div>
        <div
          className="grid-item"
          id={17}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Science &amp; Nature
        </div>
        <div
          className="grid-item"
          id={18}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Computers
        </div>
        <div
          className="grid-item"
          id={19}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Mathematics
        </div>
        <div
          className="grid-item"
          id={20}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Mythology
        </div>
        <div
          className="grid-item"
          id={21}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Sports
        </div>
        <div
          className="grid-item"
          id={22}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Geography
        </div>
        <div
          className="grid-item"
          id={23}
          onclick="sgamestart(this.id,this.textContent)"
        >
          History
        </div>
        <div
          className="grid-item"
          id={24}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Politics
        </div>
        <div
          className="grid-item"
          id={25}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Art
        </div>
        <div
          className="grid-item"
          id={26}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Celebrities
        </div>
        <div
          className="grid-item"
          id={27}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Animals
        </div>
        <div
          className="grid-item"
          id={28}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Vehicles
        </div>
        <div
          className="grid-item"
          id={29}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Comics
        </div>
        <div
          className="grid-item"
          id={30}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Gadgets
        </div>
        <div
          className="grid-item"
          id={31}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Anime &amp; Manga
        </div>
        <div
          className="grid-item"
          id={32}
          onclick="sgamestart(this.id,this.textContent)"
        >
          Animation
        </div>
      </div>
      <div className="center">
        <img
          src="src/Images/Inquizzitive-nobg-logo.png"
          height="350px"
          width="350px"
          className="loadimg"
          id="loadimg"
        />
      </div>
      <div className="quiz" id="quiz">
        <h1 id="quizheader">Simple Quiz</h1>
        <div className="quizqs">
          <h2 id="question" />
          <div id="answer-buttons"></div>
          <button className="nxtbtn" id="nxt">
            Next Question
          </button>
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
        <h1 id="gameover">Game Over</h1>
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

export default Survival;