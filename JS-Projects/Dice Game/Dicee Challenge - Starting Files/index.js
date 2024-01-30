var randomNumber1 = Math.floor((Math.random()*6)+1);

var linkImg = ("images/dice"+randomNumber1+".png");
const imgLeft = document.querySelectorAll("img")[0];
imgLeft.setAttribute('src', linkImg);

var randomNumber2 = Math.floor((Math.random()*6)+1);

var linkImg2 = ("images/dice"+randomNumber2+".png");
const imgRight = document.querySelectorAll("img")[1];
imgRight.setAttribute('src', linkImg2);

const h1 = document.querySelector("h1");
if(randomNumber1>randomNumber2){
    h1.innerHTML = 'Player1 wins.';
}
else if(randomNumber1<randomNumber2){
    h1.innerHTML = 'Player2 wins.';
}
else{
    h1.innerHTML = 'Both Tied.';
}