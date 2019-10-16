// // Print random number between 0 to 5 -----------1000 times.
// var count = 0;
// while(count <1000)
// {
//     count ++;
//     var randomNumber = Math.floor(Math.random() * 6);
//     document.write(`<h5> ${randomNumber}</h5>`);
// }


// //************************************** */

// function randomNumber(upper)
// {
//     return Math.floor(Math.random() * upper);
// }
// var count = 0;
// while(count <1000)
// {
//     count ++;
//     document.write("<h5>"+randomNumber(6)+"</h5>");
// }

// 1 Generate a random number from 1 to 10000. This number the number which computer
//  need to guess.
//  2 Enter a while loop - inside this loop the computer will "guess" a random
// number . If the number the computer guesses matches the number generated at the
// beginning  of the program , the loop ends , if not the loop continues
// until the correct number is guessed. 

// var randomNumber = Math.floor(Math.random() *1000) + 1;
// console.log(randomNumber);
// var count = 0;
 
// while(true)
// {
//         count +=1;
//         var guess = Math.floor(Math.random() *1000) + 1;
//         if(randomNumber === guess){
//                 document.write(`You have guessed correct random number ${randomNumber}`);
//                 break;
//         }
// }
// document.write(`<h5>You have guessed correct random number in ${count} attempts</h5>`);

// //Method 1

// var randomNumber = Math.floor(Math.random() * 1000)+1;
// alert(randomNumber);
// while(true)
// {
//     var guess = parseInt(prompt("Please enter the number"));
//     if(randomNumber === guess)
//     {
//         document.write("you have guess correct  " +guess);
//         break;
//     }
// }

// // //Method 2

// var randomNumber = Math.floor(Math.random() * 1000)+1;
// alert(randomNumber);
// while(randomNumber !== guess){
//         var guess = parseInt(prompt("Enter guess for random number"));
//         if(randomNumber === guess){
//                 document.write("you have guess correct  " +guess);
//                 break;
//         }
// }

// // Method 3

// var randomNumber = Math.floor(Math.random() * 6)+1;
// var correctGuess = false;
// while(randomNumber !== guess){
//         var guess = parseInt(prompt("Enter guess for andom number"));
//         if(randomNumber === guess){
//                 correctGuess =true;
//                 document.write("you have guess correct  " +guess);
//                 break;
//         }
// }

// // // do while loop
// var randomNumber = Math.floor(Math.random() * 6)+1;
// var count = 0;
// do{
//         count ++;
//         console.log(randomNumber);
//         var guess = parseInt(prompt("Enter guess for andom number"));
//         if(randomNumber === guess){
//                 document.write("you have guess correct  " +guess);
//                 break;
//         }
// }while(true);

// document.write("<h4> You have guess correct  random number " +guess+ " in " +count+ " attempts.</h4>");

// // For Loop

// for(var i= 0; i< 5; i++)
// {
//         console.log(i);
// }
// console.log("*******************")
// console.log(i);



// var html ="";

// for(var i = 0 ; i < 10 ; i++ ){
//   html += " " + i + " ";
// }

// document.write(html);

// //// Using boolean as flag and and limiting guess to only 10 times .

// var randomNumber = Math.floor(Math.random() * 6)+1;
// console.log(randomNumber);
// var correctGuess = false;
// var count = 0;
// while(count < 10){
//         count ++;
//         var guess = parseInt(prompt("Enter guess for andom number"));
//         if(randomNumber === guess){
//                 correctGuess =true;
//                 document.write("you have guess correct  " +guess);
//                 break;
//         }
// }
// console.log(count);


// var html = " "
// var red = Math.floor(Math.random()*256);
// var blue = Math.floor(Math.random()*256);
// var green = Math.floor(Math.random()*256);
// // rgb(255, 0, 0)
// rgbColor = 'rgb('+ red +','+ blue +','+ green +')';
// console.log(rgbColor);
// html += '<h4 style = "background-color:'+rgbColor+'">Color</h4>';
// document.write(html);

// for(var i = 0;i < 10 ;i++){
//         var html = " "
//         var red = Math.floor(Math.random()*256);
//         var blue = Math.floor(Math.random()*256);
//         var green = Math.floor(Math.random()*256);
//         // rgb(255, 0, 0)
//         rgbColor = 'rgb('+ red +','+ blue +','+ green +')';
//         console.log(rgbColor);
//         html += '<h4 style = "background-color:'+rgbColor+'">Color</h4>';
//         document.write(html);

// }

////////////////////////////////////////////////
// html = "";
// function generateColor(){
//         return'rgb('+ Math.floor(Math.random()*256) +','+ Math.floor(Math.random()*256) +','+ Math.floor(Math.random()*256) +')'; 
// }

// for(var i = 0 ;i < 3;i++){
//         html += '<h4 style = "background-color:'+generateColor()+'">Color</h4>';
//         document.write(html);
// }
// document.write(html);


/******************************************************************************* */
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
