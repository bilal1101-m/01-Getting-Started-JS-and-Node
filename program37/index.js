function make_shirt(size = "Large",msg = "I love JavaScript.") {
    return `You order ${size} size shirt with a message "${(size == "Large" || size == "Medium")?"I love JavaScript":msg}" on back of shirt`;
}

let summary = make_shirt("Large","Panaversa is Yo !!");
console.log(summary);

summary = make_shirt();
console.log(summary);

summary = make_shirt("Medium","Message Should be Default");
console.log(summary);

summary = make_shirt("Small","Panaverse is Yo!!");
console.log(summary);