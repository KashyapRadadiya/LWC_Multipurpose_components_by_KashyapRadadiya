import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    questions = [
        {
            "id": 1,
            "question": "What is the capital of Australia?",
            "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            "answer": "Canberra"
        },
        {
            "id": 2,
            "question": "Which planet is known as the \"Red Planet\"?",
            "options": ["Earth", "Mars", "Jupiter", "Venus"],
            "answer": "Mars"
        },
        {
            "id": 3,
            "question": "Who painted the Mona Lisa?",
            "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            "answer": "Leonardo da Vinci"
        }
        ,
        {
            "id": 4,
            "question": "What is the chemical symbol for gold?",
            "options": ["Go", "Gd", "Ag", "Au"],
            "answer": "Au"
        },
        {
            "id": 5,
            "question": "Which country is home to the Amazon rainforest?",
            "options": ["Argentina", "Brazil", "Chile", "Peru"],
            "answer": "Brazil"
        },
        {
            "id": 6,
            "question": "What is the tallest mountain in the world?",
            "options": ["Mount Kilimanjaro", "Mount Everest", "K2", "Mount Fuji"],
            "answer": "Mount Everest"
        },
        {
            "id": 7,
            "question": "What is the currency of Japan?",
            "options": ["Yuan", "Won", "Dollar", "Yen"],
            "answer": "Yen"
        },
        {
            "id": 8,
            "question": "What is the hardest natural substance on Earth?",
            "options": ["Gold", "Iron", "Diamond", "Quartz"],
            "answer": "Diamond"
        },
        {
            "id": 9,
            "question": "Who wrote 'Romeo and Juliet'?",
            "options": ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            "answer": "William Shakespeare"
        },
        {
            "id": 10,
            "question": "What is the speed of light in a vacuum (approximately)?",
            "options": ["300,000 km/s", "150,000 km/s", "450,000 km/s", "1,000,000 km/s"],
            "answer": "300,000 km/s"
        }
    ];

    // give the current question with index.
    currentIndex = 0;

    get currentQuestion() {
        return this.questions[this.currentIndex];
    }

    // store answers in selectedAnswers obj to verify.
    showsubmit = false;
    selectedAnswers = {};
    handleAnswerChange(event) {
        this.selectedAnswers[this.currentQuestion.id] = event.target.value;
        if (Object.keys(this.selectedAnswers).length == this.questions.length) {
            this.showsubmit = true;
        }
    }


    // Move in questions.
    nextQuestion() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
        }
    }
    previousQuestion() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
    }

    // Finish quiz and calculate score.
    score = 0;
    isFinished = false;

    submitQuiz() {
        this.score = 0;

        this.questions.forEach(q => {
            if (this.selectedAnswers[q.id] === q.answer) {
                this.score++;
            }
        });

        if (Object.keys(this.selectedAnswers).length == this.questions.length) {
            this.isFinished = true;
        }
    }
}
