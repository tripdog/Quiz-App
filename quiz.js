let questions = [{
        question: "Distance to the Moon?",
        answer: "238,900 Miles",
        id: 1,
        options: ["276,905 miles", "1,000 Miles", "238,900 Miles", "163,592 Miles"]
    },
    {
        question: "Deoxyribonucleic acid is commonly referred to as?",
        answer: "DNA",
        id: 2,
        options: ["RNA", "Life's Leggos", "DNA", "Subatomic Glue"]
    },
    {
        question: "What planet is closest in size to our moon?",
        answer: "Mercury",
        id: 3,
        options: ["Earth", "Mercury", "Pluto", "Venus"]
    },
    {
        question: "What's the common name for a cubic decimeter",
        answer: "Liter",
        id: 4,
        options: ["Liter", "Gallon", "Pint", "Kilometer"]
    },
    {
        question: "What process involves heating an ore to obtain a metal?",
        answer: "Smelting",
        id: 5,
        options: ["Alchemy", "Smelting", "Chemistry", "Oxidation"]
    },

    {
        question: "How many of the nine planets have moons?",
        answer: "Seven",
        id: 6,
        options: ["Nine", "Five", "Twelve", "Seven"]
    },
]


// const generateQuestion = () => {
//     let randomQuestArr = []
//     let avaiableQuestions = questions
//     for (let i = 1; i <= 6; i++){
//         let quest = avaiableQuestions[Math.floor(Math.random() * avaiableQuestions.length)]
//         console.log(quest)
//         availableQuestions = avaiableQuestions.filter(item => item.id !== quest.id)
//         console.log(avaiableQuestions)
//         randomQuestArr.push(quest)
//     }
//     return randomQuestArr
// }
// questions = generateQuestion()
const scoreBoard = document.querySelector(".points")
let score = 0
const inner = document.querySelector(".inner")
inner.innerHTML = ""
let questionsAttempted = 0


const checkingQuiz = () => {
    let playAgain = document.querySelector(".playAgain")
    if (questionsAttempted === 6) {
        document.querySelector(".inner").style.display = "none"
        playAgain.style.display = "grid"
        playAgain.querySelector("h2").innerText = "Game Over."
        playAgain.querySelector("h3").innerText = "Total Score " + `${score}/100`
    } else {
        document.querySelector(".wrapper").style.display = "grid"
        playAgain.style.display = "none"
    }
}

questions.forEach(item => {
    let newQuestion = document.createElement('div')
    newQuestion.className = "quiz"
    document.querySelector(".inner").appendChild(newQuestion)
    newQuestion.innerHTML = `
                <h3>Question ${item.id}</h3>
                <p>${item.question}</p>
                <form><div class="miniWrap">
                        <input type="radio" name="opt" id="opt1" value="${item.options[0]}">
                        <label for="opt1">${item.options[0]}</label>
                    </div><div class="miniWrap">
                        <input type="radio" name="opt" id="opt2" value="${item.options[1]}">
                        <label for="opt2">${item.options[1]}</label>
                    </div><div class="miniWrap">
                        <input type="radio" name="opt" id="opt3" value="${item.options[2]}">
                        <label for="opt3">${item.options[2]}</label>
                    </div><div class="miniWrap">
                        <input type="radio" name="opt" id="opt4" value="${item.options[3]}">
                        <label for="opt4">${item.options[3]}</label>
                    </div></form>
`
    let ansBtn = document.createElement("button")
    ansBtn.type = "submit"
    ansBtn.innerText = "answer"
    ansBtn.addEventListener("click", (e) => {
        e.preventDefault()
        let currentForm = e.target.parentElement
        let inputList = currentForm.querySelectorAll("input")
        console.log(item)
        inputList.forEach(radio => {
            if (radio.checked) {
                questionsAttempted += 1
                checkingQuiz()
                console.log(radio.value)
                console.log(item.answer)
                if (radio.value === item.answer) {
                    currentForm.parentElement.className = "quizCorrect"
                    currentForm.parentElement.innerHTML = "Well Done!"
                    score += 16.67
                    score = Math.floor(score)
                    scoreBoard.innerText = score + " points"
                } else {
                    currentForm.parentElement.className = "quizWrong"
                    currentForm.parentElement.innerHTML = "OUCH!"
                    console.log("Wrong")
                }
            }
        })
    })
    newQuestion.querySelector("form").appendChild(ansBtn)
})
const completeBtn = document.querySelector(".replay")
const defeatBtn = document.querySelector(".defeat")
completeBtn.addEventListener("click", () => {
    location.reload()
   
    // let randomQuestions = generateQuestion()
    })

defeatBtn.addEventListener("click", () => {
    document.querySelector("header h2").remove()
    document.querySelector(".scoreBox").remove()
})