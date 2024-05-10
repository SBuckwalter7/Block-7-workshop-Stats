// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
   //todo

   //we need to find how many numbers are in the array
   //.length is a basic function
   return numbers.length;

}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  // TODO
  //ways to do this; .reduce  and for loop

  //we need to add all the numbers up together
  //my answer below
  return numbers.reduce((accumumilator, curr )=> accumumilator+curr, 0);


  //teachers answer below
//reduce "sum and num placements dont matter what the word is, they just have to match"
//Answer:
//return numbers.reduce((sum, num)=>{return num+sum},0)

//for loop
//we must have 3 parts, 1, 2, 3
//1 counter variable
//2 statement that should be true
//3 iterator

// 0 1 2
//[1,5,2]

//1. sum=0, i=0 , yes i<3, sum=1, i=1
//2. sum=1, i=1, yes i<3, sum=6, i= 2
//3. sum=6, i=2, yes i<3, sum=8, i=3
//4. sum=6, i=3, no i<3 STOP

//Answer:
/**let sum = 0
for(let i=0; i<numbers.length; i++){
sum= sum + numbers[i]
}
return sum
*/
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  // TODO


  //we need to take the total sum of numbers and divide by how many there are
  //my answer macthes teachers answer below
  return getSum(numbers) / getLength(numbers)


}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  // TODO


  //we need to find the smallest number
  //My answer below
  return Math.min(...numbers);

  //Teachers Answers
  //loop where we compare numbers and keep the lowest
  //math.min = built in already
  //sort and get first value

  //Option 1: math.min
  //"..." is called a spread operator
  //Answer:
  //return Math.min(...numbers)

  //Option 2:Sort
  //"a,b" these variable names dont matter could be anything
  // if you do "b-a" its now going from biggest to smallest
  //Answer:
  //let sortedNumbers = numbers.sort((a,b)=>a-b)
  return sortedNumbers[0]



}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  // TODO

  //we need to find the largest number
  //My answer and teachers answer below
  return Math.max(...numbers)
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  // TODO
  //we need to find the range of the min and max number
  //my answer matches teachers answer below :)

  return getMax(numbers) - getMin(numbers)

}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  //todo
  //find the evens
  // i believe this is where we use the %2 mod
  //my answer below
    return numbers.filter(numbers => numbers % 2 === 0 )

    // I think there is also a way to use this I just couldnt make it work
    //let getEvens = numbers.filter(numbers => numbers % 2 === 0 )

    //teachers answer
    //return numbers.filter(num=>num%2==0)
//OR
    //return numbers.filter(num=>{return num%2==0})
//OR
    //return numbers.filter(num=>{
    //if (num%2==0){
   //   return true
   // })
   // }
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  // TODO
  //find the odds
  //same here, I believe this uses the %2 mod as well
  //I had to to do a lot of research on how to get odd numbers,
  //I am not sure if this is the code you are looking for, but it works lol

  //mine and teachers answer
  return numbers.filter(numbers => numbers % 2 !== 0 )
}
