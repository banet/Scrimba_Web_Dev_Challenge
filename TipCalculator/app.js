
/**
 *  Challenge:
 * Entering the usem amount, find out total amount user has to pay
 * 
 * Challenge 2
 * - Add another field woth total number of people
 * - Show tip and total per person
 *
 * 
 * 
 */


// Grab elements
const form = document.querySelector('#form')
const bill = document.querySelector('#bill_value')
const tip = document.querySelector('#tip_value')
const peopleValue =document.querySelector('#people_value')
const peopleNumber = document.querySelector('#people_number')
const btn = document.querySelector('#calculate')

const result = document.querySelector('#total')

// Add eventListener

//btn.addEventListener('click', calculateTip)
btn.addEventListener('click', calculateTip )

function calculateTip() {
    let billValue = bill.value
    let tipProcent  = (tip.value / 100)
    let tipValue = Number(tipProcent) * Number(billValue)
    
   
    let total = Number(tipValue) + Number(billValue)
    console.log(tipValue)

    result.textContent = total 
   peopleCalculateTip()
    
}


function peopleCalculateTip() {
     let howManyPeople = peopleValue.value
     peopleNumber.textContent = howManyPeople
    console.log(howManyPeople)
}
// When btn click: show tip , show people show total amount