// var message = "Hello";
// const pi = 3.14159;
// let score = 0 ;

// //console.log(message);
// console.log(pi);
// console.log(score);

// message = "Hi";
// console.log(message);

//pi = 3.14159; // Error --Assignment to constant variable.
//console.log(pi);

// score = 5;
// console.log(score);


// var x = 200;
// function abc(){
//   var x = 100 ;
//   //console.log(x);
//   return x;
// }

// var y = abc()
// console.log(y);
//console.log(x)

// const x = 200;
// function abc(){
//   const x = 100 ;
//   return x;
// }

// console.log(abc());
// console.log(x)


// let x = 200;
// function abc(){
//   let x = 100 ;
//   console.log(x);
// }

// abc();
// console.log(x)


// variable define using let keword cannot be access outside the block
// function print(){
//   for(var i = 1 ; i <= 10 ; i++){
//     let a = i*2;
//     console.log(a);
//   }
// }

// print();
// console.log(a); 


// let abc =function(){
//   for(var i = 1 ; i <= 10 ; i++){
//         var a = i*2;
//         console.log(a);
//       }
// }
// function print(){
//   abc();
// }
// print();



// var x = 10 ;
// console.log(x);
// x = "Sayli";
// console.log(x);


// const y = {
//   name:"sau",
//   rollNumber:89
// };

// console.log(y.name);

// // we cannot change the const object and array type  but we ca add and update value from it 

// y = [19,20,21]  // Error assignment to constant variable

// console.log(y);

// const abc = [1,2,3,4,5]
// abc.push(6);
// console.log(abc);

// const person ={
//   name : "Sayli",
//   job : "Student"
// }

// function personDesc(person){
//   var desc = person.name;
//   if(person.job){
//     desc = desc + " is a ";
//     desc += person.job;
//   }
//   console.log(desc);
// }
// personDesc(person);



// const person ={
//   name : "Sayli",
//   job : "Student"
// }

// function personDesc(person){
//   const desc = person.name;
//   if(person.job){
//     desc = desc + " is a ";
//     desc += person.job;
//   }
//   console.log(desc);
// }
// personDesc(person);


// const person ={
//   name : "Sayli",
//   job : "Student"
// }

// function personDesc(person){
//   let desc = person.name;
//   if(person.job){
//     desc = desc + " is a ";
//     desc += person.job;
//   }
//   console.log(desc);
// }
// personDesc(person);


// const buttons = document.getElementsByTagName('button');

// for(var i = 0 ; i < buttons.length ; i++){
//   const button = buttons[i];
//   button.addEventListener("click",function(){
//     alert("Button " +i+ " Pressed");
//   });
// }

const button1 = document.getElementsByTagName('button');

for(var i= 0 ;i < button1.length ; i++){
  
  var buttonPress = button1[i];
  buttonPress.addEventListener('click' , () => alert(`${i} button Pressed`));
  console.log(i);
}