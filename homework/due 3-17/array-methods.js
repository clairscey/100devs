//Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//That is: removes all dashes, each word after dash becomes uppercased.
const camelize = (string) => {
    let characters = string.split("")
    characters.forEach((item, index) => {
        if (item === "-"){
            characters[index + 1] = characters[index + 1].toUpperCase()
            characters.splice(index, 1)
        }
    })
    return characters.join('')
}

//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
//The function should not modify the array. It should return the new array.

const filterRange = (arr, a, b) =>{
    return arr.filter(item => (item >= a && item <= b))
}

//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

//The function should only modify the array. It should not return anything.

const filterRangeInPlace = (arr, a, b) =>{
    arr.forEach((item, index) => {
        if (item < a || item > b){
            arr.splice(index, 1)
        }
    })
    return arr
}

//sort array in decreasing order
const sortDecreasing = (nums) => nums.sort( (a,b) => a - b).reverse()
//shorter version:
const sortDecreasingShorter = (nums) => nums.sort( (a, b) => b - a)

//We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
//Create a function copySorted(arr) that returns such a copy.

const copySortedTest = (arr) => {
    console.log(arr)
    let sorted = arr
    sorted = sorted.sort( (a, b) => a - b)
    console.log(arr)
    console.log(sorted)
    return sorted
}

//short version - solution (slice makes a copy)
const copySorted = (arr) => arr.slice().sort();

//***********************UNFINISHED**************************** */
//Create a constructor function Calculator that creates “extendable” calculator objects.

//The task consists of two parts.

//First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

//Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

//For instance, let’s add the multiplication *, division / and power **:

//**************************UNFINISHED************************* */


//You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name)
alert( names )

//You have an array of user objects, each one has name, surname and id.

//Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
let joh = { name: "John", surname: "Smith", id: 1 };
let pet = { name: "Pete", surname: "Hunt", id: 2 };
let mar = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(value => ({fullName: `${value.name} ${value.surname}`, id: value.id}))

users.map()
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith

//Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

const sortByAge = (arr) => arr.sort( (a , b) => a.age - b.age )

//Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
const shuffle = (arr) => arr.sort(() => Math.random() - 0.5)
//Fisher-Yates style (walk backwards through array and swap randomly)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

//Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

const getAverageAge = (users) => (users.reduce( (a, e) => a += e.age, 0) / users.length)

//Create a function unique(arr) that should return an array with unique items of arr.
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

const unique = (arr) => {
    let uniques = []
    arr.forEach((value) => {
        if (!uniques.includes(value)){
            uniques.unshift(value)
        }
    })
    return uniques
}

alert( unique(strings) ); // Hare, Krishna, :-O

//**********************UNFINISHED*********************** */
//Let’s say we received an array of users in the form {id:..., name:..., age:... }.

//Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);
  
  /*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */

  //Please use array .reduce method in the solution.
  //********************UNFINISHED******************************* */