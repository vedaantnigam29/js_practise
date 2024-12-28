function myname(){
    console.log("vedaant");
    
}

// myname-> this is func reference
//myname()-> this is funtion execution

function add(number1,number2){
console.log(number1 + number2);
return(number1+number2)
}
const result = add(3,4)
// console.log("result",result); 
function loginmessage(username){
    return `${username} just logged in`
}
console.log(loginmessage("vedaant"));

function calculatecartprice(val1,val2, ...num1){
    return num1    

}
console.log(calculatecartprice(2,4,7,8,9));
// ... is a rest operator conerts num1 to array and stores remaining arguments

const user = {
    username :"Vedaant",
    price: 199
}
function handleobject(anyobj){
console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);

}
handleobject(user)
handleobject({
    username: "sam",
    price: 399
})

const mynewarray = [200,400,100,600]

function returnsecondvalue(getArray){
return getArray[1]
}
console.log(returnsecondvalue(mynewarray));
