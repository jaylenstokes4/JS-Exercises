//this doesnt work in live server- open thru explorer
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)

let userGuess = prompt("Can you guess the number Im thinking of?",
    "Its between 1-100");
let userAnswer = parseInt(userGuess);
if (isNaN(userGuess)) {
    alert("Are you Joking?");
} else {
    if (userAnswer < randomNumber) {
        alert("Aim higher, try again.");
    } else if (userAnswer > randomNumber) {
        alert("Thats too Damn High! Try another guess.");
    } else {
        alert("Thats it ╰(*°▽°*)╯ Congrats!!!");
    }
}
while (true) {
    let userGuess = prompt("Can you guess the number Im thinking of?",
        "Its between 1-100");
    let userAnswer = parseInt(userGuess);
    if (isNaN(userGuess)) {
        alert("Are you Joking?");
    } else {
        if (userAnswer < randomNumber) {
            alert("Aim higher, try again.");
        } else if (userAnswer > randomNumber) {
            alert("Thats too Damn High! Try another guess.");
        } else {
            alert("Thats it ╰(*°▽°*)╯ Congrats!!!");
        }
    }
    if(userAnswer == randomNumber){
        randomNumber = Math.floor(Math.random() * 100) + 1;
    }
}
