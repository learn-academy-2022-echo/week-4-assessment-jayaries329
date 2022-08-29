// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.


const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
describe("colors3", () => {
    test ("removes the first item from the array and shufflesw the remaining content", () => {
        expect (colors3(colors1)).toEqual(["yellow", "blue", "pink", "green"])
        expect (colors3(colors2)).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])
        
    })
})
// Good test failure!
// learnacademy@LEARNs-MacBook-Air week-4-assessment-jayaries329 % yarn jest
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-4-assessment-jayaries329/node_modules/.bin/jest
//  FAIL  ./code-challenges.test.js
//   colors3
//     ✕ removes the first item from the array and shufflesw the remaining content (1 ms)

//   ● colors3 › removes the first item from the array and shufflesw the remaining content

//     ReferenceError: colors3 is not defined



// b) Create the function that makes the test pass.

// Pseudo code:
// Create a function called colors3 that takes in an array
// Use built-in methods to remove items and shuffle other items within the array
// Return the expected output
// * I could not figure out how to solve this problem on my own. I experimented with different method combinations such as .shuffle, .shift, and .reverse. I'd love to see the solution to this one.*
// const colors3 = (array) => {
//     return array.reverse(() => array.shift())
// }

// console.log(colors3(colors1))

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.


const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

// a) Create a test with expect statements for each of the variables provided.
describe("voteCount", () => {
    test ("returns the net total of votes", () => {
        expect (voteCount(votes1)).toEqual(11)
        expect (voteCount(votes2)).toEqual(-31)
        
    })
})
// Good test failure!
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.332 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
// learnacademy@LEARNs-MacBook-Air week-4-assessment-jayaries329 % yarn jest
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-4-assessment-jayaries329/node_modules/.bin/jest
//  FAIL  ./code-challenges.test.js
//   voteCount
//     ✕ returns the net total of votes (1 ms)

//   ● voteCount › returns the net total of votes

//     ReferenceError: voteCount is not defined


// b) Create the function that makes the test pass.

// Pseudo code:
// Create a function that takes in an object
// Utilize dot notation and subtraction for comparison of object values
// Return the expected output 

const voteCount = (object) => {
    return object.upVotes - object.downVotes;
}
console.log(voteCount(votes2))

// Test passed!!!
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.343 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
// learnacademy@LEARNs-MacBook-Air week-4-assessment-jayaries329 % yarn jest
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-4-assessment-jayaries329/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   voteCount
//     ✓ returns the net total of votes (2 ms)


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.


const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// a) Create a test with an expect statement using the variables provided.
describe("array3", () => {
    test ("returns one array with no duplicate values", () => {
        expect (array3(dataArray1)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
        expect (array3(dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
        
    })
})
// Good test failure!
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-4-assessment-jayaries329/node_modules/.bin/jest
//  FAIL  ./code-challenges.test.js
//   array3
//     ✕ returns one array with no duplicate values (1 ms)

//   ● array3 › returns one array with no duplicate values

//     ReferenceError: array3 is not defined


// b) Create the function that makes the test pass.

// Pseudo code:
// Create a function called array3 that takes in 2 arrays
// Use the stretch operator and Set to combine arrays and get rid of duplicate data
// Return the expected output with no duplicate values.

const array3 = (array1, array2) => {
     return  [...new Set([...array1,...array2])]
}
console.log(array3(dataArray1,dataArray2))

// * Although the code works, this test failed.*
// FAIL  ./code-challenges.test.js
// array3
//   ✕ returns one array with no duplicate values (1 ms)

// ● array3 › returns one array with no duplicate values

//   TypeError: array2 is not iterable

//     159 |
//     160 | const array3 = (array1, array2) => {
//   > 161 |      return  [...new Set([...array1,...array2])]
//         |                                        ^
//     162 | }
//     163 | // console.log(array3(dataArray1,dataArray2))
//     164 |

//     at array2 (code-challenges.test.js:161:40)
//     at Object.array3 (code-challenges.test.js:135:17)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.449 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
// learnacademy@LEARNs-MacBook-Air week-4-assessment-jayaries329 % 
