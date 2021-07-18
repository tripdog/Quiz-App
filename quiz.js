const questions = [
    {
    question: "Distance to the Moon?",
    answer: "160000 Miles",
    id: 1,
    options: ["276,905 miles", "1,000 Miles", "238,900 Miles", "163,592 Miles"]
},
    {
    question: "Deoxyribonucleic acid is commonly referred to as?",
    answer: "DNA",
    id: 2,
    options: [" RNA", "Life's Leggos", " DNA", "Subatomic Glue"]
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

const scoreBoard = document.querySelector(".points")
let score = 0
const inner = document.querySelector(".inner")
inner.innerHTML = ""

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
                    </div><button onclick="correctAnswer(event, ${item})" type="submit">Answer</button></form>
    `    
})

// const answerBtn = document.querySelectorAll("form button")
// answerBtn.forEach(btn => {
//     btn.addEventListener("click", (e) => {
//     e.preventDefault()
//         let currentForm = e.target.parentElement
//         let options = currentForm.querySelectorAll("input[name='opt']")
//         options.forEach(ans => {
//                 if (ans.checked) {
//                     console.log(ans)
//                 }
//             })
//     })
// })

const correctAnswer = (currentBtn, question) => {
    currentBtn.preventDefault()
    console.log(currentBtn)
}