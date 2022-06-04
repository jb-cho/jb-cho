// theme Color
const dayNight = document.querySelector(".day-night");
const dayNightString = document.querySelector(".style-switcher");
dayNightString.addEventListener("click", () => {
  dayNightString.querySelector("i").classList.toggle("fa-sun");
  dayNightString.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNightString.querySelector("i").classList.add("fa-sun");
  } else {
    dayNightString.querySelector("i").classList.add("fa-moon");
  }
});
dayNightString.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    console.log("dark");
    dayNightString.querySelector("p").innerText = "Light Mode";
  } else {
    console.log("Day");
    dayNightString.querySelector("p").innerText = "Dark Mode";
  }
});
