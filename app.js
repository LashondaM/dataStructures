// Basic Data Structures: Use an Array to Store a Collection of Data
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/use-an-array-to-store-a-collection-of-data

let yourArray = [true,1,2,'hello', 'hello again']; // Change this line
 
var nestedArray = [
 [1,2,3],
 ['a', 'b', 'c'],
 ['I', 'II','III']
 
]
// ^We have defined a variable called yourArray. Complete the statement by^ assigning an array of at least 5 elements in length to the yourArray variable. Your array should contain at least one string, one number, and one boolean.








// Basic Data Structures: Access an Array's Contents Using Bracket Notation
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/access-an-arrays-contents-using-bracket-notation

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "not b anymore"
// Only change code above this line
console.log(myArray); // [ 'a', 'not b anymore', 'c', 'd' ]
 
//
let ourArray = ["a", "b", "c"];
let ourVariable = ourArray[0];
// ourVariable equals "a"
ourArray[1] = "not b anymore";
// ourArray now equals ["a", "not b anymore", "c"];
 
 
 
 
 
 
 
 
// Basic Data Structures: Add Items to an Array with push() and unshift()
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/add-items-to-an-array-with-push-and-unshift

function mixedNumbers(arr) {
 // Only change code below this line
arr.unshift('I', 2, 'three');
arr.push(7, 'VIII', 9);
 // Only change code above this line
 return arr;
}
 
console.log(mixedNumbers(['IV', 5, 'six']));
// 
 
 
 
 
 
 
 
 
 
 
 
 

// Basic Data Structures: Remove Items from an Array with pop() and shift()
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/remove-items-from-an-array-with-pop-and-shift

function popShift(arr) {
 let popped = arr.pop(); // Change this line
 let shifted = arr.shift(); // Change this line
 return [shifted, popped];
}
 
console.log(popShift(['challenge', 'is', 'not', 'complete']));
 
// [ 'challenge', 'complete' ]
let greetings = ['whats up?', 'hello', 'see ya!'];
greetings.pop(); //===============
// now equals ['whats up?', 'hello']
greetings.shift(); //======================
// now equals ['hello'] //======================
let popped = greetings.pop();
// returns 'hello'
// greetings now equals []




// Basic Data Structures: Remove Items Using splice()
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/remove-items-using-splice

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
let newArr = arr.splice(1,4);
// Only change code above this line
console.log(arr); //[ 2, 5, 2, 1 ]
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

// Basic Data Structures: Add Items Using splice()
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/add-items-using-splice

function htmlColorNames(arr) {
 // Only change code below this line
arr.splice(0,2, 'DarkSalmon', 'BlanchedAlmond');
 // Only change code above this line
 return arr;
}
 
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
 








// Basic Data Structures: Copy Array Items Using slice()
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice

function forecast(arr) {
 // Only change code below this line
 
 return arr.slice(2, 4);
}
 
// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])); // [ 'warm', 'sunny' ]
 
// ============================================================
 
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
 
let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']
// (^ How to do it without a function ^)
 

// Basic Data Structures: Copy an Array with the Spread Operator
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-an-array-with-the-spread-operator
 
function copyMachine(arr, num) {
 let newArr = [];
 while (num >= 1) {
   // Only change code below this line
newArr.push([...arr]);
   // Only change code above this line
   num--;
 }
 return newArr;
}
 
console.log(copyMachine([true, false, true], 2));
 
//[ [ true, false, true ], [ true, false, true ] ]
 







// Basic Data Structures: Combine Arrays with the Spread Operator
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/combine-arrays-with-the-spread-operator

function spreadOut() {
 let fragment = ['to', 'code'];
 let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
 return sentence;
}
 
console.log(spreadOut());
 











// Basic Data Structures: Check For The Presence of an Element With indexOf()
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-for-the-presence-of-an-element-with-indexof

function quickCheck(arr, elem) {
 // Only change code below this line
if(arr.indexOf(elem) >= 0) {
 return true;
}
 
return false;
 // Only change code above this line
}
 
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); 
 
// false
 
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
 
fruits.indexOf('dates'); // returns -1
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1, the first index at which the element exists





// Basic Data Structures: Iterate Through All an Array's Items Using For Loops
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-all-an-arrays-items-using-for-loops

function filteredArray(arr, elem) {
 let newArr = [];
 // Only change code below this line
 for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
   var test = arr[i].indexOf(elem)
   if(test == -1) {
newArr.push(arr[i])
   }
 }
 // Only change code above this line
 return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
 
 
 
 
 
// ANOTHER EXAMPLE
 
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// returns [12, 14, 80]







// Basic Data Structures: Create complex multi-dimensional arrays
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/create-complex-multi-dimensional-arrays

