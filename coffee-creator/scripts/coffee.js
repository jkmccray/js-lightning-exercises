const bean = "Colombian"
const style = "Espresso"
const size = "Medium"
const customer = {
    firstName: "Johann",
    lastName: "Abramovitz"
}

// Use a string template that uses interpolation to generate the following string
// "Medium Colombian Espresso is ready for Johann Abramovitz!!"

const coffeeString = `${size} ${bean} ${style} is ready for ${customer.firstName} ${customer.lastName}!!`

console.log(coffeeString)

const completedOrders = document.getElementById("completedOrders") 
// 1. Create a `<div>` element in HTML and give it an id attribute value of `completedOrders`
// 2. Update the `innerHTML` property of `div` with the message that you created above.

completedOrders.innerHTML += coffeeString