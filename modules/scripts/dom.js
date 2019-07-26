// In the dom.js file, create a function named renderJob with one parameter which will accept an HTML string. The function should render that HTML string in the jobs article in your HTML file.

const jobsList = document.querySelector("#jobs")

const renderJob = (HTMLstring) => {
  jobsList.innerHTML += HTMLstring
}
