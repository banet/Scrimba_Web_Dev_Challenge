
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

const bill = document.querySelector('#bill_value')
const tip = document.querySelector('#tip_value')
const tipProcentValue = document.querySelector('#tip_procent')
const peopleValue =document.querySelector('#people_value')
const amountPerson = document.querySelector('#amount_person')
const peopleNumber = document.querySelector('#people_number')
const btn = document.querySelector('#calculate')

const result = document.querySelector('#total')

// Add eventListener

btn.addEventListener('click', calculateTip )



function calculateTip() {
     let billValue = bill.value
     let tipProcent  = tip.value / 100
     let tipValue = tipProcent * billValue

    // Show result
    let totalSum = Math.round(Number(tipValue) + Number(billValue)) 
    result.textContent = totalSum 

    // Show number of People
     let numberOfPeople = peopleValue.value
     peopleNumber.textContent = numberOfPeople

     //Show amount tip per person
     let tipEachPerson = Math.round(totalSum / numberOfPeople)
     amountPerson.textContent = +tipEachPerson 
       

   showTipProcent()
    
}


function showTipProcent() {

     // Show tip in % 
      let tipProcent  = Math.floor((tip.value / 100)*100)
      tipProcentValue.textContent = tipProcent
}

