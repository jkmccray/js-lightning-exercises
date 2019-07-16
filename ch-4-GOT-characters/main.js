// Console.log the GOT characters that died using a function.
// -hint you will need a for loop or a foreach.


// ---- My Solution ---- 
const got = [
  {
    char: "Theon Greyjoy",
    isAlive: false
  },
  {
    char: "The Night King",
    isAlive: false
  },
  {
    char: "Varys",
    isAlive: false
  },
  {
    char: "Jaime Lannister",
    isAlive: false
  },
  {
    char: "Cersei Lannister",
    isAlive: false
  },
  {
    char: "John Snow",
    isAlive: true
  }
]

// const isNotAlive = () => {
//   for (let i=0; i<got.length; i++) {
//     if (got[i].isAlive === false) {
//       console.log(got[i].char)
//     }
//   }
// }

const isNotAlive = () => {

  got.forEach((currentChar) => {
    if (currentChar.isAlive === false)
      console.log(currentChar.char)
  }
  )
}

isNotAlive()


// ---- Solution Gone Over in Class ---- 

// const got = ["Theon Greyjoy", "The Night King", "Varys", "Jaime Lannister", "Cersei Lannister", "John Snow"]



// const isNotAlive = array => {
//  array.forEach(player => {
//    if (player !== "John Snow") {
//      console.log(player)
//    }
//  });
// }

// isNotAlive(got)