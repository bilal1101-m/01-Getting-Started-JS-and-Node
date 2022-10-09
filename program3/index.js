function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function(w){
        return `${w.charAt(0).toUpperCase()}${w.slice(1)}`
    }).join(' ');
}
let person_name = "mUhAmmAd BilAl";


console.log("Person Name in lowercase  :: ",person_name.toLowerCase());
console.log("Person Name in UPPERCASE  :: ",person_name.toUpperCase());
console.log("Person Name in Title Case :: ",toTitleCase(person_name));