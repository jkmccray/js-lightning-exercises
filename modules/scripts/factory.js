// In the factory.js file, make a factory function named createJobHTML with one parameter which will accept a job object. Make the createJobHTML function return a <section> with the job role in a child <h1>, the organization in a child <h2>, and the city in a child <aside>.

const createJobHTML = (jobObj) => {
  return `
  <section>
    <h1>${jobObj.role}</h1>
    <h2>${jobObj.organization}</h2>
    <aside>${jobObj.city}</aside>
  </section>
  `
}
