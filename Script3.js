// // Make one program with if statement , one with else statement and
// //and came the case of uppercase.

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


// // The Random Number Guessing Game Generates a number between 1 to 6
// // and gives a player who attemps to guess the number.

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