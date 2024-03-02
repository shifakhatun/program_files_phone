


// setTimeout(function(){
//     alert('we are learning timeout')
// },3000) 

///3sec means 3000milisecond
const modal=document.getElementById("modal");
const id = setTimeout(function(){
modal.classList.remove("hidden");
}, 3000)

clearTimeout(id)