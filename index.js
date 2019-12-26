var userQuestion = document.getElementById('user-question');
var submitButton = document.querySelector('.submit-answer');
var answerDisplay = document.querySelector('.answer');
var questionDisplay = document.querySelector('.user-question-display');
var clearButton = document.getElementById('clear')

submitButton.addEventListener("click", showAnswer);
submitButton.disabled = true;
clearButton.disabled = true;

// userQuestion.addEventListener("keyup", ableDisableBtns);


function showAnswer(){
  var answers = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don\'t count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];
  var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  questionDisplay.innerHTML = userQuestion.value;
  userQuestion.value = "";
  answerDisplay.innerHTML = randomAnswer;
  answerDisplay.classList.remove('answer');
  document.getElementById("eight-ball").style.visibility = "hidden";
}
