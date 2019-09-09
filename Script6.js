// // // Object //////////

// var student = {
//   name:"Sayli",
//   age:24
// }
//////////////////////////////////////////
// var student ={
//         name : "Sayli",
//         rollNo : 1,
//         fullName : ["Sayli","Pisal"],
//         pass : true
// }
/////////////////////////////////////////////
//  Accessing object properties

// console.log(student.name);
// console.log(student['rollNo']);
// // Updating value of existing property 'name'.
// console.log(student['rollNo'] = 2);
// console.log(student);
//////////////////////////////////////////////

// var students = [ {
//     name : "Sayli",
//     rollNo : 1,
//     fullName : ["Sayli","Pisal"],
//     pass : true
// },
// {
//     name : "Sayli",
//     rollNo : 1,
//     fullName : ["Sayli","Pisal"],
//     pass : true
// },
// {
//     name : "Sayli",
//     rollNo : 1,
//     fullName : ["Sayli","Pisal"],
//     pass : true
// },
// {
//     name : "Sayli",
//     rollNo : 1,
//     fullName : ["Sayli","Pisal"],
//     pass : true
// },
// {
//     name : "Sayli",
//     rollNo : 1,
//     fullName : ["Sayli","Pisal"],
//     pass : true
// }]
// console.log(students.length);

// function objectPass(students){
//     for(var j = 0; j< students.length;j++)
//     {
//         console.log(students[j]);
//         for(var key in students[j])
//         {
//             document.write(`<h3>${students[j][key]}</h3>`);
//         }
//     }
    
// }
// objectPass(students);

// console.log(student);
// console.log(student.name);
// console.log(student.rollNo);
// console.log(student['fullName'][0]);
// console.log(student['fullName'][1]);
// console.log(student['fullName'].length);
// console.log(student['pass']);

// for(var key in student){
//     document.write("<h1>"+ key +" : "+student[key]+"</h1>");
// }


// // // // // // ///////////////////////////

// var classA = [
//     {
//         name : "Sayli",
//         rollNo : 101,
//         age : 24,
//         skills : ["c","c++","Java","HTML","Css"]
//     },
//     {
//         name : "Reshma",
//         rollNo : 102,
//         age : 25,
//         skills : ["c","c++","HTML","HTML5"]
//     },
//     {
//         name : "Pooja",
//         rollNo : 103,
//         age : 24,
//         skills : ["c","c++","Java","HTML","Css","Javascript"]
//     },
//     {
//         name : "Nikita",
//         rollNo : 104,
//         age : 24,
//         skills : ["c","c++","Java","HTML","Css","Javascript","PHP"]
//     },
//     {
//         name : "Arati",
//         rollNo : 105,
//         age : 24,
//         skills : ["c","c++","Java"]
//     }
// ]
// function studentInfo(classA){
//     for(var i = 0; i<classA.length ;i++)
//     {
//         document.write(`<h1> ${classA[i].name}</h1>` ); 
//         for(var key in classA[i])
//         {
//             document.write(`<h3>${key} : ${classA[i][key]}</h3>` );
//         }
//         document.write(`<h3> Student having  ${classA[i]['skills'].length} skills.</h3>` );
//         document.write(`<hr> </hr>` );
//    }
// }

// studentInfo(classA);
// ////////////////////////////////////////////////////////////////////////////////

// var classA = [
//     {
//         name : "Sayli",
//         rollNo : 101,
//         age : 24,
//         skills : ["c","c++","Java","HTML","Css"]
//     },
//     {
//         name : "Reshma",
//         rollNo : 102,
//         age : 25,
//         skills : ["c","c++","HTML","HTML5"]
//     },
//     {
//         name : "Reshma",
//         rollNo : 103,
//         age : 24,
//         skills : ["c","c++","Java","HTML","Css","Javascript"]
//     },
//     {
//         name : "Nikita",
//         rollNo : 104,
//         age : 24,
//         skills : ["c","c++","Java","HTML","Css","Javascript","PHP"]
//     },
//     {
//         name : "Sayli",
//         rollNo : 105,
//         age : 24,
//         skills : ["c","c++","Java"]
//     }
// ]
// var search = prompt("Enter name of student to search details");
// function studentInfo(classA){
//     document.write(`<h1> You are searching for ${search}</h1>` ); 
//     for(var i = 0; i<classA.length ;i++){
//         if(search.toUpperCase() === classA[i].name.toUpperCase()){
//             for(var key in classA[i])
//             {
//                 document.write(`<h3>${key} : ${classA[i][key]}</h3>` );
//             }
//             document.write(`<h3> ${classA[i]['name']} having  ${classA[i]['skills'].length} skills.</h3>` );
//             document.write(`<hr> </hr>` );
//         }              
//    }
// }

// studentInfo(classA);

///////////////////////////////////////////////////////////////////////////////////
// quize using objects

// var ans ="";
// var correct = 0;
// var quize =[
// {
//     Question : "What is capital of maharashtra?",
//     Answer : "MUMBAI"
// },
// {
//     Question : "What is capital of Goa?",
//     Answer : "PANAJI"
// },
// {
//     Question : "What is capital of Gujrat?",
//     Answer : "GANDHINAGAR"
// },
// {
//     Question : "What is capital of Rajsthan?",
//     Answer : "JAIPUR"
// },
// {
//     Question : "What is capital of MP?",
//     Answer : "BHOPAL"
// }]

// for(var i=0 ; i< quize.length ;i++){
//     ans = prompt(quize[i].Question).toUpperCase();
//     console.log(ans);
//     if(ans === quize[i].Answer)
//     {
//         correct += 1;
//         console.log(correct);
//     }
// }

// if(correct === 5){
//     document.write(`You got 'Gold'. Your result is ${correct}`);
// }
// else if(correct >=3){
//     document.write(`You got 'Silver'. Your result is ${correct}`);
// }
// else if(correct >= 1){
//     document.write(`You got 'Brownze'. Your result is ${correct}`);
// }else{
//     document.write("Please try again");
// }

///////////////////////////////////////////////////////////////

// var  person = {
//   firstName:'chinmay',
//   lastName: 'deshpande',
//   age:89,
//   eyeColor:'blue',
//   fullName: function(){
//     return `${this.firstName}  ${this.lastName}`
//   }

// };

// console.log(person.fullName());
// console.log(person.fullName);


////////////////////////////////////////////////////////////////////
// function student (name,rollNo,age,skills){
//     this.firstName = name;
//     this.myRollNo = rollNo;
//     this.myAage = age;
//     this.mySkills = skills;
//     }

// var classA = [  new student("Sayli",1,21,["c","c++"]),
//                 new student("Reshma",2,21,["c","c++"]),
//                 new student ("Nikita",3,21,["c","c++"]),
//                 new student("Pooja",4,21,["c","c++"])
//             ]

// for(var i = 0 ; i<classA.length ;i++){
//     for(var key in classA[i]){
//         document.write(`<h3>${key} : ${classA[i][key]}</h3>` );
//     }
//     document.write("<hr></hr>");
// }
// console.log(classA);