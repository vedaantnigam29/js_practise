"use strict"; // treat all js code as newer version

//alert("hello")// we are using nodejs not browser//

let name = "vedaant"
let age = 18
let isLoggedIn = false

// number => to power 53
//bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// null is an object

console.log(typeof age);

let score = "33"
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
// 33 =>33
/// "33abc" =>NaN
// true => 1;

let isloggedin = 1
let booleanisloogedin = Boolean(isloggedin)
console.log(booleanisloogedin)
// 1 => rue; 0 =>false
// ""  => false
// "hitesh" => true
let n1 = 33
let n2 = String(n1)
console.log(typeof n2)

// ***************Operations *******************//
let value = 3
let negvalue = -value
console.log(value)
let str1 = "hello"
let str2 = " vedaant"
let str3 = str1 + str2
console.log(str3)