const mysym=Symbol("key1")
const jsuser = {
    name: "Hitesh",
    "age": 19,
    [mysym]:"mykey1",
    location: "jpr",
    isLoggedIn: false
}

console.log(jsuser["age"]);// here age can only be accessed as thiss and not jsuser.age
console.log(typeof jsuser[mysym]);
// to access symbol use only with square brackets as done above
jsuser.name = "vedaant nigam"
//Object.freeze(jsuser)
console.log(jsuser);

jsuser.greeting  = function(){
    console.log("hello js user");
    
}
console.log(jsuser.greeting(  ));
jsuser.greetingtwo = function() {
    console.log('hello ${}');
    
}




