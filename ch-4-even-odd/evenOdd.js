// 2. Design a function named `evenOrOdd` that take a single number as an argument.
// 3. It should return the string "Even" if the number is evenly divisible by two.
// 4. It should return the string "Odd" if the number is not evenly divisible by two.
// 5. Invoke the function once with an even number argument
// 6. Invoke the function once with an odd number argument

// Use the modulo - or remainder - operator in JavaScript to accomplish this.

const evenOrOdd = (num) => {
  if (num % 2 === 0) {
    return "Even"
  }
  return "Odd" // Don't need an else statement bc if condition on line 10 is false, it will automatically go to line 13
}

const firstNum = 40
const secondNum = 51

console.log(`${firstNum} is an ${evenOrOdd(firstNum)} number`)
console.log(`${secondNum} is an ${evenOrOdd(secondNum)} number`)


// 1. Create an array of numbers. Some even, some odd.
// 2. Iterate the array using the `forEach()` array method, and invoke the `evenOrOdd` function passing the current number as the argument.
// 3. Use `console.log` to display the result in the Developer Console.

const randomNumbers = [2, 43, 62, 75, 10, 93, 58, 37, 209]

const tellEvenOrOdd = (array) => {
  array.forEach((num) => {
    console.log(`${num} is ${evenOrOdd(num)}`)
    
  })
}

tellEvenOrOdd(randomNumbers)

