
var textInput = document.getElementById('myText');
var addButton = document.getElementById('addElement');
var removeButton = document.getElementById('removeElements');
var presentList = document.getElementById('myList');
var list = document.getElementsByTagName('li');
// console.log(list);
// console.log(removeButton);
// console.log(presentList)

addButton.addEventListener('click', () =>{
    var elemnt = document.createElement('li');
    elemnt.textContent = textInput.value;
    presentList.appendChild(elemnt);
    textInput.value = "";
});

removeButton.addEventListener('click',()=>{
    var removeElement = document.querySelector('li:last-child');
	//console.log(removeElement);
    presentList.removeChild(removeElement);
});

for(let i = 0 ; i <list.length ; i++){
    // console.log(list[i]);
    list[i].addEventListener('mouseover', ()=>{
         console.log(list[i]);
         list[i].textContent = list[i].textContent.toUpperCase();
     });

//     list[i].addEventListener('mouseout', ()=>{
//          console.log(list[i]);
//          list[i].textContent = list[i].textContent.toLowerCase();
//      });
// }
/////////////////////////////////////////////////

// presentList.addEventListener('mouseover', (event)=>{
//     event.target.textContent = event.target.textContent.toUpperCase();
// });

// presentList.addEventListener('mouseout', (event)=>{
//     event.target.textContent = event.target.textContent.toLowerCase();
// });
////////////////////////////////////////////////////////////////////
// presentList.addEventListener('mouseover', (event)=>{
//     if(event.target.tagName === 'LI'){
//         event.target.textContent = event.target.textContent.toUpperCase();
//     }
// });

// presentList.addEventListener('mouseout', (event)=>{
//     if(event.target.tagName === 'LI'){
//         event.target.textContent = event.target.textContent.toLowerCase();
//     }
// });

///////////////////////////////////////////


// document.addEventListener('click',()=>{
//     console.log(event.target);
// })

////////////////////////////////////////////////////////////////////

// function add(msg){
//     console.log(msg);
// }
// add("This is add method");

/////////////////////////////////////////////////

// function add(msg){
//     console.log(msg);
// }
// function add2(add , msg){
//     add(msg);
// }
// add2(add , "This is add2 method");

/////////////////////////////////////////////////////////

// function add(msg){
//     console.log(msg);
// // }
// function add2((msg)=>console.log(msg) , msg)
//     add(msg);
// }
// add2(add , "This is add2 method")