
////Hosting/////

// x = 10;
// console.log(x);
// var x = 10;


// console.log(x);
// x = 10;
// var x ;


// function abc(){
//   console.log("hello");
// }
// abc();


// abc();
// function abc(){
//   console.log("hello");
// }

// calculateAge(1995);
// function calculateAge(year){
//     console.log(2019 - year);
// }


// // // hosting not applicable in function expression // // //
// abc();
// var abc = function (){
//   console.log("hello");
// }



// var abc = function (){
//   console.log("hello");
// }
// abc();

// //calculateAge(1995);
// var calculateAge = function(year){
//     console.log(2019 - year);
// }
// calculateAge(1995);


// console.log(age); // undefine
// var age = 23;

// function foo() {
//     console.log(age);//undefine
//     var age = 65;
//     console.log(age);//65
// }
// foo();
// console.log(age);//23

//// Execution of above .......hosting

// var age;
// function foo(){
//     var age;
// }
// console.log(age);// undefine


// function foo(){
//     console.log(age);//undefine
//     age = 65;
//     console.log(age);//65
// }
// foo()
// age = 23;
// console.log(age);//23



/////// this//////////////////

// calculateAge(1995);
// function calculateAge(year) {
//     console.log(2019 - year);
//     console.log(this); /// points to window 
// }


// this points to current object 

//console.log(this); // points to window 

// var person = { 
//     fName : "Sayli",
//     lName : "Pisal",
//     fullName : function(){
//       console.log(this); // points to person object
//     }
//   }
// person.fullName();
  


  
// var person = { 
//     fName : "Sayli",
//     lName : "Pisal",
//     fullName : function(){
      
//       console.log(this);// points to person object
      
//       function innerFunction1(){
//         console.log(this); // points to window 
//       }
//       var innerFunction = function(){
//         console.log(this); // points to window 
//       }
//       innerFunction();
//       innerFunction1();

//     }
//   }
  
//   person.fullName();



/////////////// Scoping//////


// function A(){
//     var a = "10" ;
//     console.log(a);
// }
// function abc(){
//     A();
//     var b = "20" ;
//     cde();
//     function cde(){
//         var c = "30";
//         //console.log(a); // a is not accessible 
//         console.log(b+c); // b is accessible in cde() becuase cde() is child of abc()
//     }
// }
// abc();


//  //// function borrowing/////


// var person = { 
//     fName : "Sayli",
//     lName : "Pisal",
//     fullName : function(){
//         console.log(this.fName+" "+this.lName);  
//         //console.log(this); // points to person object
//     }
//   }
// person.fullName();


// var person1 = { 
//     fName : "Reshma",
//     lName : "Gaikwad"
//   }

// person1.fullName = person.fullName;

// person1.fullName();
// console.log(person);
// console.log(person1);




var i = 23;
for(var i=0; i< 10; i++){
    console.log(i);
}
console.log(i);