const container =document.getElementById("container") ;

const colors=["red","green", "blue", "pink", "orange"]

let currentIndex=0;

function changeColor(){
    container.style.backgroundColor=colors[currentIndex];
    alert('we are learning timeout')
currentIndex++;
if(currentIndex>colors.length-1){
    currentIndex=0;
}
}

setInterval(changeColor, 1000);