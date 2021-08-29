// Challenge instructions

// Wire up the loader so that it spins

// Stretch goals:

// 1. Add a timer
// 2. Change the loader style

const loader = document.querySelector('#loader')
const button = document.querySelector('#btn')
const counter = document.querySelector('.counter')
const timeLeft = counter.innerText

button.addEventListener('click', loadSpinner)
counter.addEventListener('click', loadSpinner)
let interval;
let count = 6;
function loadSpinner() {
//    count++
   // counter.innerText = count
    
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
    
    interval=setInterval(updateTimer, 100)
}
function updateTimer() {
    if(timeLeft > 0) {
        timeLeft -= 1
        counter.innerText= timeLeft
    }
    else {
        clearInterval(interval)
    }
}


// setTimeout(function() {
//         loadSpinner()
//     },3000) 
    