var scores, roundScores, activePlayer;

scores = [0, 0];
roundScores = 0;
activePlayer = 0;

document.querySelector(".dice").style.display = "none";

document.getElementById("gscore0").textContent = "0";
document.getElementById("gscore1").textContent = "0";
document.getElementById("pscore0").textContent = "0";
document.getElementById("pscore1").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", function () {
  //This line is generating random numbers from 1 to 6
  var dice = Math.floor(Math.random() * 6) + 1;

  var diceDom = document.querySelector(".dice");
  diceDom.style.display = "block";
  diceDom.src = "img/" + dice + ".png";

  if (dice !== 1) {
    roundScores += dice;
    document.getElementById("pscore" + activePlayer).textContent = roundScores;
  } else {
    nextPlayer();
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  scores[activePlayer] += roundScores;
  document.querySelector("#gscore" + activePlayer).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 100) {
    document.querySelector("#gscore" + activePlayer).textContent = "Winner";
  }
  nextPlayer();
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScores = 0;
  document.getElementById("pscore0").textContent = "0";
  document.getElementById("pscore1").textContent = "0";

  document.querySelector(".left").classList.toggle("active");
  document.querySelector(".right").classList.toggle("active");

  document.querySelector(".dice").style.display = "none";
}
