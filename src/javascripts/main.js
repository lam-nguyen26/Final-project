//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

let quizQuestions = [
    {
        question: "What are aquatic shrimps?",
        answers: [
            "Crustaceans that live in lakes and streams",
            "Animals that live on land",
            "Crustaceans that live in space" ],
        answerIndex: 0
    },

    {
        question: "What do they eat?",
        answers: [
            "They eat nothing and survive on oxygen",
            "Pizza and spaghetti",
            "Algae and decaying matters"
        ],
        answerIndex: 2
    },

    {
        question: " How big are they?",
        answers: [
            "About 10 inches",
            "Up to 2 inches",
            "From 5 to 8 inches"
        ],
        answerIndex: 1
    },

    {
        question: "What health issue was mentioned in the article?",
        answers: [
            "Not eating",
            "Molting issu",
            "White spot"
        ],
        answerIndex: 1
    },

    {
        question: "What are the 2 most popular species of shrimps?",
        answers: [
            "Anabantidae and Catostomidae",
            "Caridina and Neocaridina",
            "Caproidae and Erethistidae"
        ],
        answerIndex: 1
    }
]

function hidePage(){
    document.querySelector('#myPage').classList.add("d-none")
}

function displayQuiz() {
    quizQuestions.forEach(function(questionObj, index) {
        let questionDiv = document.createElement("div");
    
        let questionHeading = document.createElement("h3");
        questionHeading.textContent = `Question ${index+1}: ${questionObj.question}`;
        questionDiv.appendChild(questionHeading);
    
        let answersList = document.createElement("ul");
        questionObj.answers.forEach(function(answer, answerIndex) {
            let answerItem = document.createElement("li");
            answerItem.textContent = answer;

            answerItem.addEventListener("click", function() {
                let clickedAnswerIndex = answerIndex;
                let isCorrect = clickedAnswerIndex == questionObj.answerIndex;
        
                if (isCorrect) {
                    alert(`Correct! ${answer} is the right answer.`);
                } else {
                    alert(`Incorrect. ${answer} is not the correct answer. Try again.`);
                }
            });


            answersList.appendChild(answerItem);
        });
        questionDiv.appendChild(answersList);
    
        let quizContainer = document.getElementById("quiz-container");
        quizContainer.appendChild(questionDiv);
    });
}

document.getElementById("Quiz").addEventListener("click", function() {
    hidePage();
    displayQuiz();
});
