const button = document.querySelector("button")
const p = document.querySelector("p")

let count = 0;

button.addEventListener("click", function (){
    count++;
    p.innerHTML = count;
})

const body = document.querySelector('body')

body.addEventListener('click', function(event){
    console.log(event)
    console.log('current target: ', event.currentTarget);
    console.log('target: ', event.target);
})


