
// var person2 = new Object();
// person2.firstName = "Chinmayee";
// person2.lastName = "Deshpandee";
// person2.age = 29;
// person2.rollNumber = 78;

// console.log(person2);
// document.write(person2.firstName);
// document.write("Two above examples do exactly the same thing , There is no need to use new Object()");
// document.write("For simplicity, readability and execution speed, use the first one (the object literal method)");

/////////////////////////////////////////////////////////////////////////////////////

// var changeOne = {
//    firstname : "John" ,
//    lastName : "Doe",
//    age:50,
//    eyeColor:"blue"
// };

// var changeTwo = changeOne;

// // Now both changeTwo and changeOne are pointing to same object i.e same address
// // Change in one will cause change in second.
// console.log(changeOne);
// changeOne.age = 78;
// console.log(changeOne);
// console.log("-------------------------------");
// console.log(changeTwo);

////////////////////////////////////////////////////////////////////////

// var txt = " ";
// var changeThree = changeOne;
// for (x in changeThree){
//     txt += " "+changeThree[x];
// }
// document.write(txt);

// /////////////////////////////////////////////////////////////////////////////
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person.fullName());

  console.log(delete person.lastName);
  console.log(person);
