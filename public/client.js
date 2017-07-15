document.onmousemove = handleMouseMove;

let score = 0;
let lastPosition = 0;
let playing = false;

function handleMouseMove(event) {
  let fistLocation;
  if ( event.pageY < 90) {
    fistLocation = 90;
  } else if (event.pageY > 300) {
    fistLocation = 300;
  } else {
    fistLocation = event.pageY;
  }
  if (lastPosition < 195 && fistLocation >= 195) {
    score += 10;
  } else if (lastPosition >= 195 && fistLocation < 195) {
    score += 10;
  }
  lastPosition = fistLocation;
  document.getElementById("score-box").textContent = score;
  document.getElementById("pointer").style.top = 1000-score+`px`;
  document.getElementById("hand").style.top = `${fistLocation}px`;
  if (score > 1000) {
    console.log("Sending win notification");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/gameWon', true);
    xhr.send("yomama");
    score = 0;
  }
}

function decreaseScore(decrementer) {
  score -= decrementer;
  score = score < 0 ? 0 : score;
  document.getElementById("score-box").textContent = score;
}

function startPlaying() {
  playing = true;
}

setInterval(() => decreaseScore(1), 100);