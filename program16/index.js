/*
    The value of a constant can't be changed through reassignment 
    (i.e. by using the assignment operator), and it can't be redeclared 
    (i.e. through a variable declaration). However, if a constant is an 
    object or array its properties or items can be updated or removed.
*/
const guestList = ["Izk","Rizwan","Kashif"];
guestList.forEach(guest => {
    console.log(`Hey ${guest}, You're invited to dinner.`);
});


//Just hear from Rizwan that he couldn't make it tonight for dinner.
//get the index of Rizwan in array
let indexOfBusyGuest = guestList.indexOf('Rizwan');
console.log(`Just hear from ${guestList[indexOfBusyGuest]} that he couldn't make it tonight for dinner`);
guestList[indexOfBusyGuest] = "Sajid";
guestList.forEach(guest => {
    console.log(`Hey ${guest}, You're invited to dinner.`);
});

console.log("Hey guys, I found a bigger table so i invite some more friends.");
//Add one in the beginning
//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
guestList.unshift("Emma");
//Add one in Middle of array
//Find middle index
let middlePosition = guestList.length%2==0?guestList.length/2:(guestList.length-1)/2;
//Splice if a function to add element in the middle of an array
guestList.splice(middlePosition,0,"Hoor");
//Use append to add one in the end - push is the name of function to append in last of array
guestList.push("Toor");

console.log("Following is the new set of invitations because of bigger table.");
guestList.forEach(guest => {
    console.log(`Hey ${guest}, You're invited to dinner.`);
});