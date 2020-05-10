var scores, roundScores, activePlayer, gamePlaying;
gamePlaying = true;
newGame();

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6) + 1;

    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "img/" + dice + ".png";

    if (dice !== 1) {
      roundScores += dice;
      document.getElementById(
        "pscore" + activePlayer
      ).textContent = roundScores;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    scores[activePlayer] += roundScores;
    document.querySelector("#gscore" + activePlayer).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      document.querySelector("#gscore" + activePlayer).textContent = "Winner";
      gamePlaying = false;
    }
    nextPlayer();
  }
});

document.querySelector(".btn-new").addEventListener("click", newGame);

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScores = 0;
  document.getElementById("pscore0").textContent = "0";
  document.getElementById("pscore1").textContent = "0";

  document.querySelector(".left").classList.toggle("active");
  document.querySelector(".right").classList.toggle("active");

  document.querySelector(".dice").style.display = "none";
}

function newGame() {
  scores = [0, 0];
  roundScores = 0;
  activePlayer = 0;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("gscore0").textContent = "0";
  document.getElementById("gscore1").textContent = "0";
  document.getElementById("pscore0").textContent = "0";
  document.getElementById("pscore1").textContent = "0";
}
