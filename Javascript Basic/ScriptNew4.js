// //  function constructor  //

// var person = function(fName , lName){
//     this.fName = fName;
//     this.lName = lName;
// };

// var sayli = new person("Sayli","Pisal");
// var neha = new person("Neha","Pisal");
// sayli.fullName = function(){
//     console.log(this.fName+" "+this.lName);
// }
// neha.fullName = function(){
//     console.log(this.fName+" "+this.lName);
// }
// console.log(sayli);
// console.log(neha);
// sayli.fullName();
// neha.fullName();

///////////////Prototype////////////////////////

// var person = function(fName , lName){
//     this.fName = fName;
//     this.lName = lName;
// };

// var sayli = new person("Sayli","Pisal");
// var neha = new person("Neha","Pisal");
// person.prototype.fullName = function(){
//     console.log(this.fName+" "+this.lName);
// }
// person.prototype.age = 24;
// console.log(sayli.age);
// console.log(neha.__proto__.age);
// sayli.fullName();
// neha.fullName();

////////call by value (premitive datatypes)////////

// var a = 10;
// console.log(a); //10
// function abc(){
//     a = 20;
//     console.log(a);  //20
//     a = 30;
//     console.log(a);  //30
// }

// abc();
// console.log(a);//10

// //////call by refference(non premitive datatypes)/////

// var sayli = {
//     fName : "Sayli"
// }
// console.log(sayli);
// var neha = sayli;
// console.log(sayli);
// console.log(neha);
// neha.fName = "neha";
// console.log(neha);
// console.log(sayli); 

// sayli = null;
// console.log(neha);
// console.log(sayli); 

// /////////////////////////////////
// var obj1 = {
//     name: 'John',
//     age: 26
// };
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

// Functions
// var age = 24;
// var obj = {
//     name: 'Sayli',
//     city: 'Mumbai'
// };

// function change(a, b) {
//     a = 25;
//     b.city = 'Pune';
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);


//function in function as arg/////////////


// function calAge(year){
//     return 2019 - year;
// }
// function info(calAge){
//     var name = "Sayli";
//     console.log("Name : "+name);
//     console.log("Age : "+calAge);
// }
// info(calAge(1995));

//////////////////////////////////////////////////////////////

// var years = [1990 , 1992 , 1995, 2002] ;
// var age =[];

// function calAge(year){
//    for(var i = 0; i < year.length;i++){
//         age.push(2019 - year[i]);
//     }
//     console.log(age);
// }
// calAge(years);

// var elder = [];
// function old(age){
//     for(var i = 0; i < age.length;i++){
//         elder.push(age[i] > 18);
//     }
//     console.log(elder);
// }
// old(age);

////////////////////////////////////////////////////////////

// var years = [1990 , 1992 , 1995, 2002] ;
// var age =[];

// function calAge(year){
//    for(var i = 0; i < year.length;i++){
//         age.push(2019 - year[i]);
//     }
//     console.log(age);
// }
// // var elder = [];
// // function old(age){
// //     for(var i = 0; i < age.length;i++){
// //         elder.push(age[i] > 18);
// //     }
// //     console.log(elder);
// // }

// function printArray(fun1 ){
//     var elder = [];
//     for(let i = 0 ; i< age.length ; i++) {
//         elder.push(age[i] > 18);
//     }
//     console.log(elder);
// }
// printArray(calAge(years));
////////////////////////////////////////////////////////////

// var years = [1990 , 1992 , 1995, 2002] ;
// var age =[];
// var elder=[];
// function calAge(years){
//     return  2019 - years;
// }
// function old(age){
//     return age >18;
// }

// function printArray(fun1,fun2 ){
//         for(var i = 0 ; i< years.length ; i++) {
//             age.push(fun1(years[i]));
//         }
//         console.log(age);
//         for(var i = 0 ; i< age.length ; i++) {
//             elder.push(fun2(age[i]));
//         }
//         console.log(elder);
// }
// printArray(calAge,old);


//////////////////////////////////////////////////////

// var personProto = {
//     name : "Sayli",
//     calAge : function(){
//         console.log(2019 - this.birthYear);
//     }
// }

// var sayli = Object.create(personProto);
// sayli.birthYear = 1995;
// sayli.name = "Neha";
// console.log(sayli.name);
// console.log(sayli.__proto__.name);
// console.log(sayli);
// sayli.calAge();



//////////////////////////////////////////////////////////////

// Functions returning functions

// function interviewQuestion(job){
//     if(job == "designer"){
//         return function(name){
//             console.log(`${name}, can you please explain what UX design is?`);
//         }
//     }else if(job == "teacher"){
//         return function(name){
//             console.log(`What subject do you teach, ${name } ?`);
//         }
//     }else{
//           return function(name){
//                console.log('Hello ' + name + ', what do you do?');
//     }
// }

// var designerQuestion = interviewQuestion("designer"); //gives all function
// console.log(designerQuestion);
// designerQuestion("Sayli");

// interviewQuestion("teacher")("Neha");

/////////////////////////////

// Lecture: IIFE 

// function print(){
//     console.log("Normal function");
// }
// print();

// (function(){
//     console.log("IIFE function");
// })();

// Reuse value of variable return by IIFE function

// var a = (function(){
//     var abc = 10;
//     console.log("IIFE function");
//     return abc;
// })();
// console.log(a + 10);
//  //console.log(abc); //abc not access outside function (abc is not defined )
//  //console.log(a());

// Reuse function return by IIFE function

// var abc = (function(){
//     return function(a){
//         a = 10;
//         console.log(a);
//     }
// })();
// console.log(abc);
// abc();

////////////////////////////////////////////////////////

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// //console.log(score); // Score is not define

// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);



