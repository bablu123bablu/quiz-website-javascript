const data = [
  {
    id: 1,
    question: "Bablu-singh developer of?",
    answers: [
      { answer: "Full-stack-", isCorrect: true },
      { answer: "Backend", isCorrect: false },
      { answer: "Frontend", isCorrect: false },
      { answer: "Both", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Bablu-singh is good coder:",
    answers: [
      { answer: "yes", isCorrect: false },
      { answer: "no", isCorrect: false },
      { answer: "yes good yes", isCorrect: true },
      { answer: "no no no", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: "Bablu-singh full night study?",
    answers: [
      { answer: "no", isCorrect: false },
      { answer: "yes", isCorrect: true },
      { answer: " no/yes", isCorrect: false },
    ],
  },


  {
    id: 1,
    question: "Bablu-singh good student",
    answers: [
      { answer: "no", isCorrect: false },
      { answer: "yes", isCorrect: true },
      { answer: " no/yes", isCorrect: false },
    ],
  },

  {
    id: 2,
    question: "Bablu-singh  mobile number",
    answers: [
      { answer: "7256824088", isCorrect: false },
      { answer: "1234567890", isCorrect: true },
      { answer: " 0987654321", isCorrect: false },
    ],
  },

  {
    id: 1,
    question: "Bablu-singh is good teacher of codinh",
    answers: [
      { answer: "no", isCorrect: false },
      { answer: "yes", isCorrect: true },
      { answer: " no/yes", isCorrect: false },
    ],
  },

  {
    id: 1,
    question: " bablu-singh ka ghar kaha hai",
    answers: [
      { answer: "delhi", isCorrect: false },
      { answer: "bihar", isCorrect: true },
      { answer: " noida", isCorrect: false },
    ],
  },

  {
    id: 2,
    question: "Bablu-singh k pas kis type ka laptop hai",
    answers: [
      { answer: "HP", isCorrect: false },
      { answer: "ASUS", isCorrect: true },
      { answer: " DELL",isCorrect: false },
    ],
  },

  {
    id: 1,
    question: "Bablu-singh k pas kis type ka phone hai",
    answers: [
      { answer: "APPLE", isCorrect: false },
      { answer: "redmi", isCorrect: true },
      { answer: " SUMSUNG", isCorrect: false },
    ],
  },



];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  showQuestion(qIndex);
};

play.addEventListener("click",()=>{
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain()
})

const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answers: ${correctCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers: ${wrongCount}`;

  resultScreen.querySelector(".score").textContent = `Score: ${
    (correctCount - wrongCount) * 10
  }`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
  <div class="answer">
      <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
      <label for="1">${item.answer}</label>
  </div>
  `
    )
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else alert("Select an answer!");
  });
};

showQuestion(qIndex);
submitAnswer();
