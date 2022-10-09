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