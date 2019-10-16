
// // select element 
// var myHeading = document.getElementById('myHeading');
// myHeading.style.color = "Blue"; // change element color

// var changeColor = () =>{
//     myHeading.style.color = 'Red';
// }
// myHeading.addEventListener('click',changeColor);//change element color on click on text

// //change element color on click on button

 var myButton = document.getElementById('myButton1');
// myButton.addEventListener('click',changeColor);

// //Access elements by get elements by tag name

 var myList = document.getElementsByTagName('li');
// for(var i = 0 ; i < myList.length ;i++){
//     console.log(myList[i]);
//     myList[i].style.color = 'red';
// }

// //set color from textbox to list
// var inputBox = document.getElementById('myText');
// myButton.addEventListener('click' , function(){
    
//     for(var i = 0 ; i < myList.length ;i++){
//         myList[i].style.color = inputBox.value;
        
//     }
//     inputBox.value = "";
// });

// // Access elements by class name

// var myClass = document.getElementsByClassName('coloring');
// for(var i = 0 ; i < myClass.length ;i++){
//     myClass[i].style.color = "yellow";
// }


////////////////////////////////////////////////////////

// var myButton1 = document.getElementById('myButton1');
// var myList = document.getElementsByTagName('li');
// myButton1.addEventListener('click',()=>{
//     for(var i = 0 ; i < myList.length ; i++){
//         myList[i].style.color = generateColor();
//     }
// });


// //////////////////////
var myButton = document.getElementById('myButton2');
html = "";
myButton.addEventListener('click', () => {
    for(var i = 0 ;i < 5; i++){
        html += '<h4 style = "background-color:'+generateColor()+'">Color</h4>';
        }
        document.write(html);
});
function generateColor(){
        return'rgb('+ Math.floor(Math.random()*256) +','+ Math.floor(Math.random()*256) +','+ Math.floor(Math.random()*256) +')'; 
}


