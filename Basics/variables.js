const accountId = 12345
let accountEmail = "gaurav@email.com"
var accountPassword = "kuchbhidaalde"
accountCity = "Firozabad"

// accountId = 54321 this is not allowed,ie assignment to constant variable is not allowed
// accountEmail = ""
// console.log(accountId);

accountEmail = "gs@gs.com"
accountPassword = "kuchbhimatdaal"
console.log(accountEmail);
console.table([accountEmail,accountId,accountPassword])
// let accountState;
/*
never use var because of isuue with block scope and functional scope
*/