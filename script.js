let userscore = 0;
let computerscore = 0;

const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");

const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getcomputerchoice() {
  const choices = ['r', 'p', 's'];
  const randomnumber = (Math.floor(Math.random() * 3));
  return choices[randomnumber];
}

function convertToword(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userchoice, computerchoice) {
  userscore++;
  userscore_span.innerHTML = userscore;
  computerscore_span.innerHTML = computerscore;
  const smalluserword = "user".fontsize(3).sub();
  const smallcompword = "comp".fontsize(3).sub();
  const userchoicediv = document.getElementById(userchoice);
  result_p.innerHTML = `${convertToword(userchoice)}${smalluserword} beats ${convertToword(computerchoice)}${smallcompword}. You win!"`;
  userchoicediv.classList.add('green-glow');
  setTimeout(function() {document.getElementById(userchoice).classList.remove('green-glow')}, 700);
}

function lose(userchoice, computerchoice) {
  computerscore++;
  userscore_span.innerHTML = userscore;
  computerscore_span.innerHTML = computerscore;
  const smalluserword = "user".fontsize(3).sub();
  const smallcompword = "comp".fontsize(3).sub();
  const userchoicediv = document.getElementById(userchoice);
  result_p.innerHTML = `${convertToword(userchoice)}${smalluserword} loses to ${convertToword(computerchoice)}${smallcompword}. You lost.."`;
  userchoicediv.classList.add('red-glow');
  setTimeout(function() {document.getElementById(userchoice).classList.remove('red-glow')}, 700);
}

function draw(userchoice, computerchoice) {
  userscore_span.innerHTML = userscore;
  computerscore_span.innerHTML = computerscore;
  const smalluserword = "user".fontsize(3).sub();
  const smallcompword = "comp".fontsize(3).sub();
  const userchoicediv = document.getElementById(userchoice);
  result_p.innerHTML = `${convertToword(userchoice)}${smalluserword} ties ${convertToword(computerchoice)}${smallcompword}. Draw."`;
  userchoicediv.classList.add('grey-glow');
  setTimeout(function() {document.getElementById(userchoice).classList.remove('grey-glow')}, 700);
}

function game(userchoice) {
  const computerchoice = getcomputerchoice();
  switch (userchoice + computerchoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userchoice, computerchoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userchoice, computerchoice);
      break;
    case("rr"):
    case("pp"):
    case("ss"):
      draw(userchoice, computerchoice);
      break;
  }

  //test
  /*console.log(computerchoice);
  console.log("user choice => " + userchoice);
  console.log("computer choice => " + computerchoice);*/
}

/* r passes to game above^ to userchoice */
function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })

  paper_div.addEventListener('click', function() {
    game("p");
  })

  scissors_div.addEventListener('click', function() {
    game("s");
  })
}

main();