// const button = document.querySelectorAll(".btn");
// const btnScroll = document.querySelector(".scroll");
// const container = document.querySelector(".story");

// container.addEventListener("scroll", () => {
//   if (container.scrollTop > 220) {
//     btnScroll.style.display = "block";
//   } else {
//     btnScroll.style.display = "none";
//   }
// });

// btnScroll.addEventListener("click", () => {
//   container.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

// button[1].addEventListener("click", () => {
//   container.style.maxHeight = "80vh";
//   button[2].style.visibility = "visible";
//   button[1].style.visibility = "hidden";
//   container.style.scrollBehavior = "smooth";
// });
// button[2].addEventListener("click", () => {
//   container.style.maxHeight = "40vh";
//   button[2].style.visibility = "hidden";
//   button[1].style.visibility = "visible";
// });

// const number = 34.92;
// const rounded = ~~number;
// console.log(rounded);

// //grouping
// const fruits = [
//   { name: "oranges", color: "red" },
//   { name: "mangoes", color: "green" },
//   { name: "pinaples", color: "red" },
//   { name: "bananas", color: "green" },
// ];

// const groupByColor = Object.groupBy(fruits, (fruit, index) => fruit.color);
// console.log(groupByColor);

// //a function returning another function that always returns hallo werd

// function createHaloWorld() {
//   return function () {
//     return "Hallo wold";
//   };
// }
// const hallo = createHaloWorld();
// console.log(hallo());

// let createCounter = function (n) {
//   return function () {
//     return  n++;
//   };
// };

// const counter = createCounter(5);
// console.log(counter());
// console.log(counter());
// console.log(counter());


var createCounter = function (init) {
  return {
    increment: function () {
      return init += 1;
    },
    decrement: function () {
      return init -=1;
    },
    reset: function () {
      return init;
    },
  };
};
const counter = createCounter(0);
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset());