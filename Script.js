//alert("hello this message is from alert");

//document.write("<h1> Hello welcome to javascript</h1>");

//console.log("welcome to console");

// var Fname = "Sayali"; //variable creation
// document.write("<h3>String in double quotes: " +Fname+ "</h3>"); // print variable value in html tags

// var Lname = 'Pisal'; 
// document.write("<h3>String in single quotes: " +Lname+ "</h3>");

// document.write('<h3> Sayali\'s .......by using backslash </h3>'); // escape sequence \'

// document.write("<h3>Concat first name and last name: "+ Fname +" "+Lname +"<h3>"); //concat string

//alert("Addition of 5+2 is " +(5+2)); // alert perform addition 

// var upperCase = Fname.toUpperCase(); // to upper case
// document.write("<h3>First name in upper case: " +upperCase+ "</h3>");

// document.write("<h3> Lenght of Last Name is: "+Lname.length+"</h3>");// lentgh of variable

//var a = parseInt(prompt(" Please enter value of a ")); //input value from user
//var b = parseInt(prompt("Please enter value of b "));

//document.write("<h3> Addition of a and b: "  +(a+b)+"</h3>"); //  prompt returns string so a and b concat hence first a and b convert into int

// document.write("<h3> String Interpolation is given below. </h3>");
// document.write(`<h4> My name is ${Fname} ${Lname} </h4>`);// String Interpolation


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

// //Generate a random number till the value input  by user.

// var userInput = parseInt(prompt("Enter the value"));

// var randomNumber = Math.floor(Math.random() * userInput);
// alert("random no from 0 to "+userInput+ " is "+randomNumber);


// //Generate a random number till between two values generate by user.

// var startValue = parseInt(prompt("Enter start value "));
// var endValue = parseInt(prompt("Enter end value "));
// var randomNumber = (Math.random () * (endValue- startValue + 1) + startValue);
// console.log(randomNumber);



// Make one program with if statement , one with else statement and
// and came the case of uppercase.
// var answer = prompt('What programming language is the name of your gem?');
// 	if(answer.toUpperCase() === 'RUBY')
// 	{
// 		document.write("<p> That's right </p>");
// 	} 
// 	else 
// 	{
//        document.write("<p> Sorry , that's wrong .</p>")
//      }


//quiz

// var correct = 0;

// var ans = prompt("Name a programming language that's also a gem?");
// if(ans.toUpperCase() === "RUBY")
// {
// 	correct += 1;
// 	console.log(correct);
// 	console.log(ans);
// }
// var ans1 = prompt("Name a programming language that's also the name of snake?");
//  if(ans1.toUpperCase() === "PYTHON")
// {
// 	correct += 1;
// 	console.log(correct);
// 	console.log(ans1);
// }

// var ans2 = prompt("What are the languages you do to style the web pages");
// if(ans2.toUpperCase() === "CSS" )
// {
// 	correct += 1;
// 	console.log(correct);
// 	console.log(ans2);
// }
// var ans3 = prompt("What are the languages you to structure the web pages?");
// if(ans3.toUpperCase() === "HTML" )
// {
// 	correct += 1;
// 	console.log(correct);
// 	console.log(ans3);
// }
// var ans4 = prompt("What are the languages you do to increase the interactivity of the webpages ");
// if(ans4.toUpperCase() === "JAVASCRIPT" )
// {
// 	correct += 1;
// 	console.log(correct);
// 	console.log(ans4);
// }

// if(correct == 5)
// {
// 	document.write("Gold");
// }else if(correct >=3 )
// {
// 	document.write("silver");
// }else if(correct >= 1)
// {
// 	document.write("brownse");
// }



// //Random number guess

// var randomNumber = Math.floor(Math.random() * 6) + 1 ;
// var guess = parseInt(prompt("Enter your guess for for random number between 1 to 6"));
// console.log(randomNumber);
// if(randomNumber === guess)
// {
//     document.write("<h3> Your guess is correct</h3>");
// }
// else
// {
//     document.write("<h3> Your guess is incorrect</h3>");
// }


// // Boolean values

// var randomNumber = Math.floor(Math.random() * 6) + 1 ;
// var guess = parseInt(prompt("Enter your guess for for random number between 1 to 6"));
// console.log(randomNumber);
// var correctGuess = false ;
// if(randomNumber === guess)
// {
//    correctGuess = true;
// }

// if(correctGuess)
// {
//     document.write("<h3> Your guess is correct</h3>");
// }
// else
// {
//     document.write("<h3> Your guess is incorrect</h3>");
// }


// The Random Number Guessing Game Generates a number between 1 to 6
// and gives a player who attemps to guess the number.

// var randomNumber = Math.floor(Math.random() * 6) + 1 ;
// var guess = parseInt(prompt("Enter your guess for for random number between 1 to 6"));
// console.log(randomNumber);
// var correctGuess = false ;

// if(randomNumber === guess)
// {
//    correctGuess = true;
// }
// else if(randomNumber < guess)
// {
//     guess = parseInt(prompt("Your guess is greater than random number ....please try again"));
//     if(randomNumber === guess)
//     {
//         correctGuess = true;
//     }
// }
// else if(randomNumber > guess)
// {
//     guess = parseInt(prompt("Your guess is less than random number ....please try again"));
//     if(randomNumber === guess)
//     {
//         correctGuess = true;
//     }
// }

// if(correctGuess)
// {
//     document.write("<h3> Your guess is correct</h3>");
// }
// else
// {
//     document.write("<h3> Your guess is incorrect</h3>");
// }