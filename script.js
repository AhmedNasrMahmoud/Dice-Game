//Variables for random number generators for dice
var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;
//Variables that render images based on the number generated in dice
var img1 = document.querySelector('.player1').setAttribute("src", "images/dice" + dice1 + ".png");
var img2 = document.querySelector('.player2').setAttribute("src", "images/dice" + dice2 + ".png");
//Announce the winners
if (dice1 > dice2) {
  document.querySelector('.winner').innerHTML = "Player 1 is the winner!";
}
else if (dice1 == dice2) {
  document.querySelector('.winner').innerHTML = "It's a draw!";
}
else {
  document.querySelector('.winner').innerHTML = "Player 2 is the winner!";
}
