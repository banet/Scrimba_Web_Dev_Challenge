
// Challenge instructions

// When you click the button you change the text and color on ball

// Stretch goals:

// 1. Allow the user to input question
// 2. Limit the number of times the ball can be asked

const advice = [
    "If you’re good at something, never do it for free.",
    "Do, or do not. There is no try.",
    "It’s what you do right now that makes a difference.",
    "Until you start believing in yourself, you ain't gonna have a life!",
    "Life does not stop and start at your convenience.",
    "You know what the trouble about real life is? There's no danger music."
]

const colors = ['tomato', 'seagreen','whitesmoke', 'teal', 'linen' ]


const btn = document.querySelector('#adviceBtn')
const display = document.querySelector('#adviceDisplay')
const ball = document.querySelector('#adviceEye')
const colorText = document.querySelector('.colorText')
btn.addEventListener('click', adviceMe)


function adviceMe() {

    const randomAdvice = advice[Math.floor(Math.random()*advice.length)]
    display.innerText = randomAdvice

    // const randomColor = colors[Math.floor(Math.random()* colors.length)]
    // ball.style.background = randomColor
  
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    ball.style.background = "#" + randomColor
    colorText.innerHTML = "#" + randomColor

    //display.style.backgroundColor = randomcolor({luminosity: 'light'})
}


// generate random light colors: 
    // adviceEye.style.backgroundColor = randomcolor({luminosity: 'light'})


