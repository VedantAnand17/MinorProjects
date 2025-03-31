// Function to roll the dice
function rollDice() {
    const imgLeft = document.querySelectorAll("img")[0];
    const imgRight = document.querySelectorAll("img")[1];

    // Add animation class
    imgLeft.style.animation = 'roll 0.5s';
    imgRight.style.animation = 'roll 0.5s';

    // Remove animation class after animation ends
    setTimeout(() => {
        imgLeft.style.animation = '';
        imgRight.style.animation = '';

        var randomNumber1 = Math.floor((Math.random() * 6) + 1);
        var linkImg = ("images/dice" + randomNumber1 + ".png");
        imgLeft.setAttribute('src', linkImg);

        var randomNumber2 = Math.floor((Math.random() * 6) + 1);
        var linkImg2 = ("images/dice" + randomNumber2 + ".png");
        imgRight.setAttribute('src', linkImg2);

        const h1 = document.querySelector("h1");
        if (randomNumber1 > randomNumber2) {
            h1.innerHTML = 'Player1 wins.';
        } else if (randomNumber1 < randomNumber2) {
            h1.innerHTML = 'Player2 wins.';
        } else {
            h1.innerHTML = 'Both Tied.';
        }
    }, 500);
}

// Add event listener to the roll button
document.getElementById('rollButton').addEventListener('click', rollDice);