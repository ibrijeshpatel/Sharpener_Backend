const accountId = 12325
var accountEmail = "ibrijeshpatel@outlook.com"
let accountPassword = "12Science"

accountAddress = "Bangalore"  // its not a well manner to write a variable in thios way but its also working

let accountActive;  // when we declair a variable but we dont give any valu to that it give `undefine`.


// accountId = 567  // const is never change when once declaired
accountEmail = "brijeshnitap@gmail.com";
accountPassword = "Science"
accountAddress = "Malleshawaram (Bangalore)"

/* 
Prefer not to use var
because it create issue in block scope and function scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountAddress, accountActive]); // it give result in table form 
