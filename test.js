var classA = [
    {
        name : "Sayli",
        rollNo : 101,
        age : 24,
        skills : ["c","c++","Java","HTML","Css"]
    },
    {
        name : "Reshma",
        rollNo : 102,
        age : 25,
        skills : ["c","c++","HTML","HTML5"]
    },
    {
        name : "Reshma",
        rollNo : 103,
        age : 24,
        skills : ["c","c++","Java","HTML","Css","Javascript"]
    },
    {
        name : "Sayli",
        rollNo : 104,
        age : 24,
        skills : ["c","c++","Java","HTML","Css","Javascript","PHP"]
    },
    {
        name : "Sayli",
        rollNo : 105,
        age : 24,
        skills : ["c","c++","Java"]
    }
]
var search = prompt("Enter name of student to search details");
function studentInfo(classA){
    document.write(`<h1> You are searching for${search}</h1>` ); 
    for(var i = 0; i<classA.length ;i++){
        if(search.toUpperCase() === classA[i].name.toUpperCase()){
            for(var key in classA[i])
            {
                document.write(`<h3>${key} : ${classA[i][key]}</h3>` );
            }
            document.write(`<h3> ${classA[i]['name']} having  ${classA[i]['skills'].length} skills.</h3>` );
        }              
   }
}