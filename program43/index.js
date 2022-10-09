function show_magicians(value) {
    value.forEach(name => {
        console.log(name);
    });
}
function make_great(value){
    value.forEach((name,index) => {
        value[index] = `${name} the Great`;
    });
}
const magician = ["Harry","Ron","Hermoine"];
const greatMagician = [...magician];
make_great(greatMagician);
show_magicians(magician);
show_magicians(greatMagician);