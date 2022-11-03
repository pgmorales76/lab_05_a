'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then
returns an array where the first element is the sum of those numbers, and the
second element is a concatenated string that EXACTLY follows this example and
uses the values that were input into the function: "The sum of 4 and 7 is 11."
Test this function by hand in the console to get it working, and when you think
it is finished, uncomment the call for the testSum() function below and check
the console to see if the test passes.*/

// Write your code here
// sum() takes in two numbers, and returns an array with a number and string
// inside of it
function sum(a, b) { // eslint-disable-line
  let twoSum = a + b;
  // console.log('In sum(), the value of twoSum is: ', twoSum);
  let string = 'The sum of ' + a + ' and ' + b + ' is ' + twoSum + '.';
  // console.log('In sum(), the value of string is: ', string);
  let result = [ twoSum, string ];
  // console.log('In sum(), the value of result is: ', result);
  return result;
}

// Here is the test for sum(); uncomment it to run it
// testSum(4, 7);
// Testing
// Once you get the test passing, do an a-c-p cycle and synchronize the code
// between GitHub and your laptop. Don't forget to create a new branch for your
// work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and
returns an array where the first element is the product of those numbers, and
the second element is a string that EXACTLY follows this example and uses the
values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think
it is finished, uncomment the call for the testMultiply() function and see if
the test passes.*/

// Write your code here
function multiply(a, b) { // eslint-disable-line
  let two_multiply = a * b;
  console.log('In multiply(), the value of two_multiply is: ', two_multiply);
  let string =
      'The product of ' + a + ' and ' + b + ' is ' + two_multiply + '.';
  console.log('In multiply(), the value of string is: ', string);
  let result = [ two_multiply, string ];
  console.log('In multiply(), the value of result is: ', result);
  return result;
}

// Here is the test for multiply(); uncomment it to run it
// testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code
// between GitHub and your laptop. Don't forget to create a new branch for your
// work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate
arguments and returns an array where the first element is the sum of those three
numbers, the second element is the product of those three numbers,  and the
third and fourth elements are strings that EXACTLY follow this example and use
the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this
function. To do addition, use your sum() function, and to do multiplication, use
your multiply() function that you've already created. You're going to have to be
resourceful to figure out how to do this. However, you may continue to use the +
operator for string concatenation.

Test this function by hand in the console to get it working, and when you think
it is finished, uncomment the call for the testSumAndMultiply()
function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { // eslint-disable-line
  // invoke the function to add a and b
  let sumOfAandB = sum(a, b)[0]; // 11
  console.log('The sum of 4 and 7 is: ', sumOfAandB, ' The value of c is: ', c);
  // invoke the function again to add c to a and b
  let sumOfABandC = sum(sumOfAandB, c)[0]; // 16
  console.log('The sum of 4 and 7 and 5 is: ', sumOfABandC);
  // invoke the function to multiply a and b
  let multiplyAandB = multiply(a, b)[0]; // 28
  console.log('The product of 4 and 7 is: ', multiplyAandB,
              'The value of c is: ', c);
  // invoke the function again to multiply a, b, and c
  let multiplyABandC = multiply(multiplyAandB, c)[0]; // 140
  console.log('The product of 4 and 7 and 5 is: ', multiplyABandC);
  // creating a string for the third element
  let third_element =
      a + ' and ' + b + ' and ' + c + ' sum to ' + sumOfABandC + '.';
  console.log(third_element);
  // creating a string for fourth element
  let fourth_element = 'The product of ' + a + ' and ' + b + ' and ' + c +
                       ' is ' + multiplyABandC + '.';
  console.log(fourth_element);
  // creating an array for the result
  let result = [ sumOfABandC, multiplyABandC, third_element, fourth_element ];
  console.log('The array created is: ' + result);
  return result;
}

// Here is the test for sumAndMultiply(); uncomment it to run it
// testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code
// between GitHub and your laptop. Don't forget to create a new branch for your
// work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its
single argument and then returns an array where the first element is the sum of
the numbers in the array, and the second element is a string that EXACTLY
follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To
do addition, use your sum() function that you've already created. You're going
to have to be resourceful to figure out how to do this. However, you may
continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think
it is finished, uncomment the call for the testSumArray() function and see if
the test passes.*/

// Write your code here
let testArray = [ 2, 3, 4 ]; // eslint-disable-line

function sumArray(arr) {                                // eslint-disable-line
  let sum_of_array_at_0_and_1 = sum(arr[0], arr[1])[0]; // 5
  // console.log('The sum of the array at [0] and [1] is: ',
  // sum_of_array_at_0_and_1, ' The value of the array at [2] is: ', arr[2]);
  let sum_of_array_at_0_and_1_and_2 =
      sum(sum_of_array_at_0_and_1, arr[2])[0]; // 9
  // console.log('The sum of the array at [0] and [1] and [2] is: ',
  // sum_of_array_at_0_and_1_and_2);
  let second_element = `${arr} was passed in as an array of numbers, and ${
      sum_of_array_at_0_and_1_and_2} is their sum.`;
  // console.log('The second element is: ' + second_element);
  let result = [ sum_of_array_at_0_and_1_and_2, second_element ];
  console.log(result);
  return result;
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code
// between GitHub and your laptop. Don't forget to create a new branch for your
// work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its
argument and returns an array whose first element is the product of those
numbers, and the second element is a string that EXACTLY follows this example
and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To
do multiplication, use your multiply() function that you've already created.
You're going to have to be resourceful to figure out how to do this. This
function should handle an array containing three elements. However, you may
continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think
it is finished, uncomment the call for the testMultiplyArray() function
and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { // eslint-disable-line
}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code
// between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in
// Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if
// you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any
length as its argument and returns an array whose first element is the product
of those numbers, and the second element is a string that EXACTLY follows this
example and concatenates a message using the arguments that were passed into the
function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To
do multiplication, use your multiply() function that you've already created.
You're going to have to be resourceful to figure out how to do this. However,
you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think
it is finished, uncomment the call for the testMultiplyAnyArray() function and
see if the test passes.*/

// Write your code here
let testDynamicArray = [ 1, 2, 3, 4, 5 ]; // eslint-disable-line

function multiplyAnyArray(dynamicArray) { // eslint-disable-line
}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code
// between GitHub and your laptop. You're done! Submit the link to the repo
// following the instructions in Canvas.
