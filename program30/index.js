const usersOfZorro = ["Sam","Admin","Maxi","Luci","Tammy"];
usersOfZorro.forEach(nameOfUser => {
    if(nameOfUser == 'Admin') {
        console.log(`Hello ${nameOfUser}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${nameOfUser}, thank you for logging in again.`);
    }
});