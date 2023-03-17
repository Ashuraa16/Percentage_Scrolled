import "./styles.css";
// const total=document.getElementById('end').getBoundingClientRect().top;
const total = document.getElementById("body").offsetHeight;
var per = document.getElementById("perc");

console.log(
  document.getElementById("end").getBoundingClientRect().top,
  screen.height
);
window.addEventListener("scroll", function () {
  var curr = document.getElementById("end").getBoundingClientRect().top;
  var value = (total - curr) / total;
  per.innerHTML = Math.ceil(value * 100) + "% Viewed";
  if (curr < screen.height) {
    per.innerHTML = 100 + "% Viewed";
  }
});
