const pricingSwitch = document.querySelector(".pricing-switch");
let basicCost = document.querySelector(".basic-cost");
let proCost = document.querySelector(".pro-cost");
let businessCost = document.querySelector(".business-cost");
let perTime = document.querySelectorAll(".per-time");
const month = document.querySelector(".month");
const year = document.querySelector(".year");


pricingSwitch.addEventListener("change", () => {
    // window.alert("Im toggled");
    if (pricingSwitch.checked) {
        basicCost.textContent = "190.00";
        proCost.textContent = "390.00";
        businessCost.textContent = "990.00";
        perTime.forEach((time) => {
            time.textContent = "per year";
        });
        year.classList.toggle("is-active-switch");
        month.classList.toggle("is-active-switch");
    } else {
        basicCost.textContent = "19.00"
        proCost.textContent = "39.00";
        businessCost.textContent = "99.00";
        perTime.forEach((time) => {
            time.textContent = "per month";
        });
        year.classList.toggle("is-active-switch");
        month.classList.toggle("is-active-switch");
    }
    
});