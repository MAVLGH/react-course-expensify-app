const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Mario Vergara',
      age: 25
    })
    // reject('Something went wrong')
  }, 1000)
})

console.log('Before')

promise
  .then((data) => {
    console.log('1 ', data)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('New Promise!')
      }, 1000)
    })

  })
  .then((lastReturn) => {
    console.log('does this run?', lastReturn)
  })
  .catch((error) => {
    console.log('error: ', error)
  })


console.log('After')