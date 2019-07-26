  getAPIData()
    .then(parsedData => {
      // store array of job objects in a variable
      const jobsArray = parsedData.results
      // iterate over the array and invoke factory function and render html rep to dom
      jobsArray.forEach(job => {
        const HTMLrep = createJobHTML(job)
        renderJob(HTMLrep)
      })
    })

