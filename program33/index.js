let numberList = [1,2,3,4,5,6,7,8,9];

numberList.forEach(element => {
    let ordinalPossitionMessage;
    if(element == 1) {
        ordinalPossitionMessage = `${element} is at 1st`;
    } else if(element == 2) {
        ordinalPossitionMessage = `${element} is at 2nd`;
    } else if(element == 3) {
        ordinalPossitionMessage = `${element} is at 3rd`;
    } else {
        ordinalPossitionMessage = `${element} is at ${element}th`;
    }
    console.log(ordinalPossitionMessage);
});