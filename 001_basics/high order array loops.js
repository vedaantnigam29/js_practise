const coding = ["js","ruby","java","python"]
coding.forEach( function (item) {
    console.log(item);
    
} )
coding.forEach((val)=>{
console.log(val);

})

const mycoding = [{
    langname:"js",
    filename:".js"
},{
    langname:"python",
    filename:".py"
},{
    langname:"java",
    filename:".java"
}]
mycoding.forEach( (item)=>{

    console.log(item.langname);
    
})