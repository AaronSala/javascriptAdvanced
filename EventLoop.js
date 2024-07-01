function add(num2) {
   
   // console.log(num1+num2)
    return function for2(num1) {
        
        console.log(num1+num2);
    }
}
let fullfunc = add(23)
fullfunc(10)

add(12)(43)


//call bind and apply
//call
const o1 = {
    name: "ravi",
    getName: function () {
        console.log('hallo'+' '+ this.name)
    }
}

const o2 = {
    name:"mutuli"
}
o1.getName.call(o2)

//apply
const nums = [1, 2, 4, 6, 7, 45]

const max = Math.max.apply( nums)
console.log(max)