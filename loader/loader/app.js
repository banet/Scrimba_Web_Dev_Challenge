// Challenge instructions

// Wire up the loader so that it spins

// Stretch goals:

// 1. Add a timer
// 2. Change the loader style

const loader = document.querySelector('#loader')
const button = document.querySelector('#btn')
const counter = document.querySelector('.counter')


button.addEventListener('click', loadSpinner)
counter.addEventListener('click', loadSpinner)

let interval;
let timeLeft = counter.innerText;

function loadSpinner() {
//    count++
    //counter.innerText = count
    
   loader.classList.toggle('loader-new')
   if(loader.classList.contains('loader-new')) {
       button.innerText = 'stop'
       countDown()  
   }
   else {
       btn.innerText = 'load'
       // stop countdown
      updateTimer()
      
   }
    
}

function countDown() {
    
    interval=setInterval(updateTimer, 200)
}
function updateTimer() {
    if(timeLeft > 0) {
        timeLeft -= 1
        counter.innerText= timeLeft
    }
    else {
        clearInterval(interval)
        loader.classList.remove('loader-new')
        button.innerText='Load'
    }
}



// setTimeout(function() {
//         loadSpinner()
//     },3000) 
    