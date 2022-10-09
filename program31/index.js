const usersOfZorro = ["Sam","Admin","Maxi","Luci","Tammy"];
if (usersOfZorro.length == 0) {
    console.log('We need to find some users!');
}

//Make it empty
usersOfZorro.splice(0);
if (usersOfZorro.length == 0) {
    console.log('We need to find some users!');
}