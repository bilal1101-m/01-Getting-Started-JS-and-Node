let car = 'Mclaren';
console.log("Is car == 'Mclaren'? I predict True.");
console.log(car == 'Mclaren');

//Create at least 10 tests.
//Have at least 5 tests evaluate to True and 
//another 5 tests evaluate to False
//Test 1
let num = 34;
let bum = "34";
console.log(`Is ${num} == "${bum}"? I predict True.`);
console.log(num == bum);

//Test 2
console.log(`Is ${num} === "${bum}"? I predict True.`);
console.log(num === bum);

//Test 3
let personName = "leonardo";
console.log(`Is personName == "Leonardo"? I predict True.`);
console.log(personName == "Leonardo");
//Test 4
console.log(`Is personName == "leonardo"? I predict True.`);
console.log(personName == "leonardo");

//Test 5
let languageName = "SPANISH";
console.log(`Is languageName == "Spanish"? I predict True.`);
console.log(languageName == "Spanish");
//Test 6
console.log(`Is languageName == "Spanish"? I predict True.`);
console.log(languageName == "SPANISH");

//Test 7
let numValue = 3;
numValue = numValue**numValue;
console.log(`Is numValue == 27? I predict False.`);
console.log(numValue == 27);

//Test 8
numValue = numValue%3;
console.log(`Is numValue == 0? I predict True.`);
console.log(numValue == 0);

//Test 9 :p (A Teasing One :p)
let num1 = 1;
let num2 = 0.9;
console.log(`Is  num1 - num2 == 0.1? I predict True.`);
console.log(num1 - num2 == 0.1);

//Test 10
console.log(`Is  num1 - num2 == 0.1? I predict True.`);
console.log((num1 - num2).toFixed(1) == 0.1);