/////////////////////////////
// Lecture: Closures

// function retirement(retirementAge){
//     var a = ' years left for retirement';
//     return function(yearOfBirth){
//         var age = 2019 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(60);
// retirementUS(1995);
// retirementGermany(1990);
// retirement(65)(1992);

///////////////////////////////////////////////////////////

// function interviewQuestion(job){
//     return function(name){
//         if(job == "designer"){
//             console.log(name + ', can you please explain what UX design is?');
//         }else if(job == "teacher"){
//             console.log('What subject do you teach, ' + name + '?');
//         }else{
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }
// interviewQuestion("teacher")("Neha");
// interviewQuestion("designer")("Sayli");
// interviewQuestion("manager")("Reshma");


/////////////////////////////
// Lecture: Bind, call and apply

// var sayli = {
//     name : 'Sayli',
//     age : 24,
//     job : 'teacher',
//     presentation: function(style, timeOfDay){
//         if(style === 'formal'){
//             console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//         }
//         else if(style === 'friendly'){
//             console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//         }
//     }
// }
// var neha = {
//     name: 'Neha',
//     age: 20,
//     job: 'designer'
// };

// sayli.presentation('formal', 'morning');

// sayli.presentation.call(neha, 'friendly', 'afternoon');

// sayli.presentation.apply(neha, ['friendly', 'afternoon']);

// var sayliFriendly = sayli.presentation.bind(sayli, 'friendly');

// sayliFriendly('morning');
// sayliFriendly('night');

// var nehaFormal = sayli.presentation.bind(neha, 'formal');
// nehaFormal('afternoon');
    


// Another cool example

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2016 - el;
// }

// function isFullAge(limit, el) {
//     return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);


////////////////////////////////////////////////////////////////////////////
/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, 
    array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question 
 should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of 
the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor 
(Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all 
your code is private and doesn't interfere with the other programmers code (Hint: we learned a special 
    technique to do exactly that).
*/

var questionAnswer = function(question,answers,correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

var question1 = new questionAnswer("Is JavaScript the coolest programming language in the world?",
                                    ["Yes","No"],0);
var question2 = new questionAnswer('What is the name of this course\'s teacher?',
                            ['John', 'Micheal', 'Jonas'],2);
var question3 = new questionAnswer('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],2);

document.getElementById('question').textContent = question1.question;
var ansList = document.getElementById('answer');
var element = document.createElement('li');
element.textContent = question1.answers[0];
ansList.appendChild(element);
var element1 = document.createElement('li');
element1.textContent = question1.answers[1];
ansList.appendChild(element1);

// (function() {
//     function Question(question, answers, correct) {
//         this.question = question;
//         this.answers = answers;
//         this.correct = correct;
//     }

//     Question.prototype.displayQuestion = function() {
//         console.log(this.question);

//         for (var i = 0; i < this.answers.length; i++) {
//             console.log(i + ': ' + this.answers[i]);
//         }
//     }

//     Question.prototype.checkAnswer = function(ans) {
//         if (ans === this.correct) {
//             console.log('Correct answer!');

//         } else {
//             console.log('Wrong answer. Try again :)')
//         }
//     }

//     var q1 = new Question('Is JavaScript the coolest programming language in the world?',
//                           ['Yes', 'No'],
//                           0);

//     var q2 = new Question('What is the name of this course\'s teacher?',
//                           ['John', 'Micheal', 'Jonas'],
//                           2);

//     var q3 = new Question('What does best describe coding?',
//                           ['Boring', 'Hard', 'Fun', 'Tediuos'],
//                           2);

//     var questions = [q1, q2, q3];

//     var n = Math.floor(Math.random() * questions.length);

//     questions[n].displayQuestion();

//     var answer = parseInt(prompt('Please select the correct answer.'));

//     questions[n].checkAnswer(answer);
// })();

//////////////////////////////////////////////////////////////////

// (function() {
//     function Question(question, answers, correct) {
//         this.question = question;
//         this.answers = answers;
//         this.correct = correct;
//     }

//     Question.prototype.displayQuestion = function() {
//         console.log(this.question);

//         for (var i = 0; i < this.answers.length; i++) {
//             console.log(i + ': ' + this.answers[i]);
//         }
//     }

//     Question.prototype.checkAnswer = function(ans, callback) {
//         var sc;
        
//         if (ans === this.correct) {
//             console.log('Correct answer!');
//             sc = callback(true);
//         } else {
//             console.log('Wrong answer. Try again :)');
//             sc = callback(false);
//         }
        
//         this.displayScore(sc);
//     }

//     Question.prototype.displayScore = function(score) {
//         console.log('Your current score is: ' + score);
//         console.log('------------------------------');
//     }
    
    
//     var q1 = new Question('Is JavaScript the coolest programming language in the world?',
//                           ['Yes', 'No'],
//                           0);

//     var q2 = new Question('What is the name of this course\'s teacher?',
//                           ['John', 'Micheal', 'Jonas'],
//                           2);

//     var q3 = new Question('What does best describe coding?',
//                           ['Boring', 'Hard', 'Fun', 'Tediuos'],
//                           2);
    
//     var questions = [q1, q2, q3];
    
//     function score() {
//         var sc = 0;
//         return function(correct) {
//             if (correct) {
//                 sc++;
//             }
//             return sc;
//         }
//     }
//     var keepScore = score();
    
    
//     function nextQuestion() {

//         var n = Math.floor(Math.random() * questions.length);
//         questions[n].displayQuestion();

//         var answer = prompt('Please select the correct answer.');

//         if(answer !== 'exit') {
//             questions[n].checkAnswer(parseInt(answer), keepScore);
            
//             nextQuestion();
//         }
//     }
    
//     nextQuestion();
    
// })();

