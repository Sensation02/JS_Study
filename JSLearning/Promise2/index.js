// const request = new Request('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'GET',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }), // або сюди можна передати перемінну об'єкта
// })
const data = {
  title: 'foo',
  body: 'bar',
  userId: 1,
}

const headers = new Headers({
  'Content-type': 'application/json; charset=UTF-8',
  Authorization: 'Bearer token',
})

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'POST',
  body: JSON.stringify(data), // це працює тільки з POST, PUT, DELETE
  headers: headers,
})
  .then((response) => {
    console.log(response)
    return response.json()
  })
  .then((json) => {
    console.log(json)
  })
  .catch((error) => {
    console.log(error)
  })

// або у вигляді функції:

async function sendRequest() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'GET',
    // body: JSON.stringify(data), // це працює тільки з POST, PUT, DELETE
    // headers: {
    //   'Content-type': 'application/json; charset=UTF-8',
    //   Authorization: 'Bearer token',
    // }, // або передаємо змінну headers
  })
  const json = await response.json()
  console.log(json)
  console.log(response.bodyUsed)
}

sendRequest()
