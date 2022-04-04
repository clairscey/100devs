//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

const filterRange = (arr, num1, num2) => arr.filter( value => (value >= num1 && value <= num2) )

//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
let nums = [1,2,3,4,5,6,7,8,9]
const filterRangeInPlace = (arr, a, b) => {
    for (let i = 0; i <= arr.length; i++){
        if (arr[i] < a || arr[i] > b){
            arr.splice(i, 1)
            i--
        }
    }
}
    
filterRangeInPlace(nums, 2, 6)

//Sort in decreasing order

let arr = [5, 2, 1, -10, 8];

const decreasingSort = arr => arr.sort( (a, b) => a - b).reverse()

alert( arr ); // 8, 5, 2, 1, -10

//We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
let arr1 = ["HTML", "JavaScript", "CSS"];

const copySorted = arr => arr.slice().sort()

let sorted = copySorted(arr1);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr1 ); // HTML, JavaScript, CSS (no changes)

//You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map( user => user.name)

alert( names ); // John, Pete, Mary

//You have an array of user objects, each one has name, surname and id.

//Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map( user => ({ fullName: `${user.name} ${user.surname}`, id: user.id}))

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

const sortByAge = arr => arr.sort( (a, b) => a.age - b.age)

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

//Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

//Multiple runs of shuffle may lead to different orders of elements. For instance:
let nums = [1,2,3,4,5,6]
const shuffle = array => {
    let dummy = array.slice()
    let result = Array.from(array.length)
    for (let i = 0; i < array.length; i++){
        let rand = Math.floor(Math.random() * dummy.length);
        result[i] = dummy[rand];
        dummy.splice(rand, 1)
    }
    return result
}
shuffle(nums)

//Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

const getAverageAge = arr => arr.reduce( (sum, value) => sum += value.age, 0 ) / arr.length

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

//Create a function unique(arr) that should return an array with unique items of arr.
function unique(arr) {
    let uniques = []
    for (let i = 0; i < arr.length; i++){
        if (!(uniques.includes(arr[i]))){
            uniques.push(arr[i])
        }
    }
    return uniques
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"];
  
  alert( unique(strings) ); // Hare, Krishna, :-O

//Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  const groupById = arr => arr.reduce( (sum, value) => {
      sum[value.id] = value;
      return sum;
  }, {} )

  let usersById = groupById(users);
  
  /*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */