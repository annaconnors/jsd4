console.log("--- arrays.js ---");

/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

/** Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */

var q1 = [ 'image1.png', 'image2.png', 'image3.png'];
console.log("Question 1", q1);

/** Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */

 var q2 = q1[0];
 console.log("Question 2", q2);

/** Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */

var q3 = q1.length;
console.log("Question 3", q3);


/** Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */

var q4 = q1[q1.length-1];
console.log("Question 4", q4);


// Your code here

a = [2, 23, 6, 9, 1]
console.log(a)

var count = 0;
a.forEach(add);

function add(item) {
	count = count + item; 
 	console.log(count);

}


// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a for loop, a forEach loop function to increase
 * each value by 1. You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */

var b = [11,12,13,14];
var c = [];
console.log(b);

b.forEach(adds);

function adds(item) {
	c.push(item + 1);
}
console.log(c);


/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */

var sum = 0; 
b.forEach(average);

function average(item) {
	sum = sum + item;
	console.log(sum);
}

var q6 = sum / b.length;
console.log("Question 6", q6);
