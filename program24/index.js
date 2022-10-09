//Tests for equality and inequality with strings

let str1 = "Bilal";
let str2 = "BilAl";
console.log(`${str1} == ${str2} is True`);
console.log(str1 == str2);

console.log(`${str1} != ${str2} is True`);
console.log(str1 != str2);


//Tests using the lower case function
console.log(`${str1.toLowerCase()} == ${str2.toLowerCase()} is True`);
console.log(str1.toLowerCase() == str2.toLowerCase());


//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("3 == 4 :: ",3 == 4);
console.log("3 != 4 :: ",3 != 4);
console.log("3 < 4 :: ",3 < 4);
console.log("3 > 4 :: ",3 > 4);
console.log("3 <= 4 :: ",3 <= 4);
console.log("3 >= 4 :: ",3 >= 4);

//Tests using "and" and "or" operators
//and => && (Must satisfied all conditions)
//or => || (Must satisfied atleast 1 condition)
console.log("3 < 4 || 3 < 2",3 < 4 || 3 < 2);
console.log("3 < 4 && 3 < 2",3 < 4 && 3 < 2);


let testingArray = [2,3,4,6]
//Test whether an item is in a array
console.log("Is 6 exist in testingArray ::",testingArray.includes(6));

//Test whether an item is not in a array
console.log("Is 25 exist in testingArray ::",testingArray.includes(25));