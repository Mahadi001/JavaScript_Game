var scores, roundScores, activePlayer, dice;

scores = [0, 0];
roundScores = 0;
activePlayer = 0;
dice = Math.floor(Math.random() * 6) + 1;
document.querySelector("#pscore" + activePlayer).textContent = dice;
