// Prevent animation on load
setTimeout(() => {
    document.body.ckassList.remove('preload');
}, 500);
// DOM
const btnRules = document.querySelector(".rules-btn")
const btnClose = document.querySelector(".close-btn")
const modalRuls = document.querySelector(".modal")

const CHOICES =[
    {
        name: "paper",
        beats: "rock"
    },
    {
        name: "scissors",
        beats: "paper"
    },
    {
        name: "rock",
        beats: "scissors"
    }
]

const choiceButtons = document.querySelectorAll(".choice-btn")
const gameDiv = document.querySelector(".game")
const reslutlsDiv = document.querySelector(".results")
const resultsDivs = document.querySelectorAll(".results_result")

// Game logic
choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const choiceName = button.dataset.choice
        const choice = CHOICES.find((choice) => choice.name === choiceName)
        choose(choice)
    })
})

function choose(choice) {
    const aichoice = aichoose()
    displayResults([choice, aichoice])    
}

function aiChoose () {
    const rand = Math.floor(Math.random() * CHOICES.length)
    return CHOICES[rand] 
}

function displayResults(results) {
    resultsDivs.forEach((resultDiv, idx) => {
        const result = results[index]
        setTimeout(() => {
            resultDiv.innerHTML =
            <div class = "choice ${result[idx].name}">
                <img src="images/icon-${result[idx].name}.svg" alt="${result[idx].name}" /> 
            </div>
        }, 
    idx * 1000);
    });

    gameDiv.classList.toggle("hidden")
    reslutlsDiv.classList.toggle("hidden")
}

// sbow rules
btnRules.addEventListener("click", () => {
    modalRuls.classList.toggle("show-modal");
});
btnClose.addEventListener("click", () => {
    modalRuls.classList.toggle("show-modal");
});