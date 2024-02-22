"use strict";
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more
// comparisons, write more tests. Have at least one True and one False result for each of the following:
//Tests for equality and inequality with strings
let string1 = 'apple';
let string2 = 'mango';
console.log("Are string1 and string2 not equal? I predict true.");
console.log(string1 !== string2);
console.log("Are string1 and string2 equal? I predict false.");
console.log(string1 === string2);
//Tests using the lower case function
let myname = 'khalidGhani';
console.log("Is myname in lowercase equal to 'khalidghani'? I predict True.");
console.log(myname.toLowerCase() === 'khalidghani');
console.log("Is myname in lowercase equal to 'khalidGhani'? I predict false.");
console.log(myname.toLowerCase() === 'khalidGhani');
//Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 8;
console.log("Is num1 and num2 is equal?I predict false.");
console.log(num1 === num2);
console.log("Is num1 and num2 is not equal?I predict true.");
console.log(num1 !== num2);
console.log("Is num1 is greater than num2 ? I predict true ");
console.log(num1 > num2);
console.log("Is num1 is less than num2 ? I predict false ");
console.log(num1 < num2);
console.log("Is num1 is greater than and equal num2 ? I predict true ");
console.log(num1 >= num2);
console.log("Is num1 is less than and equal num2 ? I predict false ");
console.log(num1 <= num2);
// Tests using "and" and "or" operators
let num3 = true;
let num4 = false;
console.log("Is num3 true and num4 false? I predict False.");
console.log(num3 && num4);
console.log("Is num3 true or num4 false? I predict True.");
console.log(num3 || num4);
// Test whether an item is in a array
let foods = ["pizza", "burger", "snacks"];
console.log("Is burger in the foods array? I predict True.");
console.log(foods.includes("burger"));
//Test whether an item is not in a array
console.log("Is sandwich in the foods array? I predict false.");
console.log(foods.includes("sandwich"));
