const arr = [2, 5, 8,4,12,15, 9]

let square = arr.map(num => num * num)

console.log(square)

const even = arr.filter(num => num % 2 === 0)
const old = arr.filter((num) => num % 2 !== 0);
console.log(even)
console.log(old)

const age = 30;
age < 18 ? console.log('under age') : age > 18 ? console.log('you are welcome') : console.log("grow first")

const string = "sewes"

const palidrone = string.split('').reverse()
//string===palidrone?console.log("this a palidrone"):console.log('not palidrone');

const user = { name: "jane", age: 30 , email:"sala@gmail.com"}
const hasEmail = "email" in user;
console.log(hasEmail);

const obj = { a: 1, b: 2, c: 3, d: 4 }
console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));


const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors);