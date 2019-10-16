

// var objOne = {
//   name:"Chinmay",
//   age:67,
//   birthYear:function(){
//     console.log(this);
//     abc();
//     function abc(){
//         console.log(this);
//     }
//     }
// }
// //objOne.birthYear();

// var b = objOne.birthYear();
// console.log("b : "+b);

///////////////////////////////////////////////////////////////////////

// map() work on array and it returns array
//map() work on three parameter =>  1)el : element of array
//                                  2)index : index of Array
//                                  3)array : given array

////////////////////////////////////////////////////

// const years = [10 , 20 ,30 ,40 ,50];
// var newArry = years.map(function(el){
//   return 2019 - el;
// });
// console.log(newArry);
/////////////////////////////////////////////////////////////////////////////

// var persons = [
//   {name:"Sayli",age :80},
//   {name:"pooja",age :81},
//   {name:"reshma",age :100}
// ];
// persons.map(function(el ,index){
//     // console.log(index);
//     // console.log(el.age);
//     console.log(`${index + 1} ${el.name} ${el.age}`);
// });
// persons.map((el ,index) => console.log(`${index + 1} ${el.name} ${el.age}`));
//////////////////////////////////////////////////////////////////////////////

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//           document.querySelector('.green').addEventListener('click', function() {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color; //this points to window
//             alert(str);
//         });
//     }
// }

// box5.clickMe();

////////////////////////////////////////////////////////////////////////////

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//           var self = this;
//           document.querySelector('.green').addEventListener('click', function() {
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str);
//         });
//     }
// }

// box5.clickMe();

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Using arrow function => arrow function points to parent object

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//           document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// }

// box5.clickMe();

/////////////////////////////////////////////////////////////////////////////////
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: ()=> { /// points to window object
//             document.querySelector('.green').addEventListener('click', ()=> {
//                 var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//                 alert(str);
//         });
//     }
// }

// box5.clickMe();

///////////////////////////////////////////////////////////////////////////

// var Person= function(name){
//     this.name = name;
// }
// Person.prototype.myFriends = function(friends){
//     var arr = friends.map(function(el){
//         return this.name + 'is friends with ' + el;
//     }.bind(this));
//     console.log(arr);
// }
// var friends = ['Bob', 'jane', 'Mark'];
// new Person('John').myFriends(friends);


/////////////////////////////////////////////////////////////////////////////////////


// var john = ['John' , 26];
// var name = john[0];
// var age = john[1];
// console.log(name);
// console.log(age);

/////////////////////////////////////////////////////////////////////////////////////

// const [name , age] = ['John',26];
// console.log(name);
// console.log(age);

///////////////////////////////////////////////////////////////////////////////////////////

// const obj = {
//     firstName :'John',
//     rollNo : 21,
//     lastName:'Smith',

// };

// console.log(obj)

// const {firstName , lastName } = obj
// console.log(firstName);
// console.log(lastName);
//console.log(rollNo);

// const{firstName: a, lastName: b}= obj;
// console.log(a);
// console.log(b);
