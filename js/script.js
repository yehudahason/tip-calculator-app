const bill = document.getElementById("bill");
const tip5 = document.getElementById("tip5");
const tip10 = document.getElementById("tip10");
const tip15 = document.getElementById("tip15");
const tip25 = document.getElementById("tip25");
const tip50 = document.getElementById("tip50");
const customtip = document.getElementById("customtip");
const nop = document.getElementById("nop");
const banner = document.querySelector(".alert");
const inputwrap = document.querySelector(".alert2");

tip5.addEventListener("click", (e) => {
  calcBill(5);
});
tip10.addEventListener("click", (e) => {
  calcBill(10);
});
tip15.addEventListener("click", (e) => {
  calcBill(15);
});
tip25.addEventListener("click", (e) => {
  calcBill(25);
});
tip50.addEventListener("click", (e) => {
  calcBill(50);
});

function alert(active) {
  if (active) {
    banner.classList.add("active");
    inputwrap.classList.add("active");
  } else {
    banner.classList.remove("active");
    inputwrap.classList.remove("active");
  }
}

nop.addEventListener("change", (e) => {
  number = Number(e.target.value);
  if (number === 0) {
    alert(true);
  } else {
    alert(false);
  }
});
