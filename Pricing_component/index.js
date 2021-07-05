// 🐱 🦁 🐯

/* Instructions */
/* When clicked, the selected card should enlarge (up to you how much) and the price should have a color of #ffd60a*/
/* The non-selected cards should reduce in opacity */
/* Stretch goal: add a toggle to display monthly and annual prices */

const cards = document.querySelectorAll('.card')
const priceCat = document.querySelector('.card-cat-price')
const priceLion = document.querySelector('.card-cat-lion')
const priceTiger = document.querySelector('.card-tiger-price')

const cardCat = document.querySelector('.card-cat')
const cardLion = document.querySelector('.card-lion')
const cardTiger = document.querySelector('.card-Tiger')

// Event listener

// cardCat.addEventListener('click', clickCardCat)
// cardLion.addEventListener('click', clickCardLion)
// cardTiger.addEventListener('click', clickCardTiger)

cards.forEach(function(card) {
    // add eventListener
    card.addEventListener('click', selectCard)
})

function selectCard() {
   
   //this.classList.toggle('selected')
  const selected = this
 
  selected.classList.toggle('selected')
  const notSelected = [...cards].filter(function(value) {
      return value != selected
      
  })
  console.log(notSelected)

  notSelected.forEach(function(card) {
      card.classList.toggle('unselected')
      priceLion.style.color='#ffd60a'
  })
   
}
// function clickCardCat() {

//     //Resize card
//     cardCat.classList.toggle('card-animation')
//     cardLion.classList.remove('card-animation')
//     cardTiger.classList.remove('card-animation')
//     // Change color of price
//     priceCat.style.color='#ffd60a'
//     cardCat.style.opacity = 1
//     cardLion.style.opacity = .6
//     cardTiger.style.opacity = .6
// }


// function clickCardLion() {

//     //Resize card
//     cardLion.classList.toggle('card-animation')
//     cardCat.classList.remove('card-animation')
//     cardTiger.classList.remove('card-animation')
//     // Change color of price
//     priceCat.style.color='#fff'
//     priceLion.style.color='#ffd60a'
//     //priceTiger.style.color='#fff'

//     cardLion.style.opacity = 1
//     cardCat.style.opacity = .6
//     cardTiger.style.opacity = .6
// }

// function clickCardTiger() {

//     //Resize card
//     cardTiger.classList.toggle('card-animation')
//     cardCat.classList.remove('card-animation')
//     cardTiger.classList.remove('card-animation')
//     // Change color of price
//     priceTiger.style.color='#ffd60a'
//     cardTiger.style.opacity = 1
//     cardLion.style.opacity = .6
//     cardCat.style.opacity = .6
// }

