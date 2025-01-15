function multiplyby5(num){
    return num*5
}
multiplyby5.power = 2
console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);
// therefore we see that everything even functions are objects in js
// it is done by protiitype it goes up and up until reaching null

function createuser(username,score){
    this.username = username
    this.score = score
}

createuser.prototype.increment = function(){
    this.score++ // this means jisne bhi bulaya hai uska score badha do
} // in this way we can creat r own method too
createuser.prototype.printme = function(){
    console.log(`score is ${this.score}`);
    
}
const chai = new createuser("chai",25)
const tea = new createuser("tea,250")
// without new it doesnt recognise manually deined methods
chai.printme()

let heropowerr = {
    thor: "hammer",
    spiderman: "sling",
    getspidypower: function(){
        console.log(`${this.spiderman}`);
        
    }
}
const hero= ["ironman","hulk"]
Object.prototype.hitesh = function(){
    console.log("hitesh is present in all objects");
    
}

heropowerr.hitesh()
hero.hitesh()
// what we di is we create our own function hitesh using object factory method and this method is now available to all obj arrays etc
// basically js seeks that power or method in stage 1 say array if not found goes to stage 2 objects if notthen goes to null
// evrythign passes thru arays therefore power injected in object is accessibket to array function string etc

// lets inject power to array
Array.prototype.vedaant = function(){
     console.log("vedaant");
     
}
// heropowerr.vedaant()
//power injected in array not accessible to obejcts

/*************************inheritance******************8 */

