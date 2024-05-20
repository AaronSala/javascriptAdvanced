function curriedMultiply(a) {
  return function (b) {
    return a * b;
  };
}
// Write your code here
let nestedFunction = curriedMultiply(5);

const result = nestedFunction(7);

console.log(result);
