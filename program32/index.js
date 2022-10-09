const currentUsers = ["Sam","Admin","Maxi","Luci","Tammy"];

let newUsers = ["Tina","Maxi","luci","Snow","Caty"];

newUsers.forEach(user => {
    if(currentUsers.some(x => x.toLowerCase() == user.toLowerCase())) {
        console.log(`The ${user} need to enter new username`);
    } else {
        console.log(`The ${user} username is available`);
    }
});