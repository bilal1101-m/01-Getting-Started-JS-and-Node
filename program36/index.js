function make_shirt(size,msg) {
    return `You order ${size} size shirt with a message "${msg}" on back of shirt`;
}

let summary = make_shirt("Large","Panaversa is Yo !!");
console.log(summary);