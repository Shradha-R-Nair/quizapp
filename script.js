const questions=[
    {
            question:"Where the word psychology does come from?",
            answers: [
                {text:"Italian",correct:false},
                {text:"Greek",correct:true},
                {text:"Latin",correct:false},
                {text:"none of the above",correct:false},
            ]
    },
    {
        question:" Psychology is said to be the scientific study of _____ and ______.",
        answers: [
            {text:"Behavior, mental processes",correct:true},
            {text:"Mental illness, Mental health",correct:false},
            {text:"Physical states, mental states",correct:false},
            {text:"none of the above",correct:false},
        ]
},
{
    question:"Psychology is a -",
    answers: [
        {text:"Biological science",correct:false},
        {text:"Physical science",correct:false},
        {text:"neuro science",correct:false},
        {text:"Social science",correct:true},
    ]
},
{
    question:"Which of the following is an example of the negative attitude towards people?",
    answers: [
        {text:"Stereotype",correct:false},
        {text:"Prejudice",correct:true},
        {text:"Prototype",correct:false},
        {text:"Discrimination",correct:false},
    ]
},
{
    question:"Which of the following part of the brain is responsible for transferring short-term memory to long-term memory? ",
    answers: [
        {text:"Amygdala",correct:false},
        {text:"Hippocampus",correct:true},
        {text:"Cerebellum",correct:false},
        {text:"None of the above",correct:false},
    ]
},
{
    question:" From the list of below options, which does not contribute in memory?",
    answers: [
        {text:"Some rest after learning",correct:false},
        {text:"Gender",correct:true},
        {text:"Goal behind learning",correct:false},
        {text:"Interesting learning material",correct:false},
    ]
},
{
    question:"  Different people often react differently to the same situations. In psychology, it is referred to as -",
    answers: [
        {text:"Multiple determinants",correct:false},
        {text:"Individual differences ",correct:true},
        {text:"Nativism",correct:false},
        {text:"None of the above",correct:false},
    ]
},
{
    question:"Which of the following Greek philosopher believed that knowledge is acquired through learning and experience?",
    answers: [
        {text:"Aristotle",correct:true},
        {text:"Plato",correct:false},
        {text:"Archimedes",correct:false},
        {text:"Discrimination",correct:false},
    ]
},
{
    question:"Which of the following is a belief that the mind is fundamentally different from the body?",
    answers: [
        {text:"Mind-body Dualism",correct:true},
        {text:"Specialism",correct:false},
        {text:"Centralism",correct:false},
        {text:"Mindism",correct:false},
    ]
},
{
    question:"Which of the following is another term for reinforcement?",
    answers: [
        {text:"Condition",correct:false},
        {text:"Response",correct:false},
        {text:"Reward",correct:true},
        {text:"none",correct:false},
    ]
}
];
const questionElement = document.getElementById("question");
const answerbutton = document.getElementById("answer-button");
const nextbtn = document.getElementById("next-btn");
let CurrentQuestionIndex = 0;
let score = 0 ; 

function startquiz(){
    CurrentQuestionIndex=0;
    score=0;
    nextbtn.innerHTML="next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let CurrentQuestion = questions [CurrentQuestionIndex];
    let questionNo = CurrentQuestionIndex + 1;
    questionElement.innerHTML =questionNo+". "+CurrentQuestion.question;

CurrentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerbutton.appendChild(button);
    if(answer.correct) {
        button.dataset.correct =  answer.correct;
        }
    button.addEventListener("click",selectAnswer);
});
}
function resetState(){
    nextbtn.style.display = "none";
    while (answerbutton.firstChild) {
    answerbutton.removeChild (answerbutton.firstChild);
    }
    }
    startquiz();
    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        }else{
        selectedBtn.classList.add("incorrect");
        }
        Array.from(answerbutton.children).forEach(button => {
            if(button.dataset.correct === "true"){
            button.classList.add("correct");
            }
            button.disabled = true;
            });
            nextbtn.style.display="block";
            }
            function showScore() {
                resetState();
                questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
                nextbtn.innerHTML = "Play Again";
                nextbtn.style.display="block";
                }
            function handleNextButton(){
                CurrentQuestionIndex++;
                if (CurrentQuestionIndex < questions.length) {
                showQuestion();
                }else{
                showScore();
                }
            }
            nextbtn.addEventListener("click", ()=>{
                if (CurrentQuestionIndex < questions.length) {
                handleNextButton();
                }else{
                startquiz();
                }
                })
        
    startquiz();