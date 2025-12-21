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
const resultTip = document.querySelector(".result-tip");
const resultTotal = document.querySelector(".result-total");
const resetBtn = document.querySelector(".reset");
const allBtn = document.querySelectorAll("button");

let tip = 0.15;
let activeBtn;

tip5.addEventListener("click", (e) => {
  tip = 0.05;
  activeBtn = e.target;
  calcBill(e);
});
tip10.addEventListener("click", (e) => {
  tip = 0.1;
  activeBtn = e.target;
  calcBill(e);
});
tip15.addEventListener("click", (e) => {
  tip = 0.15;
  activeBtn = e.target;
  calcBill(e);
});
tip25.addEventListener("click", (e) => {
  tip = 0.25;
  activeBtn = e.target;
  calcBill(e);
});
tip50.addEventListener("click", (e) => {
  tip = 0.5;
  activeBtn = e.target;
  calcBill(e);
});
customtip.addEventListener("change", (e) => {
  tip = Number(e.target.value) / 100;
  calcBill();
});

resetBtn.addEventListener("click", () => {
  bill.value = 0;
  nop.value = 1;
  customtip.value = 0;
  tip = 0.15;
  activeBtn = tip15;
  updateBtn();
  resultTip.innerHTML = "$0";
  resultTotal.innerHTML = "$0";
  resetBtn.classList.add("clear");
  alertB(false);
});
function calcBill(e) {
  resetBtn.classList.remove("clear");
  updateBtn();
  let TotalBill = bill.value;
  let numberOfPeople = Number(nop.value);
  if (numberOfPeople === 0) {
    alertB(true);
    return;
  }
  let eachTip = (TotalBill * tip) / numberOfPeople;
  let totalEach = eachTip + TotalBill / numberOfPeople;
  eachTip = eachTip.toFixed(2);
  totalEach = totalEach.toFixed(2);
  resultTip.innerHTML = `$${eachTip}`;
  resultTotal.innerHTML = `$${totalEach}`;
}

function updateBtn() {
  allBtn.forEach((item) => item.classList.remove("choose"));
  if (activeBtn) {
    activeBtn.classList.add("choose");
  }
}
function alertB(active) {
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
  if (number <= 0) {
    alertB(true);
  } else {
    alertB(false);
    calcBill(e);
  }
});
