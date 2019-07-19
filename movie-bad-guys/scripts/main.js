const movieBadGuys = ["Johnny Lawrence", "The Joker", "Freddy Krueger", "Lord Voldemort", "Darth Vader", "Palpatine", "Bane", "Jigsaw", "Doctor Evil", "The Blob", "Cujo", "Jabba the Hutt", "Ivan Drago", "Biff Tannen", "Professor Severus Snape", "Johnny Ringo", "Beetlejuice"]

// TODO: Iterate the above array of movie villains and for each character with names less than 12 characters, log their name to the console

const shortNames = (array) => {
  const shortBadGuys = []
  array.forEach(badGuy => {
    if (badGuy.length < 12) {
      shortBadGuys.push(badGuy)
    }
  })
  console.log(shortBadGuys)
}

shortNames(movieBadGuys)

const longNames = (array) => {
  const longBadGuys = []
  array.forEach(badGuy => {
    if (badGuy.length >= 12) {
      longBadGuys.push(badGuy)
    }
  })
  console.log(longBadGuys)
}

longNames(movieBadGuys)


// TODO: Iterate the array of movie villains and for each character with names less than 12 characters AND contain more than one word, log their name to the console

const shortNamesWords = (array) => {
  array.forEach(badGuy => {
    if (badGuy.length < 12 && badGuy.split(" ").length > 1)
      console.log(badGuy)
  })
}

shortNamesWords(movieBadGuys)

// Could also have used 'badGuy.includes(" ")' as second condition


// TODO: Iterate the array of movie villains and for each character with names greater than 8 characters AND DO NOT contain more than one word, push their name into a new array and log that new array in the console.

const moreBadGuys = (array) => {
  const newBadGuys = []
  array.forEach(badGuy => {
    if (badGuy.length > 8 && badGuy.split(" ").length === 1)
    newBadGuys.push(badGuy)
  })
  console.log(newBadGuys)
}

moreBadGuys(movieBadGuys)

// Could also have used 'badGuy.includes(" ") === false' as second condition or '!badGuy.includes(" ")' 


console.log(movieBadGuys[0].split(" "))


// Another method for solving: Filter returns a new array based on the conditions you give it