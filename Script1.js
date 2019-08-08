// alert("hello this message is from alert");

// document.write("<h1> Hello welcome to javascript</h1>");

// console.log("welcome to console");

var Fname = "Sayali"; //variable creation
// document.write("<h3>String in double quotes: " +Fname+ "</h3>"); // print variable value in html tags

var Lname = 'Pisal'; 
// document.write("<h3>String in single quotes: " +Lname+ "</h3>");

// document.write('<h3> Sayali\'s .......by using backslash </h3>'); // escape sequence \'

// document.write("<h3>Concat first name and last name: "+ Fname +" "+Lname +"<h3>"); //concat string

//alert("Addition of 5+2 is " +(5+2)); // alert perform addition 

// var upperCase = Fname.toUpperCase(); // to upper case
// document.write("<h3>First name in upper case: " +upperCase+ "</h3>");

// document.write("<h3> Lenght of Last Name is: "+Lname.length+"</h3>");// lentgh of variable

// var a = parseInt(prompt(" Please enter value of a ")); //input value from user
// var b = parseInt(prompt("Please enter value of b "));

// document.write("<h3> Addition of a and b: "  +(a+b)+"</h3>"); //  prompt returns string so a and b concat hence first a and b convert into int

document.write("<h3> String Interpolation is given below. </h3>");
document.write(`<h4> My name is ${Fname} ${Lname} </h4>`);// String Interpolation


