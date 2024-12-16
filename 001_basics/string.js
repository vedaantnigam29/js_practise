const name = "vedaant"
const repoCount = 50

// console.log(name + repoCount + "Value");
console.log(`hello m name is ${name} and my repocount is ${repoCount}`);
const gameName = new String(`vedaant`)
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
const newString = gameName.substring(0,4);
console.log(newString);
const anotherstring = gameName.slice(-6,4)

const newStringOne = "   vedaant   "
console.log(newStringOne.trim());
const url = "https://ved.com/ved%20nig"
console.log(url.replace('%20','-'))
console.log(url.includes('ved'));
console.log(gameName.split('-'));
console.log(url.concat(gameName,url));



