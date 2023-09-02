// question 1
const arr = [1,2,3,4,5]

const doubleArr = function(num) {
   return num * 2; 
}

function newArr(arr, callback) {
  return (arr.map(callback));
}

const doubleArr2 = newArr(arr, doubleArr);
console.log(doubleArr2);


// question 2
function manipulateString() {
  const logString = function(e) {
    return`The manipulated string is : ${e.toUpperCase()}`
  }
  const string1 = logString('hello, world!')
  console.log(string1);
}
manipulateString()


// question 3
const obj = {
  name: 'John',
  lastname: 'valuture',
  age: 20,
}
function ageInDays() {
  const fullName = `${obj.name} ${obj.lastname}`
  
  const ageInDays = obj.age * 365;

  const callback = function() {
    const callback2 = `The persons full name is ${fullName} and their age in days is ${ageInDays}.`
    return callback2
  }
    return callback();
}

const sectence = ageInDays()
console.log(sectence);


// question 3
const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { title: 'My life', author: 'George Orwell', year: 1949 },
  { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 }
];



const newList = books.map((e) => {
  const newList = e.title
  return newList
})


const titlesOrder = function() {
 const newTitles = newList.sort()
 return newTitles
}
console.log(titlesOrder());


// question 5
const names = "Abhay"

function name2() {
 return new Promise((resolve, reject) => {
  resolve(`Hello, ${names}!`)
  })
}
const promise = name2()
promise.then((e) => {
  console.log(e);
})


// question 6
fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
  return response.json()
}).then((response) => {
  console.log(response);
}).catch((error) => console.log(error))


// question 7
function objFromApi() {
  const todo = 'https://jsonplaceholder.typicode.com/todos/1'
  const post = 'https://jsonplaceholder.typicode.com/posts/1'

  fetch(todo).
  then((response) => {
    return response.json()
  }).then((todoData) => {
    fetch(post).then((response) => {
      return response.json()
    })
    .then((postData) => {
      const combinedData = {
       ...todoData, ...postData
      }
      console.log(combinedData);
    })
  })
  
}
objFromApi()


// question 8
fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
  return response.json()
}).then((response) => {
  console.log(response);
}).catch((error) => console.log(error))


// question 9
// fetch data from url
fetch('https://jsonplaceholder.typicode.com/posts/123456789').then((response) => {
  // error
  if (!response.ok) {
    throw new Error(`failed to fetch data status: ${response.status}`)
  }
  return response.json()
}).then((data) => {
  // throw error on div element
  const dataContainer = document.querySelector('#data-container')
  dataContainer.textContent = JSON.stringify(data, null, 2);
}).catch((error) => {
  const errorMessageContainer = document.getElementById("error-message");
        errorMessageContainer.textContent = `Error: ${error.message}`;
})


      













// node script.js
