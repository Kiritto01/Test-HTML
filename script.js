let name =  prompt("Podaj imię i nazwisko:")
while (name.length == 0) {
  alert("Podaj to wiem że je masz");
  name=prompt("Podaj imię i nazwisko:");
 }
  (function(){
  function buildQuiz(){
    const output = [];
    
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];
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
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );
    quizContainer.innerHTML = output.join('');
  }


  function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach( (currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });
    let percent = ((numCorrect/myQuestions.length) * 100).toFixed(2);
    resultsContainer.innerHTML = `${name}, zdobyłeś ${numCorrect} z ${myQuestions.length} punktów / ${percent}%`;
    console.log(`${name}, zdobyłeś ${numCorrect} z ${myQuestions.length} punktów / ${percent}%`)
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
      restart.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }
 function previousBtn() {
    previousButton.style.display = 'none';
 }
 function restartBtn(){
   restart.style.display = 'inline-block';
 }
  const restart = document.getElementById('restart');
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Co oznacza znacznik &ltHTML&gt ?",
      answers: {
        A: "Początek dokumentu",
        B: "Rodzaj zastosowanej składni",
        C: "Koniec dokumentu"
      },
      correctAnswer: "A"
    },
    {
      question: "Co oznacza znacznik &ltHEAD&gt ?",
      answers: {
        A: "Używa głowy",
        B: "Przechowuje informacje o stronie",
        C: "Obraca stronę o 90 stopni"
      },
      correctAnswer: "B"
    },
    {
      question: "Co oznacza znacznik &ltTITLE&gt ?",
      answers: {
        A: "Zmienia nazwe zakładki",
        B: "Wyświetla tekst na stronie",
        C: "Dodaje znaczniki CSS",
      },
      correctAnswer: "A"
      
    },
    {

      question: "Co oznacza znacznik &ltMETA&gt ?",
      answers: {
        A: "Dzięki niemu możemy używać komentarzy",
        B: "Podkreśla słowo",
        C: "Szczegółowo opisuje zawartość dokumentu",
        D: "Wyrównuję tekst do prawej strony"
      },
      correctAnswer: "C"
      
    },
    {

      question: "Co oznacza znacznik &ltSTRONG&gt ?",
      answers: {
        A: "Strona się odwraca",
        B: "Powiększa wszytkie znaczniki na stronie",
        C: "Przechowuje adres IP serwera",
        D: "Pogrubia tekst"
      },
      correctAnswer: "D"
      
    },
    {

      question: "Co oznacza znacznik &ltI&gt ?",
      answers: {
        A: "Obraca stronę o 90 stopni",
        B: "Pochyla czcionkę",
        C: "Przechowuje adres dane serwera",
        D: "Nie istnieje taki"
      },
      correctAnswer: "B"
      
    },
    {

      question: "Co oznacza znacznik &ltSUP&gt ?",
      answers: {
        A: "Wyświetla superlatywy",
        B: "Obraca stronę o 90 stopni",
        C: "Przechowuje adres IP serwera",
        D: "Używa idneksu górnego"
      },
      correctAnswer: "D"
      
    },
    {

      question: "Co oznacza znacznik &ltSUB&gt ?",
      answers: {
        A: "Wyświetla duży napis na stronie",
        B: "Używa idneksu dolnego",
        C: "Używa idneksu górnego",
        D: "Nie wiem co oznacza"
      },
      correctAnswer: "B"
      
    },
    {

      question: "Co oznacza znacznik &lt!-- tutaj będzie galeria --&gt ?",
      answers: {
        A: "Umożliwia wstawianie komenarzy",
        B: "Przechowuje adres IP serwera",
        C: "Przechowuje znaczniki i tekst strony",
        D: "Nie istnieje taki"
      },
      correctAnswer: "A"
      
    },
    {

      question: "Co oznacza znacznik &ltBODY&gt ?",
      answers: {
        A: "Obraca stronę o 90 stopni",
        B: "Przechowuje znaczniki i tekst strony",
        C: "Przechowuje informacje wprowadzone przez użytkownika",
        D: "Nie istnieje taki"
      },
      correctAnswer: "B"
      
    },
  ];

  
  buildQuiz();


  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(currentSlide);


  submitButton.addEventListener('click', showResults);
  submitButton.addEventListener('click', previousBtn);
  submitButton.addEventListener('click', restartBtn);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
