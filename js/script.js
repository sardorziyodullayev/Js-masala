/*1-masala
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).*/

function solution(a, b) {
	console.log(a.length < b.length ? a + b + a : b + a + b);
}
solution("1", "43");

/*2-masala 
You get an array of numbers return the sum of all of the positives ones codewars?*/

function positiveSum(arr) {
	let sum = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			sum += arr[i];
		}
	}
	console.log(sum);
}
positiveSum([1, -3, 4, -1, 2, -5, 10]);

/* 3-masala
  Build a function that returns an array of integers from n to 1 where n>0.
  */

const reverseSeq = (n) => {
	let arr = [];
	for (let i = n; i >= 1; i--) {
		arr.push(i);
	}
	console.log(arr);
};
reverseSeq(8);

/* 4-masala
  It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.*/

function removeChar(str) {
	console.log(str.slice(1, -1));
}
removeChar("salom");

/*5-masala 
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
*/
function repeatStr(n, s) {
	let repeat = s.repeat(n);
	console.log(repeat);
}
repeatStr(3, "s");

/*6-masala 
Create a function with two arguments that will return an array of the first n multiples of x.
*/

function countBy(x, n) {
	let z = [];
	for (let i = x; i <= x * n; i += x) {
		z.push(i);
	}
	console.log(z);
}

countBy(2, 7);

/* 7-masala 
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
*/

function between(a, b) {
	let arr = [];
	for (let i = a; i <= b; i++) {
		arr.push(i);
	}
	console.log(arr);
}
between(-4, 6);

/* 8-masala 
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
*/

function century(year) {
	let result = Math.ceil(year / 100);
	console.log(result);
}
century(1548);

/* 9-masala 
Given a Divisor and a Bound , Find the largest integer N , Such That ,
*/

function maxMultiple(d, b) {
	let result = d * Math.floor(b / d);
	console.log(result);
}

maxMultiple(3, 13);

/* 10-masala
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
*/

function makeNegative(num) {
	let result = num > 0 ? -num : num;
	console.log(result);
}

makeNegative(7);

/* 11-masala
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

let countSheep = function (num) {
	let str = "";
	for (let i = 1; i <= num; i++) {
		str += `${i} sheep...`;
	}
	console.log(str);
};

countSheep(5);

/* 12-masala
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
*/

function sumNegatives(input) {
	let result =
		!input || !input.length
			? []
			: [
					input.filter((n) => n > 0).length,
					input.filter((n) => n < 0).reduce((a, b) => a + b),
			  ];
	console.log(result);
}

sumNegatives([2, 5, 3, 6, -7]);

/* 13-masala
Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

The inputs will always be two positive integers between 2 and 99.
*/

function isCoprime(x, y) {
	const min = Math.min(x, y);

	for (let i = 2; i <= min; i++) {
		if (x % i === 0 && y % i === 0) {
			console.log(false);
		}
	}

	console.log(true);
}

isCoprime(3, 7);

/* 14-masala
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/

function isIsogram(str) {
	let result = new Set(str.toUpperCase()).size == str.length;
	console.log(result);
}

isIsogram("salom");
