var addButton = document.getElementsByClassName('add');
var subButton = document.getElementsByClassName('sub');
var multi = document.getElementsByClassName('multi');
var div = document.getElementsByClassName('division');
var divSet = document.getElementById('divSet');
var inputOne = document.getElementById('inputOne');
var inputTwo = document.getElementById('inputTwo');
var result1 = document.getElementById('result');
//console.log(result)

divSet.addEventListener('click',(event)=>{
    if(event.target.tagName == "BUTTON"){
        if(event.target.textContent == "ADD(+)"){
            let result = parseInt(inputOne.value) + parseInt(inputTwo.value);
            result1.value = parseInt(result);
        }
        if(event.target.textContent == "SUBSTRACTION(-)"){
            let result = parseInt(inputOne.value) - parseInt(inputTwo.value);
            result1.value = parseInt(result);
        }
        if(event.target.textContent == "MULTIPLICATION(*)"){
            let result = parseInt(inputOne.value) * parseInt(inputTwo.value);
            result1.value = parseInt(result);
        }
        if(event.target.textContent == "DIVISION(/)"){
            let result = parseInt(inputOne.value) / parseInt(inputTwo.value);
            result1.value = parseInt(result);
        }
    }
    
})