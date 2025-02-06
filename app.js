// Prevent animation on load
setTimeout(() => {
    document.body.ckassList.remove('preload');
}, 500);
// DOM
const btnRules = document.querySelector(".rules-btn")
const btnClose = document.querySelector(".close-btn")
const modalRuls = document.querySelector(".modal")

// sbow rules
btnRules.addEventListener("click", () => {
    modalRuls.classList.toggle("show-modal");
});
btnClose.addEventListener("click", () => {
    modalRuls.classList.toggle("show-modal");
});