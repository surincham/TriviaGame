(function(){
    function questionaire(){
    var output = [];

questions.forEach(
    (currentQuestion, questionNumber) =>{
        var answers = [];

        for(letter in currentQuestion.answers){
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
                </label>`
            );
        }  
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    quizContainer.innerHTML = output.join('');
    }

    function showResults(){
        var answerContainer = quizContainer.querySelectorAll('.answers');
        var correctAns = 0;

        questions.forEach((currentQuestion, questionNumber) => {
            var answerContainer = answerContainer[questionNumber];
            var selector = `input[name=question${questionNumber}]:checked`;
            var userAns = (answerContainer.querySelector(selector) || {}).value;

        if(userAns === currentQuestion.correctAnswer){
            correctAns++;
            answerContainer[questionNumber].style.color = 'lightgreen';
        }
        else{
            answerContainer[questionNumber].style.color = 'red';
        }
        });
    resultsContainer.innerHTML = correctAns + ' out of ' + questions.length;
    }

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
      question: 'Who plays Black Widow in the Avengers movie?',
      answers: {
          a: ' Jessica Biel ',
          b: ' Scarlett Johanson ',
          c: ' Reese Weatherspoon ',
          d: ' Nicole Kidman '
      },
      correctAnswer: 'b'
    },
    {
    question: 'Who plays Captain America in the Avengers movie?',
    answers: {
        a: ' Mark Wahlberg ',
        b: ' Dwayne "The Rock" Johnson ',
        c: ' Chris Evans ',
        d: ' Jason Mamoa '
    },
    correctAnswer: 'c'
  },
  {
    question: 'Who plays Iron Man in the Avengers movie?',
    answers: {
        a: ' Robert Downing Jr. ',
        b: ' Tom Cruise ',
        c: ' Adam Sandler ',
        d: ' Ben Aflack '
    },
    correctAnswer: 'a'
  },
  {
    question: 'Who plays Black Panther in the Avengers movie?',
    answers: {
        a: ' Michael B. Jordan ',
        b: ' Shaquille O\'Neal ',
        c: ' Will Smith ',
        d: ' Chadwick Boseman '
    },
    correctAnswer: 'd'
  },
  {
    question: 'Who plays Hulk in the Avengers movie?',
    answers: {
        a: ' Mark Ruffalo ',
        b: ' Chris evans ',
        c: ' Robert Downing Jr. ',
        d: ' Josh Brolin '
    },
    correctAnswer: 'a'
  },
  {
    question: 'Who plays Spider Man in the Avengers movie?',
    answers: {
        a: ' Chris Pratt ',
        b: ' Sebastian Stan ',
        c: ' Paul Bettany ',
        d: ' Tom Holland '
    },
    correctAnswer: 'd'
  },
  {
    question: 'Who plays Thor in the Avengers movie?',
    answers: {
        a: ' Chris Evans ',
        b: ' Chris Hemsworth ',
        c: ' Liam Hemsworth ',
        d: ' Liam Nelson '
    },
    correctAnswer: 'b'
  }
];

questionaire();

window.setTimeout(time,0);
function time (){
    alert ('You have one minute to complete this quiz!');
    console.log ('You have one minute to complete this quiz!');
}

window.setTimeout(timeOut, 60000);
function timeOut (){
    alert ('Time has ran out! Here is the results!');
    console.log ('Time has ran out! Here is the results!');
    submitButton(showResults);
}
submitButton.addEventListener("click", showResults);

})();