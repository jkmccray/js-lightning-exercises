const getAPIData = () => {
  return fetch("https://api.stevebrownlee.com/jobs/")
  .then(response => response.json())
}

