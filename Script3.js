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
//    document.write("<h3> Your guess is incorrect</h3>");
// }


//fuction declaration

 
// function randomNumber()
// {
//     var randomNumber = Math.floor(Math.random() * 6)+1 ;
//     return randomNumber;
// }

// document.write(randomNumber());
// alert("Random number "+randomNumber());
// var number = randomNumber();
// console.log(number);


// // function expression

// var randomNumber = function()
// {
//     return Math.floor(Math.random() * 6) +1;
// }

// document.write(randomNumber());


// // Variable scope

// var x = 10 ;
// function print()
// {
//     var x = 20;
//     x += 10;
//     return x;
// }

// document.write(x); //10
// document.write(print());//30
// document.write(x); //10

// Keeping two variable different

// var wakeUp = "Hello";
// function writingVar(){
//   var wakeUp = "Sid";
//   return wakeUp;
// }
// alert(writingVar());
// alert(wakeUp);

// Changing global varaible inside a varaible .

// var wakeUp = "Hello";
// function writingVar(){
//    wakeUp = "Sid";
//   return wakeUp;
// }
// alert(wakeUp);
// alert(writingVar());

// var wakeUp = "Hello";
// function writingVar(){
//    wakeUp = "Sid";
//   return wakeUp;
// }
//
// alert(writingVar());
// alert(wakeUp);



// //Fuction with one parameter

// function randomNumber(upper)
// {
//     return Math.floor(Math.random() * upper) +1;
// }

// console.log(randomNumber(9));
// console.log(randomNumber(99));
// console.log(randomNumber(999));


// //Area of rectangle ...........Fuction with two parameter

// function areaOfRectangle(length , breadth)
// {
//     return length * breadth;
// }

// document.write(`<h3>Area of rectangle : ${areaOfRectangle(5,3)}</h3>`);



// //Area of rectangle ...........Fuction with three parameter

// function areaOfRectangle(length ,breadth ,unit)
// {
//     var area = length * breadth + unit;
//     return area;
// }

// document.write(`<h3>Area of rectangle : ${areaOfRectangle(5,10, ' sq per unit')}</h3>`);



// // Using function set the upper and lower limit to generate random number
// //and update the same

// function randomNumber(upper , lower)
// {
//     return Math.floor(Math.random() * (upper - lower + 1) + lower)
// }

// document.write(randomNumber(20,10));
// document.write("<br></br>");
// document.write(randomNumber(10,5));
// document.write("<br></br>");
// document.write(randomNumber(100,80));


// // //Checking random number
// function randomNumber(upper , lower)
// {
//     return Math.floor(Math.random() * (upper - lower + 1) + lower)
// }
// var i = 0;
// while(i<50)
// {
//     document.write(randomNumber(10,5)+ "<br>");
//     document.write("*********************************" +Math.random()+ "<br>");
//     i++;
// }

// // Checking whether the user entered any "string" instead of number.

// function areaOfRectangle()
// {
//     var length = parseInt(prompt("Enter length of Rectangle"));
//     var breadth = parseInt(prompt("Enter breadth of Rectangle"));
     
//     if(isNaN(length) || isNaN(breadth))
//         {
//             alert("Please enter number");
//             length = parseInt(prompt("Enter length of Rectangle"));
//             breadth = parseInt(prompt("Enter breadth of Rectangle"));
//         }
//     return length * breadth;
// }
// alert("Area of Rectangle is " +areaOfRectangle());
   

function randomGenerator (lower , upper){
   if(isNaN(lower) || isNaN(upper)){
 // throw new Error('Both the numbers should be integers');
      console.log("Both the arguments should be number");
   }
   return Math.floor(Math.random() * (upper - lower + 1) + lower);

 }

 console.log(randomGenerator(8 , 9));
console.log(randomGenerator(8 , 9));
 console.log(randomGenerator("New" , 9));
    