console.log(2>1);
console.log(null>0);
console.log(null>=0)

// strict check: ===
console.log("2"===2); //false is the output
// primitive(call by value)

// 7 types :string,number,boolean,null,undefined,symbol,BigInt

// Reference type(call by ref)

// arrays,objects,functions
const score=100
const scoreval = 100.3
const isLoggedIn = false
const bignumber = 3456782345673456784567n
  
// stack(primitive),heap(non primitive) 

let userone = {
    email: "user@gmail.com",
    upi: "user@ybl"

}
let usertwo = userone
usertwo.email = "vedaant@google.com"
console.log(userone.email);
console.log(usertwo.email);
