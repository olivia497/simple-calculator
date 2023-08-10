const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')

let calculation = []
let total

function calculate(button){
  const value = button.textContent 
  if(value === "CLEAR"){
    calculation = []
    screenDisplay.textContent = ''
  }else if(value === "="){
    screenDisplay.textContent = eval(total) //eval method takes whole string and returns a completion value
  }else {
    calculation.push(value) //collects all the items in the array
  total = calculation.join('')
  screenDisplay.textContent = calculation.join('') //shows on screen and removed commas 

  }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))


