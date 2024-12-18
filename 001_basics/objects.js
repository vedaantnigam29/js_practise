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
console.log(jsuser.greeting());
jsuser.greetingtwo = function() {
    console.log('hello ${this.name}');
    
}
console.log(jsuser.greetingtwo());
/**********part 2***********/
const tinderuser1 = new Object()//singleton
const tinderuser = {}//non singleton

tinderuser.id = "123abc"
tinderuser.name = "sam"
tinderuser.isLoggedIn = false
console.log(tinderuser);

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "vedaant",
            lastname:"nigam"
        }

    }
}
 console.log(regularuser.fullname.userfullname);
 
 const obj1 = {1: "a", 2:"b"}
 const obj2 = {3:"c", 4:"d"}
 //const obj3 = Object.assign({},obj1,obj2)//empty parenthesis is formal apporach.it is an empty object where all the soruce is stored
 const obj3 = {...obj1,obj2}
 console.log(obj3);
 console.log(tinderuser);

 console.log(Object.keys(tinderuser));
 console.log(Object.values(tinderuser));
 console.log(tinderuser.hasOwnProperty('isLoggedIn'));
 
 
 
 




