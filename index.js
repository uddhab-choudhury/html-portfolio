var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6
var randomImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll('img')[0];
image1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomImage2;

var image2 = document.querySelectorAll('img')[1];
image2.setAttribute("src", randomImageSource2);


//if loop:-

if (randomNumber1 > randomNumber2) {
    document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML = "Player 1 wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML = "Player 2 wins!";
}
else if (randomNumber1 === randomNumber2) {
        document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML = "It's a draw!";
}