// // Let the player know how many questios are remained to be answer.

// var questios = 3;

// var name = prompt("Enter your name");
// questios--;
// alert("2 questios remained");

// var age = prompt("Enter your age");
// questios--;
// alert("1 questios remained");

// var address = prompt("Enter your address") ;
// questios -= 1 ;//questions = questions - 1
// alert("No question remained ....Thank you");
// document.write(`My name is ${name} .I am ${age} years old. I live in ${address}.`);

// //Rolling the dice

// var dice = Math.floor(Math.random() * 6 ) + 1;
// console.log("you have rolled the number" +dice);

// // Generate a random number till the value input  by user.

// var userInput = parseInt(prompt("Enter the value"));

// var randomNumber = Math.floor(Math.random() * userInput);
// alert("random no from 0 to "+userInput+ " is "+randomNumber);


// //Generate a random number till between two values generate by user.

var startValue = parseInt(prompt("Enter start value "));
var endValue = parseInt(prompt("Enter end value "));
var randomNumber = Math.floor((Math.random () * (endValue- startValue + 1) + startValue));
console.log(randomNumber);



