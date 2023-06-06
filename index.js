var randomNumber = Math.floor(Math.random() * 6) + 1; //Generates a number between 1 and 6

var randomDiceImage = "dice" + randomNumber + ".png"; //Adds random number into dice(1-6).png

var randomImageSource = "images/" + randomDiceImage; // Selects the random .png from the images folder 

var image1 = document.querySelectorAll("img")[0]; // Selects the image at position 0 (first image) 

image1.setAttribute("src", randomImageSource); //Set the random image that was generated to the image1 variable


var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; 

var randomImageSource2= "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber){
    document.querySelector("h1").innerHTML = " Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}