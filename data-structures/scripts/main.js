/* Take the data below and represent it as each of these data structures.
1. A string
2. An object
3. An array */

const meal = "lunch"
const sandwich = "peanut butter and jelly"
const bread = "whole wheat"
const drink = "grape juice"
const fruit = "apple" 

const string = `I ate ${sandwich} on ${bread} with ${drink} and an ${fruit} for ${meal} today.`
console.log(string)

const obj = {
  meal: "lunch",
  sandwich: "peanut butter and jelly",
  bread: "whole wheat",
  drink: "grape juice",
  fruit: "apple"
}
console.log(obj)

const arr = [meal, sandwich, bread, drink, fruit]
console.log(arr)

const lunchSet = new Set()
lunchSet.add(meal)
lunchSet.add(sandwich)
lunchSet.add(bread)
lunchSet.add(drink)
lunchSet.add(fruit)
lunchSet.add(sandwich)
console.log(lunchSet)

// Sets take the unique values only and ignore duplicates



const cats = [
  {
    name: "Henry",
    bio: "Eat plants, meow, and throw up because I ate plants. Knock over christmas tree, stare at imaginary bug, and meow and walk away. Lick master's hand at first then bite because im moody purrrrrr do not try to mix old food with new one to fool me!"
  },
  {
    name: "Jessica",
    bio: "Spend all night ensuring people don't sleep. Sleep all day. Meowzer for when in doubt, destroy the couch."
  },
  {
    name: "Jake",
    bio: "Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked munch on tasty moths for meow meow mama meow all night murr I hate humans they are so annoying."
  }
]
// Write out a brief list of steps needed to display this data in the DOM.

// Create container element in index.html and give it an id
// Use document.querySelector to get a representation of it in JS and store it in a variable
// Create a function that will take the values in each object and make them into a string (HTML representation)
// Create a function that will iterate the array and inject the HTML representations into the DOM using innerHTML

const catContainer = document.querySelector("#catContainer")

const catString = (catObj) => {
    return `
    <section class="eachCat">
      <h3 class="catName">${catObj.name}</h3>
      <p class="catBio">${catObj.bio}</p>
    </section>
    `
}

const addCats = (arr) => {
  arr.forEach(cat => {
    const newCat = catString(cat)
    catContainer.innerHTML += newCat
  })
}

addCats(cats)

// it is good practice to write a separate function for displaying things in the DOM, like this:
// const renderToDom = htmlString => { catOutput.innerHTML += htmlString }

