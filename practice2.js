var textBox = document.getElementById('textBox');
var playButton1 = document.getElementById('play1');
var playButton2 = document.getElementById('play2');
var col = document.getElementsByClassName('col');

var randomNumber = 0;
playButton1.addEventListener('click',()=>{
    randomNumber = Math.floor(Math.random() * 25) + 1;
    textBox.value = randomNumber;
    for(let i= 0; i< col.length ; i++){
        
        if(col[i].textContent == randomNumber){
            col[i] = col[i].textContent +randomNumber;
            col[i].style.backgroundColor = "yellow";
        }
    }
});

playButton2.addEventListener('click',()=>{
    randomNumber = Math.floor(Math.random() * 25) + 1;
    textBox.value = randomNumber;
    for(let i= 0; i< col.length ; i++){
        
        if(col[i].textContent == randomNumber){
            col[i] = col[i].textContent +randomNumber;
            col[i].style.backgroundColor = "Red";
        }
    }
});