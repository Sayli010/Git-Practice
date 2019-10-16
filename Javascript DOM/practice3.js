/*****************************
* CODING CHALLENGE 1
*/

// Mark and John are trying to compare their BMI (Body Mass Index),
//  which is calculated using the formula: BMI = mass / height^2 = mass / (height * height).
//  (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs
// 3. Create a boolean variable containing information about
//  whether Mark has a higher BMI than John.
// 4. Print a string to the console containing the variable from step 3.
// (Something like "Is Mark's BMI higher than John's? true").

// var BMI = [0,0];
// var mass = [0,0];
// var height = [0,0];
// mass[0] = parseInt(prompt("Enter mass of Mark"));
// height[0] = parseInt(prompt("Enter heigth of Mark"));
// mass[1] = parseInt(prompt("Enter mass of John"));
// height[1] = parseInt(prompt("Enter height of John"));
// // console.log(mass);
// // console.log(height);

// // console.log(BMI[0] = mass[0] / (height[0] * height[0]));
// // console.log(BMI[1] = mass[1] / (height[1]^2));
// // console.log(BMI);

// if(BMI[0] > BMI[1]){
//     console.log("Mark has higher BMI than John");
// }else{
//     console.log("John has higher BMI than Mark");
// }


/* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 
and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score),
 and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners.
 Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball,
 and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
  HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/


// var avgOfJohn = (89+120+103)/3;
// //var avgOfMike = (89+120+103)/3;
// //var avgOfMike = (116+94+123)/3;
// if(avgOfJohn > avgOfMike){
//     console.log("John's team win. Average score of team is " +avgOfJohn);
// }else if(avgOfJohn == avgOfMike){
//     console.log(`Tie. Average score of team john is ${avgOfJohn} and average score team Mike is ${avgOfMike}`);
// }
// else{
//     console.log("Mike's team win. Average score of team is " +avgOfMike);
// }


/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 
and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200,
 and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
// */
// var bills = [124,48,268];
// var perc;
// var totalBill = [];

// function calTip(bills , perc){
//   totalBill = bills + (bills* (perc/100));
//   console.log(totalBill);
// }
// for(var i=0; i< bills.length; i++){
//   if(bills[i] < 50){
//     perc = 20;
//     calTip(bills[i] ,perc);
//   }else if(bills[i] < 200){
//     perc = 15;
//     calTip(bills[i],perc);
//   }
//   else{
//     perc = 10;
//     calTip(bills[i],perc);
//   }
// }



/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement 
the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return
 it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the 
respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

// var john ={
//     mass : 50,
//     height : 210,
//     calBMI : function(){
//         return this.mass / (this.height * this.height);
//     }
// };
// var mark ={
//     mass : 25,
//     height : 230,
//     calBMI : function(){
//         return this.mass / (this.height * this.height);
//     }
// };

// if(mark.calBMI() > john.calBMI()){
//     console.log("Mark has higher BMI than John");
// }else{
//     console.log("John has higher BMI than Mark");
// }
    
/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 
and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and 
$200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid 
amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills
 were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between 
$100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. 
HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). 
After you have the sum of the array, divide it by the number of elements in it (that's how you calculate
 the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/


// var person =[{bill : 124},
//             {bill : 48},
//             {bill : 268},
//             {bill : 180},
//             {bill : 42}
//             ];
// var perc ;
// var totalBill;
// function calTip(perc,bill){
//   totalBill = bill +(bill* (perc/100));
//   console.log("Bill with tip when bill is "+bill+" and total bill is "+totalBill);
// }
// for(var i= 0 ;i < person.length ; i++){
//   if(person[i].bill < 50){
//     perc = 20;
//     calTip(perc, person[i].bill);
//   }else if(person[i].bill < 200){
//     perc = 15;
//     calTip(perc,person[i].bill);
//   }else{
//     perc = 10;
//     calTip(perc,person[i].bill);
//   }
// }


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



// // // hosting not applicable in function expression // // //
// abc();
// var abc = function (){
//   console.log("hello");
// }



// var abc = function (){
//   console.log("hello");
// }
// abc();


//console.log(this);


var person = { 
  fName : "Sayli",
  lName : "Pisal",
  fullName : function(){
    
    console.log(this);
    
    var innerFunction = function(){
      console.log(this);
    }
    innerFunction();
  }
}

person.fullName();

