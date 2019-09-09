// // Arrays of String
// var names = ['Sayli','Reshma','Pooja','Nikita'];
// document.write(`<h3>${names}</h3>`);

// // // Arrays of Numbers

// var rollNo = [1,2,3,4];
// document.write(`<h3>${rollNo}</h3>`);

// // //Arrays of Mixed data types
// var mixed = [1,2,'Sayli','Pisal'];
// document.write(`<h3>${mixed}</h3>`);

// // Printing Element of array
// document.write(`<h3>${mixed[0]}</h3>`);
// document.write(`<h3>${mixed[1]}</h3>`);
// document.write(`<h3>${mixed[2]}</h3>`);
// document.write(`<h3>${mixed[3]}</h3>`);

// // Printing Element of array using 'for loop'
// for(var i=0; i<rollNo.length ;i++)
// {
//     document.write(`<h3>${rollNo[i]}</h3>`);
// }

// // // orderd list
 
// var html = "<ol>";
// for(var i = 0 ; i<names.length ; i++)
// {
//     html += "<li>"+names[i]+"</li>";
// }
// html += "</li>";
// document.write(html);


/******************************************************************************* */
//Methods of Array
/*********************************************************************** */

// var arr = [1,2,3,4,5];
// arr.push(8);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(7);
// console.log(arr);
/************************************************************************** */
// var x = [1,2,3,4,5];
// for(var i = 0; i < x.length ; i++)
// {
//     console.log(x[i]);
// }


// var y = [1,2,3,4,5]
// if(y.indexOf(5)  === -1)
// {
//     console.log("Element not found");
// }
// else
// {
//     console.log("Element found");
// }

// var y = [1,2,3,4,5,6,7,8,9];
// var search = parseInt(prompt("Enter element to be search"));
// if(y.indexOf(search) === -1){
//         console.log("Element not found");
// }
// else{
//      console.log("Element found");
// }

/************************************************ */

// var flower = [ 'Rose','Mogara','Lilly'];
// var search;

// while(true)
// {
//     search = prompt("Type 'quit' to end search ..Type 'list' to print list of flowers....Type 'flower name' to search flower. ");
   
//     if(search.toUpperCase() === "QUIT")
//     {
//         break;
//     }
//     else if(search.toUpperCase() === "LIST")
//     {
//         document.write("<h3>"+flower.join(",")+"</h3>");
//         break;
//     } 
//     else if(flower.indexOf(search) > -1 ){
//         document.write(`${search} flower is available`);
//     }
//     else{
//         document.write(`${search} flower is not available`);
//     }
// }
/////////////////////////////////////////////////////////////////////
// var flower = [ 'Rose','Mogara','Lilly'];
// var search;
// var flag = false;

// while(!flag)
// {
//     search = prompt("Type 'quit' to end search ..Type 'list' to print list of flowers....Type 'flower name' to search flower. ");
   
//     if(search.toUpperCase() === "QUIT")
//     {
//         flag = true;
//     }
//     else if(search.toUpperCase() === "LIST")
//     {
//         document.write("<h3>"+flower.join(",")+"</h3>");
//         flag = true;
//     } 
//     else if(flower.indexOf(search) > -1 ){
//         document.write(`${search} flower is available`);
//         flag = true;
//     }
//     else{
//         document.write(`${search} flower is not available`);
//         flag = true;
//     }
// }

////////////////////////////////////////////////////////////////////////////////////
// var songs =[
//     ['SongOne','AuthorOne'],
//     ['SongTwo','AuthorTwo'],
//     ['SongThree','AuthorTree'],
// ];
// var html = "<ol>";
// function printSong(){
//     for(var i=0;i<songs.length; i++){
//         html += `<li> ${songs[i][0]} by ${songs[i][1]}`;
//     }
//     html += "</ol>";
//     print(html);
// }
// function print(html){
//     document.write(html);
// }

// printSong();

////////////////////////////////////////////////////////////////////////////////////////


// var correctAnswerQuestions = [];
// var incorrectAnswerQuestions = [];
// var correctAnswer = 0;
// var questions = [
//   ["what is your name " ,"sayli"],
//   ["what is your surname","pisal"],
//   ["what is your education","be"],
//   ["what is your rollnumber","21"]
// ]

// var answerOne;
// for(var i = 0 ; i < questions.length ; i++){
//     answerOne = prompt(questions[i][0]);
//     //console.log(answerOne);
//     if(answerOne === questions[i][1]){
//       correctAnswer += 1;
//       correctAnswerQuestions.push(`${questions[i][0]} = ${questions[i][1]}`);
//     }
//     else {
//       incorrectAnswerQuestions.push(`${questions[i][0]} = ${answerOne}`);
//     }
// }
// document.write(`The number of correct answers = ${correctAnswerQuestions.length}`);
// for( var k = 0 ; k < correctAnswerQuestions.length ; k++){
//     document.write("<p>"+ correctAnswerQuestions[k] +"</p>");
//   }
//   document.write(`<p> incorrect answers = ${incorrectAnswerQuestions.length}</p>`);

//   if(incorrectAnswerQuestions.length > 0){
//   for( var y = 0 ; y < incorrectAnswerQuestions.length ; y++){
//     document.write("<p>"+ incorrectAnswerQuestions[y]+" </p>");
//   }
//  }

//  else {
//     document.write("you got it all correct");
//  }

////////////////////////////////////////////////////////////////////////////////////////
// var ans;
// var correct = 0;

// var quize = [
//         ["What is capital of maharashtra?" ,"MUMBAI"],
//         ["What is capital of Goa?" ,"PANAJI"],
//         ["What is capital of Gujrat?" ,"GANDHINAGAR"],
//         ["What is capital of Rajshtan?" ,"JAIPUR"],
// ]

// for(var i= 0 ;i<quize.length; i++){
//     ans = prompt(quize[i][0]);
//     console.log(ans);
//     if(ans.toUpperCase() === quize[i][1]){
//         correct += 1;
//         console.log(correct);
//     }
// }

// if(correct === 4){
//     document.write(`You got 'Gold'. Your result is ${correct}`);
// }
// else if(correct >2){
//     document.write(`You got 'Silver'. Your result is ${correct}`);
// }
// else if(correct >= 1){
//     document.write(`You got 'Brownze'. Your result is ${correct}`);
// }else{
//     document.write("Please try again");
// }

//////////////////////////////////////////////////////////////////////////////

var correct = 0;
//var questionAnswer ;
var quize = [
        ["What is capital of maharashtra?" ,"MUMBAI"],
        ["What is capital of Goa?" ,"PANAJI"],
        ["What is capital of Gujrat?" ,"GANDHINAGAR"],
        ["What is capital of Rajshtan?" ,"JAIPUR"],
        ["What is capital of MP?" ,"bhopal"],
]

function askQuestion(i){
    if(prompt(i[0]).toUpperCase() === i[1].toUpperCase()){
        return correct += 1;
    }
}
for(var i= 0 ;i<quize.length; i++){
    
    askQuestion(quize[i]);
}

if(correct === 5){
    document.write(`You got 'Gold'. Your result is ${correct}`);
}
else if(correct >=3){
    document.write(`You got 'Silver'. Your result is ${correct}`);
}
else if(correct >= 1){
    document.write(`You got 'Brownze'. Your result is ${correct}`);
}else{
    document.write("Please try again");
}

