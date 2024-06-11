const button = document.querySelectorAll(".btn");
const btnScroll = document.querySelector(".scroll");
const container = document.querySelector(".story");

container.addEventListener('scroll' ,() =>{
  if (container.scrollTop > 220) {
    btnScroll.style.display = "block";
  } else {
    btnScroll.style.display = "none";
  }
})


btnScroll.addEventListener("click", () => {
  container.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

button[1].addEventListener("click", () => {
  container.style.maxHeight = "80vh";
  button[2].style.visibility = "visible";
  button[1].style.visibility = "hidden";
  container.style.scrollBehavior = "smooth";
});
button[2].addEventListener("click", () => {
  container.style.maxHeight = "40vh";
  button[2].style.visibility = "hidden";
  button[1].style.visibility = "visible";
});