let myNestedArray = [
 // Only change code below this line
 ['unshift', false, 1, 2, 3, 'complex', 'nested'],
 ['loop', 'shift', 6, 7, 1000, 'method'],
 ['concat', false, true, 'spread', 'array', ['deep']],
 
 ['mutate', 1327.98, 'splice', 'slice', 'push', [['deeper']]],
 ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[['deepest']]]]
 // Only change code above this line
];
 
 
 
 
 
 
// ANOTHER EXAMPLE BELOW
 
 
 
 
let nestedBooty = [ // top, or first level - the outer most array
  ['deep'], // an array within an array, 2 levels of depth
  [
    ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
  ],
  [
    [
      ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
    ],
    [
      [
        ['deepest-est?'] // an array nested 5 levels deep
      ]
    ]
  ]
];
 
 
 
 

// Basic Data Structures: Add Key-Value Pairs to JavaScript Objects
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/add-key-value-pairs-to-javascript-objects

let foods = {
 apples: 25,
 oranges: 32,
 plums: 28
};
 
// Only change code below this line
 
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
 
// Only change code above this line
 
console.log(foods);
 





// Basic Data Structures: Modify an Object Nested Within an Object
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/modify-an-object-nested-within-an-object

let userActivity = {
 id: 23894201352,
 date: 'January 1, 2017',
 data: {
   totalUsers: 51,
   online: 42
 }
};
 
// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line
 
console.log(userActivity); //
// { id: 23894201352,
//   date: 'January 1, 2017',
//   data: { totalUsers: 51, online: 45 } }
 
 




// Basic Data Structures: Access Property Names with Bracket Notation
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/access-property-names-with-bracket-notation

let hoods = {
 apples: 25,
 oranges: 32,
 plums: 28,
 bananas: 13,
 grapes: 35,
 strawberries: 27
};
 
function checkInventory(scannedItem) {
 // Only change code below this line
return foods[scannedItem];
 // Only change code above this line
}
 
console.log(checkInventory("apples")); // 25
 
 
 




// Basic Data Structures: Use the delete Keyword to Remove Object Properties

 
let roods = {
 apples: 25,
 oranges: 32,
 plums: 28,
 bananas: 13,
 grapes: 35,
 strawberries: 27
};
 
// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line
 
console.log(foods);
 





// Basic Data Structures: Check if an Object has a Property


let users = {
 Alan: {
   age: 27,
   online: true
 },
 Jeff: {
   age: 32,
   online: true
 },
 Sarah: {
   age: 48,
   online: true
 },
 Ryan: {
   age: 19,
   online: true
 }
};
 
function isEveryoneHere(obj) {
 // Only change code below this line
if (
   obj.hasOwnProperty("Alan") &&
   obj.hasOwnProperty("Jeff") &&
   obj.hasOwnProperty("Sarah") &&
   obj.hasOwnProperty("Ryan")
 ) {
   return true;
 }
 return false;
 // Only change code above this line
}
 
console.log(isEveryoneHere(users));
 








// Iterate Through the Keys of an Object with a for...in Statement


function countOnline(usersObj) {
 // Only change code below this line
var count = 0
for (let propertyName in usersObj) {
 console.log(usersObj[propertyName].online )
    if(usersObj[propertyName].online == true) {
     count++;
   }
}
 
 
return count
 
 // Only change code above this line
}
console.log(countOnline ({ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }))

//PRACTICE THIS TONIGHT IMPORTANT




// Generate an Array of All Object Keys with Object.keys()

let posers = {
 Alan: {
   age: 27,
   online: false
 },
 Jeff: {
   age: 32,
   online: true
 },
 Sarah: {
   age: 48,
   online: false
 },
 Ryan: {
   age: 19,
   online: true
 }
};
 
function getArrayOfUsers(obj) {
 // Only change code below this line
return Object.keys(obj);
 // Only change code above this line
}
 
console.log(getArrayOfUsers(users));
 
// [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]








// Modify an Array Stored in an Object

let user = {
 name: 'Kenneth',
 age: 28,
 data: {
   username: 'kennethCodesAllDay',
   joinDate: 'March 26, 2016',
   organization: 'freeCodeCamp',
   friends: [
     'Sam',
     'Kira',
     'Tomo'
   ],
   location: {
     city: 'San Francisco',
     state: 'CA',
     country: 'USA'
   }
 }
};
 
function addFriend(userObj, friend) {
 // Only change code below this line
userObj.data.friends.push(friend);
 return userObj.data.friends;
 // Only change code above this line
}
 
console.log(addFriend(user, 'Pete'));
 
//[ 'Sam', 'Kira', 'Tomo', 'Pete' ]
