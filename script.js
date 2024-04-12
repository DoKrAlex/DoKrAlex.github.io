const quizData = [
    {
        question: "When did Bocchi the Rock first air on TV in Japan?",
        image: "images/question-1.jpg",
        options: ["May 20, 2022", "July 14, 2022", "October 9, 2022", "October 31, 2022"],
        correctAnswer: "October 9, 2022"
    },
    {
        question: "What is the real name of the main character, Bocchi?",
        image: "images/question-2.jpg",
        options: ["Futari Gotoh", "Michiyo Gotoh", "Hitori Gotoh", "Naoki Gotoh"],
        correctAnswer: "Hitori Gotoh"
    },
    {
        question: "What instrument does Bocchi play?",
        image: "images/question-3.jpg",
        options: ["Bass", "Guitar", "Drums", "Keyboard/Piano"],
        correctAnswer: "Guitar"
    },
    {
        question: "What is Bocchi's online persona named?",
        image: "images/question-4.jpg",
        options: ["guitarmaster", "guitarlegend", "guitarmachine", "guitarhero"],
        correctAnswer: "guitarhero"
    },
    {
        question: "What is the name of the band that Bocchi plays in?",
        image: "images/question-5.jpg",
        options: ["Shioko Band", "Rejoko Band", "Minoto Band", "Kessoku Band"],
        correctAnswer: "Kessoku Band"
    },
    {
        question: "What is the name of the live house that Kessoku Band plays at?",
        image: "images/question-6.jpg",
        options: ["Night Sky", "Starry", "Rainy", "Blaze"],
        correctAnswer: "Starry"
    },
    {
        question: "What is the name of Kessoku Band's first song?",
        image: "images/question-7.jpg",
        options: ["Guitar, Loneliness and Blue Planet (Gitā to Kodoku to Aoi Hoshi)", "That Band (Ano Bando)", "Karakara", "Secret Base (Himitsu Kichi)"],
        correctAnswer: "Guitar, Loneliness and Blue Planet (Gitā to Kodoku to Aoi Hoshi)"
    },
    {
        question: "What school does Bocchi go to?",
        image: "images/question-8.jpg",
        options: ["Shuka High School", "Sumiya Junior High School", "Koudo Ikusei Senior High School", "Nakase Junior High School"],
        correctAnswer: "Shuka High School"
    },
    {
        question: "What is the name the song played by Kessoku Band after Bocchi plays an intro improvised solo to hype up the crowd?",
        image: "images/question-9.jpg",
        options: ["That Band (Ano Bando)", "What is wrong with", "Guitar, Loneliness and Blue Planet (Gitā to Kodoku to Aoi Hoshi)", "Distortion!!"],
        correctAnswer: "That Band (Ano Bando)"
    },
    {
        question: "Who is the lead guitarist of Kessoku Band?",
        image: "images/question-10.jpg",
        options: ["Nijika Ijichi", "Hitori Gotoh", "Kita Ikuyo", "Ryo Yamada"],
        correctAnswer: "Hitori Gotoh"
    },
    {
        question: "Who is the vocalist and rhythm guitarist in Kessoku Band?",
        image: "images/question-11.jpg",
        options: ["Ryo Yamada", "Nijika Ijichi", "Hitori Gotoh", "Kita Ikuyo"],
        correctAnswer: "Kita Ikuyo"
    },
    {
        question: "Who is the bassist in Kessoku Band?",
        image: "images/question-12.jpg",
        options: ["Kita Ikuyo", "Ryo Yamada", "Nijika Ijichi", "Hitori Gotoh"],
        correctAnswer: "Ryo Yamada"
    },
    {
        question: "Who is the drummer of Kessoku Band?",
        image: "images/question-13.jpg",
        options: ["Hitori Gotoh", "Kita Ikuyo", "Ryo Yamada", "Nijika Ijichi"],
        correctAnswer: "Nijika Ijichi"
    },
    {
        question: "What real life Japanese rock band are the last names of the Kessoku band members a reference to?",
        image: "images/question-14.jpg",
        options: ["Dir En Grey", "88Kasyo Junrei", "Asian Kung-Fu Generation", "Kinniku Shoujo Tai"],
        correctAnswer: "Asian Kung-Fu Generation"
    },
    {
        question: "What school do Nijika and Ryo go to?",
        image: "images/question-15.jpg",
        options: ["Yomiyama North Junior High", "Shimokitazawa High School", "Kunugigaoka Middle School", "Shuchiin Academy"],
        correctAnswer: "Shimokitazawa High School"
    },
    {
        question: "What is the name of Nijika Ijichi's older sister?",
        image: "images/question-16.jpg",
        options: ["Nejaka Ijichi", "Gitori Ijichi", "Seika Ijichi", "Miyaki Ijichi"],
        correctAnswer: "Seika Ijichi"
    },
    {
        question: "What is the name of Seika Ijichi's drunk friend and junior?",
        image: "images/question-17.jpg",
        options: ["Kikuri Hiroi", "Shieki Hiroi", "Fusato Hiroi", "Imiki Hiroi"],
        correctAnswer: "Kikuri Hiroi"
    },
    {
        question: "How does Kikuri help out Bocchi?",
        image: "images/question-18.jpg",
        options: ["Helps her write the next big hit from Kessoku Band", "Helps her find people to buy tickets for their next concert", "Helps her with her playing", "Helps her fix her Guitar"],
        correctAnswer: "Helps her find people to buy tickets for their next concert"
    },
    {
        question: "What is the nickname of the sound engineer at Starry?",
        image: "images/question-19.jpg",
        options: ["PA-san", "Sound-san", "Mic-san", "Audio-san"],
        correctAnswer: "PA-san"
    },
    {
        question: "Which Japanese city does Bocchi the Rock take place in?",
        image: "images/question-20.jpg",
        options: ["Osaka", "Tokyo", "Yokohama", "Kyoto"],
        correctAnswer: "Tokyo"
    },
    {
        question: "What area/neighborhood in Tokyo, Japan is Starry located in?",
        image: "images/question-21.jpg",
        options: ["Kanda", "Gotanda", "Shimokitazawa", "Shiodome"],
        correctAnswer: "Shimokitazawa"
    },
    {
        question: "What is the name of the song played in the opening animation of Bocchi the Rock?",
        image: "images/question-22.jpg",
        options: ["Flashbacker (Furasshubakkā)", "If I Could Be a Constellation (Seiza ni Naretara)", "Never Forget (Wasurete Yaranai)", "Seishun Complex (Seishun Konpurekkusu)"],
        correctAnswer: "Seishun Complex (Seishun Konpurekkusu)"
    },
    {
        question: "Who wrote the manga for Bocchi the Rock?",
        image: "images/question-23.jpg",
        options: ["Rumiko Takahashi", "Aki Hamaji", "Naoki Urasawa", "Akira Toriyama"],
        correctAnswer: "Aki Hamaji"
    },
    {
        question: "What genres is Bocchi the Rock classified under?",
        image: "images/question-24.jpg",
        options: ["Mystery, Music", "Action, Music", "Comedy, Music", "Drama, Music"],
        correctAnswer: "Comedy, Music"
    },
];

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerHTML = `<img src="${currentQuizData.image}" alt="Question Image">`;
    questionElement.innerHTML += `<p>${currentQuizData.question}</p>`;
    optionsContainer.innerHTML = '';
    currentQuizData.options.forEach((option, index) => {
        const optionElement = document.createElement('label');
        optionElement.innerHTML = `<input type="radio" name="option" value="${option}">${option}`;
        optionsContainer.appendChild(optionElement);
    });
}


function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) return;
    
    if (selectedOption.value === quizData[currentQuestion].correctAnswer) {
        score++;
    }
    
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = '';
    optionsContainer.innerHTML = '';
    submitButton.style.display = 'none';
    resultElement.textContent = `Your Score: ${score} out of ${quizData.length}`;
}

loadQuestion();
submitButton.addEventListener('click', checkAnswer);