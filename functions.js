//factory functions
function person(name, age) {
  return {
    name: this.name,
    age: this.age,
    greet: function () {
      return `hallo ${name} your age is ${age}`;
    },
  };
}

const person1 = person("jane", 40);
const person2 = person("john", 23);

console.log(person1.greet());
console.log(person2.greet());

//constructor functions 
function Student(name, marks){
    this.name = name,
        this.marks = marks,
        this.comment =function(){
        return`hallo ${name} your totals marks is ${marks}`
        }
}
const student1 = new Student('David', 78)
const student2 = new Student('joyce', 56)
console.log(student1.comment())
console.log(student2.comment())

//generator functions
function* numberGenerator() {
    let i = 0
    while (true) {
        yield i++
    }
}
const gen = numberGenerator()

console.log(gen.next().value)
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

//shallow copy
const car = {
    model: 'toyota',
    mileage: 30000,
    year:2018
}
const harrier = car
console.log(harrier)

//deep copy(a)json.parse json.stringfy
const patient = {
    name: 'mailu',
    age: 40
}
const deepCopy = JSON.parse(JSON.stringify(patient))
console.log(deepCopy)
//(b) structuredClone
const patient2 = structuredClone(patient)
console.log(patient2)
 
//(c) pread operator (...) any object with a nested object does not deep copy
const patient3 = { ...patient }
patient3.name = "fred"
console.log('patient3 name is ' + patient3.name)
console.log('original name was ' + patient.name)