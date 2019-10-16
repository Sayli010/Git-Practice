
// Function Declaration

// const name = "Sayli";
// function sayName() {
//   const message = "My name is "+name;
//   console.log(message);
// }
// function sayBye(){
//   console.log("Bye "+ name);
// } 

// sayName();
// sayBye();

// Function Expression


// const name = "Sayli";
// const sayName = function() {
//   const message = "My name is "+name;
//   console.log(message);
// }
// function sayBye(){
//   console.log("Bye "+ name);
// }
// sayBye();
// sayName();


// function square(x){
//   return x * x ;
// }

// function cube(x){
//   return square(x)*x;
// } 

// console.log(cube(5));
// console.log(square(8));

// // Function Expression


// var square = function(x){
//   return cube(x) * x;
// }

// var cube = function(x){
//   return square(x) * x;
// } 

// console.log(cube(5));
// console.log(square(8));

// function multiply(x , y){
//     return x * y;
//   }
//   function add( a, b){
//     return a + b;
//   }
//   function subtraction(a,b){
//     return a - b;
//   }

//   var multiply = function(x,y){
//     return x * y;
// }

// var add = function(a,b){
//   return a + b ;
// }

// var subtraction = function(a,b){
//     return a -b ;
// }

// console.log( add(5,5));
// console.log(subtraction(5,3));
// console.log(multiply(5,10 ));

// /////////////////////////////////////////////////////////////////
var multiply = (x,y) =>{
  return x * y;
}

var add = (a,b) =>{
return a + b ;
}

var subtraction = (a,b)=> a -b ;// If function having one line code only


console.log( add(5,5));
console.log(subtraction(5,3));
console.log(multiply(5,10 ));
