//Use the JavaScript Console to Check the Value of a VariablePassed
let a = 5;
let b = 1;
a++;
// Only change code below this line


let sumAB = a + b;
console.log(a);

//---------------------------------------------------


// Understanding the Differences between the freeCodeCamp and Browser Console
// Open your browser console.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.

// Run the tests to see the difference between the two consoles. 

// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.
console.clear();
console.log(output);



//Use typeof to Check the Type of a VariablePassed
/* console.log(typeof ""); // outputs "string"
console.log(typeof 0); // outputs "number"
console.log(typeof []); // outputs "object"
console.log(typeof {}); // outputs "object" */

let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);
console.log(typeof three);


// Catch Misspelled Variable and Function NamesPassed
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);



// Catch Unclosed Parentheses, Brackets, Braces and QuotesPassed
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);



// Catch Mixed Usage of Single and Double QuotesPassed
/*  //These are correct:
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
// This is incorrect:
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.'; 

const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.'; */

/* let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml); */

let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);



// Catch Use of Assignment Operator Instead of Equality OperatorPassed
let x = 7;
let y = 9;
let result = "to come";
 
if(x == y) {
 result = "Equal!";
} else {
 result = "Not equal!";
}
 
console.log(result);



// Catch Missing Open and Closing Parenthesis After a Function CallPassed
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let answer = getNine();
  console.log(answer);

  

  // Catch Arguments Passed in the Wrong Order When Calling a Function
  function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
  
  let base = 2;
  let exp = 3;
  let power = raiseToPower(base, exp);
  console.log(power);

  

  // Catch Off By One Errors When Using Indexing
  function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 0; i < len; i++) {
    // Only change code above this line
      console.log(firstFive[i]);
    }
  }
  
  countToFive();

  

  // Use Caution When Reinitializing Variables Inside a Loop
  function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
  let row = [];
  
  
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);

  

  // Prevent Infinite Loops with a Valid Terminal Condition
  function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
      console.log("Still going!");
    }
  }
  