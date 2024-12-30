// ==,checks if sme orr not ,=== and !== also checks type
if(2=="2"){
    console.log("executed");
    
}
if(2==="2"){
    console.log("executed");
}
//rest if-else or else if same

/***********************switch */
const month="march"
switch(month){
    case "jan":
        console.log("jan");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
        default: console.log("none");
}
/* truthy and falsy*/
const email = "v@gamil.com"
if(email){
    console.log("got email");
} else console.log("no email");
// ""-false but []-true hwo?
 // falsy values: false,0,-0,BigInt 0n,"",null,NaN
 // but "0" is truthy value
const emptyobj = {}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
    
}
// object.keys returns array of object keys and .lenth calculates the length of that array

// nullish coalescing operator(??): null undefined
let val1;
val1 =5 ?? 10
console.log(val1);
val1=null ?? 10;
console.log(val1);
// so ?? operator assigns the safest options depending on the given oopetion 10 is ssafer than null as val1 maynot work in certain functions with null as the value 
// also the first alue it gets is assigned in multiple null coalsence
val1 = null ?? 10?? 20
console.log(val1);


