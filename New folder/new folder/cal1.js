let nam="bangladesh";

console.log(nam.length)
console.log(nam.replace("bangla" ,"India"));
console.log(" Is a county of " + nam.concat())
console.log(nam.toUpperCase())
console.log(nam.toLocaleLowerCase());
console.log(nam.slice(2,4))
console.log(nam.charCodeAt(3))
/*
function showMessage() {
  alert("Hello, world!");
}

<button onclick="showMessage()">Click me</button>

////

var name = "John";
let age = 30;
const PI = 3.14;
///
function addNumbers(num1, num2) {
  return num1 + num2;
}

let result = addNumbers(5, 10); // result = 15
///
let age = 20;

if (age < 18) {
  console.log("You are too young to vote.");
} else if (age >= 18 && age < 21) {
  console.log("You can vote but cannot drink.");
} else {
  console.log("You can vote and drink.");
}
//
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
//
let person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "swimming", "traveling"]
};

console.log(person.name); // "John"
console.log(person.hobbies[0]); // "reading"

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
//
<!DOCTYPE html>
<html>
  <head>
    <title>DOM Manipulation Example</title>
  </head>
  <body>
    <h1 id="heading">Hello, world!</h1>
    <button onclick="changeText()">Click me</button>

    <script>
      function changeText() {
        let heading = document.getElementById("heading");
        heading.innerHTML = "Hello, JavaScript!";
        heading.style.color = "red";
      }
    </script>
  </body>
</html>
//
<!DOCTYPE html>
<html>
  <head>
    <title>Event Handling Example</title>
  </head>
  <body>
    <button onclick="alert('Hello, world!')">Click me</button>

    <script>
      let button = document.querySelector("button");
      button.addEventListener("click", function() {
        console.log("Button clicked!");
      });
    </script>
  </body>
</html>
//
<!DOCTYPE html>
<html>
  <head>
    <title>AJAX and APIs Example</title>
  </head>
  <body>
    <h1>Random Joke Generator</h1>
    <button onclick="getJoke()">Get Joke</button>
    <p id="joke"></p>

    <script>
      function getJoke() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.chucknorris.io/jokes/random");
        xhr.onload = function() {
          if (xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            document.getElementById("joke").innerHTML = response.value;
          }
        };
        xhr.send();
      }
    </script>
  </body>
</html>
//
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying hard for their ${this.grade} grade.`);
  }
}

let person = new Person("John", 30);
let student = new Student("Jane", 18, 12);

person.sayHello(); // Output: Hello, my name is John and I am 30 years old.
student.sayHello(); // Output: Hello, my name is Jane and I am 18 years old.
student.study(); // Output: Jane is studying hard for their 12 grade.
//
function getData() {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
    xhr.onload = function() {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        resolve(data);
      } else {
        reject("Error retrieving data");
      }
    };
    xhr.send();
  });
}

getData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
//
async function getData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await response.json();
  return data;
}

async function processData() {
  let data = await getData();
  for await (let item of data) {
    console.log(item);
  }
}

processData();
//
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

let addAndMultiply = compose(add, multiply);
let result = addAndMultiply(2, 3); // result is 8
//
<button id="myButton">Click me!</button>
<script>
  let button = document.getElementById("myButton");
  button.addEventListener("click", function() {
    alert("Button clicked!");
  });
</script>
//
let text = "The quick brown fox jumps over the lazy dog";
let pattern = /quick.*fox/;
let result = pattern.test(text); // result is true
//function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

fetchData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
//
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

let person = new Person("John", 30);
person.sayHello(); // outputs "Hello, my name is John and I am 30 years old."
//
// in file math.js
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// in file main.js
import { add, multiply } from "./math.js";

let result1 = add(2, 3); // result1 is 5
let result2 = multiply(2, 3); // result2 is 6
//
*/

