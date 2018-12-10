let count = 0

const counter = () => {
  // the function does this
  // - increment the value of count
  count = count + 1

  // - change the p tag to show what is inside the variable count
  const ptag = document.querySelector('p')
  ptag.textContent = count
}

const reset = event => {
  //dont do the default functionality that this event
  // would have done  (in this case right click)
  event.preventDefault()

  //set count to 0
  count = 0

  // - change the p tag to show what is inside the variable count
  const ptag = document.querySelector('p')
  ptag.textContent = count
}

const main = () => {
  // write all our code here inside main

  // find the p tag
  const ptag = document.querySelector('p')
  console.log(ptag)

  // change the p tag text to whatever is inside the variable count
  ptag.textContent = count

  // anytime the user clicks on the button
  // - find the button

  const button = document.querySelector('button')
  console.log(button)

  // - tell the button anytime you are clicked call the function
  button.addEventListener('click', counter)

  // - tell the ptag anytime you are clicked, call the reset function
  ptag.addEventListener('click', reset)

  // . .
  //
  //
  //
}

document.addEventListener('DOMContentLoaded', main)
