// 1. Create a function that logs the result of adding two numbers (edited) 
const addFunction = (a, b) => {
  console.log(a+b)
}

addFunction(10, 5)

const multiplyFunction = (a, b) => {
  console.log(a*b)
}

multiplyFunction(39, 28)

// 2. Create a second function called "calculate" that takes three arguments: two numbers and a function
// Execute the second function and make it output 34
const calculate = (a, b, func) => {
  func(a, b)
}

calculate(17, 17, addFunction)
calculate(5, 4, multiplyFunction)
