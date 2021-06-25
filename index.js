var random_no1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg1 = "dice" + random_no1 + ".png";

var randomImgSrc1 = "images/" + randomDiceImg1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSrc1);


var random_no2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg2 = "dice" + random_no2 + ".png";

var randomImgSrc2 = "images/" + randomDiceImg2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImgSrc2);


if (random_no1 > random_no2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}

else if(random_no2 > random_no1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

else {
  document.querySelector("h1").innerHTML = "Draw Match!";
}
