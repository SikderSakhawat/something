function initialize(){
    outputDiv = document.getElementById("numLog");
    outputDiv.innerHTML = "";
    outputDiv = document.getElementById("result");
    targetNum = parseInt(100 * Math.random());
    chosenNum = 50;
    numGuesses = 5;
    quitter = document.getElementById("quit");
}
// Determines how close the guess is to the actual target
function commitGuess(){
    outputDiv = document.getElementById("result");
    if(chosenNum == targetNum){
       quitter.innerHTML = "<h2>Wow, the cave opened! Lets get out!<h2><a href=" + "Outside.html" + ">Freedom!</a>";
    } else if(chosenNum >= targetNum - 5 && chosenNum <= targetNum + 5){
        outputDiv.innerHTML = "Your number is Very Hot, guess again.";
    } else if(chosenNum >= targetNum - 8 && chosenNum <= targetNum + 8){
        numGuesses--;
        (numGuesses < 1) ? quitter.innerHTML = "<h2>Oh no! The monsters got to you and you died. <br/><a href=" + "House.html" + ">Reset Life</a>" :
        outputDiv.innerHTML = "Your number is Hot, you have " + numGuesses + " guesses left.";
    } else if(chosenNum >= targetNum - 15 && chosenNum <= targetNum + 15){
        numGuesses--;
        (numGuesses < 1) ? quitter.innerHTML = "<h2>Oh no! The monsters got to you and you died. <br/><a href=" + "House.html" + ">Reset Life</a>" :
        outputDiv.innerHTML = "Your number is Very Warm, you have " + numGuesses + " guesses left.";
    } else if(chosenNum >= targetNum - 20 && chosenNum <= targetNum + 20){
        numGuesses--;
        (numGuesses < 1) ? quitter.innerHTML = "<h2>Oh no! The monsters got to you and you died. <br/><a href=" + "House.html" + ">Reset Life</a>" :
        outputDiv.innerHTML = "Your number is Warm, you have " + numGuesses + " guesses left.";
    } else if(chosenNum >= targetNum - 30 && chosenNum <= targetNum + 30){
        numGuesses--;
        (numGuesses < 1) ? quitter.innerHTML = "<h2>Oh no! The monsters got to you and you died. <br/><a href=" + "House.html" + ">Reset Life</a>" :
        outputDiv.innerHTML = "Your number is Cool, you have " + numGuesses + " guesses left.";
    } else if(chosenNum >= targetNum - 40 && chosenNum <= targetNum + 40){
        numGuesses--;
        (numGuesses < 1) ? quitter.innerHTML = "<h2>Oh no! The monsters got to you and you died. <br/><a href=" + "House.html" + ">Reset Life</a>" :
        outputDiv.innerHTML = "Your number is Very Cool, you have " + numGuesses + " guesses left.";
    } else if(chosenNum >= targetNum - 50 && chosenNum <= targetNum + 50){
        numGuesses--;
        (numGuesses < 1) ? quitter.innerHTML = "<h2>Oh no! The monsters got to you and you died. <br/><a href=" + "House.html" + ">Reset Life</a>" :
        outputDiv.innerHTML = "Your number is Cold, you have " + numGuesses + " guesses left.";
    } else {
        numGuesses--;
        (numGuesses < 1) ? quitter.innerHTML = "<h2>Oh no! The monsters got to you and you died. <br/><a href=" + "House.html" + ">Reset Life</a>" :
        outputDiv.innerHTML = "Your number is Very Cold, you have " + numGuesses + " guesses left.";
    }
    logNum();
}
// Logs the guessed number, the accuracy of the guess, and the number of guesses remaining 
function logNum(){
    outputDiv = document.getElementById("numLog");
    if(chosenNum == targetNum){
        outputDiv.innerHTML += chosenNum + ", Target Number, " + numGuesses + " guesses remaining.  |  ";
    } else if(chosenNum >= targetNum - 5 && chosenNum <= targetNum + 5){
        outputDiv.innerHTML += chosenNum + ", Very Hot, " + numGuesses + " guesses remaining.  |  ";
    } else if(chosenNum >= targetNum - 8 && chosenNum <= targetNum + 8){
        outputDiv.innerHTML += chosenNum + ", Hot, " + numGuesses + " guesses remaining.  |  ";
    } else if(chosenNum >= targetNum - 15 && chosenNum <= targetNum + 15){
        outputDiv.innerHTML += chosenNum + ", Very Warm, " + numGuesses + " guesses remaining.  |  ";
    } else if(chosenNum >= targetNum - 20 && chosenNum <= targetNum + 20){
        outputDiv.innerHTML += chosenNum + ", Warm, " + numGuesses + " guesses remaining.  |  ";
    } else if(chosenNum >= targetNum - 30 && chosenNum <= targetNum + 30){
        outputDiv.innerHTML += chosenNum + ", Cool, " + numGuesses + " guesses remaining.  |  ";
    } else if(chosenNum >= targetNum - 40 && chosenNum <= targetNum + 40){
        outputDiv.innerHTML += chosenNum + ", Very Cool, " + numGuesses + " guesses remaining.  |  ";
    } else if(chosenNum >= targetNum - 50 && chosenNum <= targetNum + 50){
        outputDiv.innerHTML += chosenNum + ", Cold, " + numGuesses + " guesses remaining.  |  ";
    } else {
        outputDiv.innerHTML += chosenNum + ", Very Cold, " + numGuesses + " guesses remaining.  |  ";
    }
}
// Functions that add/subtract in order to choose a number
function addOne(){
    if(chosenNum + 1 > 100){
        chosenNum = 100;
    } else {
        chosenNum++;
    }
    outputDiv.innerHTML = `Current Number: ${chosenNum}`;
}
function subOne(){
    if(chosenNum - 1 < 1){
        chosenNum = 1;
    } else {
        chosenNum--;
    }
    outputDiv.innerHTML = `Current Number: ${chosenNum}`;
}
function addFive(){
    if(chosenNum + 5 > 100){
        chosenNum = 100;
    } else {
        chosenNum += 5;
    }
    outputDiv.innerHTML = `Current Number: ${chosenNum}`;
}
function subFive(){
    if(chosenNum - 5 < 1){
        chosenNum = 1;
    } else {
        chosenNum -= 5;
    }
    outputDiv.innerHTML = `Current Number: ${chosenNum}`;
}
function add25(){
    if(chosenNum + 25 > 100){
        chosenNum = 100;
    } else {
        chosenNum += 25;
    }
    outputDiv.innerHTML = `Current Number: ${chosenNum}`;
}
    ()=> {
    (chosenNum - 25 < 1) ? chosenNum = 1 : chosenNum -= 25;
    outputDiv.innerHTML = `Current Number: ${chosenNum}`;
}