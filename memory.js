const person = {
    name: "Aaron",
    ae: 30,
    proffesion:"programmer"
}
console.table(person)

let arr = [1, 2, 2, 5, 6, 8, 6, 4]

let neArr = [...new Set(arr)]
console.log(neArr);