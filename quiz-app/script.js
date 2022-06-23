
const quizData = [
            
    {
        question:'How old is Luis?',
        a: "16",
        b: '20',
        c: '22',
        d: '18',
        correct: 'd'
    },
    {
        question:'What is the name of my Brother?',
        a:'Matheus',
        b:'João',
        c:'Carlos',
        d:'Marcos',
        correct:'b',
    },
    {
        question:'What is the most used programming language in 2021?',
        a:'JavaSricpt',
        b:'C',
        c:'Phython',
        d:'C++',
        correct:'a',
    },
    {
        question:'Who is the President of Brazil?',
        a:'Jair Bolsonaro',
        b:'Lula',
        c:'Dilma',
        d:'Fernando Haddad',
        correct:'a', 
    },
    { 
        question:'What does HTML stand for?',
        a:'Cascading Style Sheets',
        b:'Jason Object Notation',
        c:'Hyper Text Markup Language',
        d:'Aplication Programming Interface',
        correct:'c',
    },
    {
        question:'What year was JavaScript lauched?',
        a:'1996',
        b:'1990',
        c:'1993',
        d:'none of the above',
        correct:'d',
    },
];
        
        const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
        
        let currentQuiz = 0;
        let answer = undefined;
        
        loadQuiz();
        
        function loadQuiz() {
            const currentQuizData = quizData[currentQuiz];

            questionEl.innerText = currentQuizData.question;

            a_text.innerText = currentQuizData.a;
            b_text.innerText = currentQuizData.b;
            c_text.innerText = currentQuizData.c;
            d_text.innerText = currentQuizData.d; 
        }

        function getSelected(){
            
            const answerEls = document.querySelectorAll('.answer');

            let answer = undefined;

            answerEls.forEach((answerEl) =>  {
                if(answerEl.check){
                    answer = answerEl.id;
                }
            });

            return undefined;
        }
        
        submitBtn.addEventListener('click', () => {
            //check to see the answer 
            const answer = getSelected();

            if(answer){                    
              if (answer === quizData[currentQuiz.correct]){
                score++;
              }

                currentQuiz++;
             if(currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                // to do: show results
                alert('You finish Get yourself an Orange Lemonade')
            }
           
        }       
});
        