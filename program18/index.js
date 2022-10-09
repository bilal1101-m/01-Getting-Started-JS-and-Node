const toSorted = require('array.prototype.tosorted');
const placesToVisit = ["Makkah","Madina","Antarctica","Astola Island","Chunda Valley"];
//In Original Order
//Print your array in its original order.
console.log("Original Order :: ",placesToVisit);
//In Sort Order
// npm package :: array.prototype.tosorted
//Order
//Native sort function mutates the original array
//for assignement requirement used  array.prototype.tosorted pkg.
console.log("Alphabatical Order",toSorted(placesToVisit));
//Show that your array is still in its original order by printing it.
console.log("Still Original Order :: ",placesToVisit);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabatical Order :: ",toSorted(placesToVisit).reverse());
//Show that your array is still in its original order by printing it again.
console.log("Again Still Original Order :: ",placesToVisit);
//Reverse the order of your list. Print the array to show that its order has changed.
placesToVisit.reverse();
console.log("Original List in Reverse Order :: ",placesToVisit);
//Reverse it again
//Reverse the order of your list again. Print the list to show it’s back to its original order.
placesToVisit.reverse();
console.log("Original List in Back in Order :: ",placesToVisit);
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placesToVisit.sort();
console.log("Array Sorted and chnaged :: ",placesToVisit);
//Sort to change your array so it’s stored in reverse alphabetical order.
//Print the list to show that its order has changed.
//Using sort to sort in Reverse Alphabatical Order
placesToVisit.sort((a,b)=>{
    return (a > b ? -1 : 1);
});
console.log("Reverse alphabetical order (Using sort Method) :: ",placesToVisit);