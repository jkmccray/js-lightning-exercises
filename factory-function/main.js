// 1. In your HTML, define an `<article>` element with an id of `contactList`
// 2. Create a function called `createContact`.  The function should return a new object with three properties: `name`, `title`, `email`.
// 3. Design `createContact` to accept three arguments, which will be used to make the object.

const createContact = (name, title, email) => ({
    name, title, email
  })

// This is shorthand. Can write name instead of name: name. Can remove the overall curly braces but have to add parenthese so that js understands it is an object. Can remove "return" as well

const newContact1 = createContact("Jacquelyn", "student", "email@gmail.com")
const newContact2 = createContact("Mo", "stooge", "none@gmail.com")
const newContact3 = createContact("Larry", "also a stooge", "nkek@gmail.com")
const newContact4 = createContact("Curly", "yet another stooge", "toomanystooges@gmail.com")
const newContact5 = createContact("Beyonce", "Queen B", "lemonade@gmail.com")


// 1. Write another function named `displyContact`. Design it to accept a contact object as an argument.
// 2. Use `document.querySelector()` and `innerHTML += ...` to add a new `<section>` element as a child to your `<article>`.
// 3. The `<section>` should have a class of `contact`.
// 4. The contact should display the name of the contact in an `<h1>` element, and the title as an `<h2>` element, and the email in a `<div>` element

const contactList = document.querySelector("#contactList")

const displyContact = (contactObject) => {
  const newContactSection = `
  <section class="contact">
    <h1 class="name">Name: ${contactObject.name}</h1>
    <h2 class="title">Title: ${contactObject.title}</h2>
    <div class="email">Email: ${contactObject.email}</div>
  </section>
  `
  contactList.innerHTML += newContactSection
}

displyContact(newContact1)
displyContact(newContact2)
displyContact(newContact3)
displyContact(newContact4)
displyContact(newContact5)

