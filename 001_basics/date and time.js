// dates
let mydate = new Date()
console.log(mydate.toLocaleString());
console.log(typeof mydate);
let date1 = new Date(2024,11,19)
console.log(date1.toDateString());
// in js months start from 0 to 11

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mydate.getTime());



let newdate = new Date()
console.log(newdate);
console.log(newdate.getDate);
newdate.toLocaleString('default',{
    weekday: "long",
})


