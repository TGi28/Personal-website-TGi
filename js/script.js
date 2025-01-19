var portfolioBtns = document.querySelectorAll(".page-btn");

portfolioBtns.forEach(function (btn) {
  btn.addEventListener("click", filterPortfolio);
});

function filterPortfolio(e) {
  portfolioBtns.forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");
}
