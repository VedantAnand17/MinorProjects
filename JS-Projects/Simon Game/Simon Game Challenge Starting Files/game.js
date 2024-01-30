//Random colors
var buttonColors = ["red", "blue", "green", "yellow"];
//Array of colors used
var gamePattern = [];
//Array of buttons clicked
var userClickedPattern = [];

var started = false;

var level = 0;

var currentLevel = userClickedPattern.length - 1;

$(".btn").click(function () {
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
})

function checkAnswer (currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout( function () {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");
        $("body").addClass("game-over");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();

    }
}

$(document).keydown(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})

function nextSequence() {
    userClickedPattern = [];

    level++;

    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*4);
    
    var randomChosenColor = buttonColors[randomNumber];    
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

}


function playSound (name) {
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

function animatePress (currentColor) {
        
    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    } , 100);
}

function startOver () {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
    currentLevel = 0;
}