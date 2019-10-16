
var myDiv = document.getElementById('myDiv');
var olList = document.getElementById('myList')
var addButton = document.getElementById('addElement');
var textBox = document.getElementById('myText');
var list = document.getElementsByTagName('li');

for(let i = 0 ; i < list ; i++){
    addButtons(newElement);
}
function addButtons(newElement){
    var newButton = document.createElement('button');
    newButton.className("up")
    newButton.className("down")
    newButton.className("remove")
    newElement.appendChild("newButton");
}

addButton.addEventListener('click',()=>{
    var newElement = document.createElement('li');
    newElement.textContent = textBox.value;
    olList.appendChild(newElement);
    textBox.value = "";
    addButtons(newElement);
});

myDiv.addEventListener('click',(event)=>{
    if(event.target.tagName == "BUTTON"){
        if(event.target.textContent == "Remove"){
            let li = event.target.parentNode;
            let ol = li.parentNode;
            ol.removeChild(li);
        }
    }
    if(event.target.textContent == "UP"){
        //console.log(event.target.textContent)
        let li = event.target.parentNode;
        //console.log(li)
        let prevElement = li.previousElementSibling;
        //console.log(prevElement);
        let ol = li.parentNode;
        ol.insertBefore(li,prevElement);
    }
    if(event.target.textContent == "Down"){
        let li = event.target.parentNode;
        let ol = li.parentNode;
        let nextElement = li.nextElementSibling;
        ol.insertBefore(nextElement,li);
    }
}
);  
