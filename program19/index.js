/*
    The value of a constant can't be changed through reassignment 
    (i.e. by using the assignment operator), and it can't be redeclared 
    (i.e. through a variable declaration). However, if a constant is an 
    object or array its properties or items can be updated or removed.
*/
const guestList = ["Izk","Rizwan","Kashif"];
//Just hear from Rizwan that he couldn't make it tonight for dinner.
//get the index of Rizwan in array
let indexOfBusyGuest = guestList.indexOf('Rizwan');
guestList[indexOfBusyGuest] = "Sajid";
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
let totalGuests = guestList.length;
console.log(`There are total ${totalGuests} guests invite on dinner`);