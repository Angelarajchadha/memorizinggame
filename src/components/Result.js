import React from "react";

const Result = ({ score, playAgain, total }) => (
  <div className="score-board">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div className="score">
      <span>You scored {score} / {total} correct answers!</span>
    </div>
    <a className="playagain" href="/memorizinggame" >
      Play again!
    </a>

  </div>
);

export default Result;
