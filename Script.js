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

// var ans = prompt("Enter your name");
// if(ans.toUpperCase() === "SAYLI")
// {
// 	correct += 1;
// 	console.log(correct);
// 	console.log(ans);
// }
// var ans1 = parseInt(prompt("Enter your age"));
// if(ans1 === 24)
// {
// 	correct += 1;
// 	console.log(correct);
// 	console.log(ans1);
// }

// var ans2 = prompt("Enter your school");
// if(ans2.toUpperCase() === "JVD" )
// {
// 	correct += 1;
// 	console.log(correct);
// 	console.log(ans2);
// }
// var ans3 = prompt("Enter your college");
// if(ans3.toUpperCase() === "IOK" )
// {
// 	correct += 1;
// 	console.log(correct);
// 	console.log(ans3);
// }
// var ans4 = prompt("Which laptop is better");
// if(ans4.toUpperCase() === "HP" )
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
