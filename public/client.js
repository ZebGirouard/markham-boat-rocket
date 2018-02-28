document.onmousemove = handleMouseMove;

var score = 0;
var lastPosition = 0;
var playing = false;
var gruntGroan;

function handleMouseMove(event) {
  //var gruntGroan = gruntGroan || 0;
  gruntGroan = gruntGroan || playing ? gruntGroan : startPlaying();
  console.log(gruntGroan);
  var fistLocation;
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
  document.getElementById("pointer").style.top = (1000-score)/4+`px`;
  document.getElementById("hand").style.top = `${fistLocation}px`;
  console.log(gruntGroan);
  if (score > 1000) {
    console.log("Sending win notification");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/gameWon', true);
    xhr.send("yomama");
    score = 0;
    setTimeout(function() {
      document.getElementById("fireworks").style.display = "initial";
      document.getElementById("fireworks-background").style.display = "initial";
      document.getElementById("katy-perry").play();
      setInterval(function() {
        setTimeout(function() {
          document.getElementById("fireworks").style.opacity = 1.0;
        }, 500);
        document.getElementById("fireworks").style.opacity = 0.5;
      }, 1000);
      setTimeout(function() {
        document.getElementById("fireworks").style.display = "none";
        document.getElementById("fireworks-background").style.display = "none";
        playing = false;
      }, 7000);
      stopPlaying(gruntGroan);
    }, 500);  }
}

function decreaseScore(decrementer) {
  score -= decrementer;
  score = score < 0 ? 0 : score;
  document.getElementById("score-box").textContent = score;
  document.getElementById("pointer").style.top = (1000-score)/4+`px`;
}

function startPlaying() {
  playing = true;
  var grunting = setInterval(function() {
    document.getElementById("grunt-groan").play();
  }, 1000);
  console.log(grunting);
  return grunting;
}

function stopPlaying(grunty) {
  console.log("Stopping playing!");
  console.log(grunty);
  gruntGroan = null;
  clearInterval(grunty);
}

setInterval(() => decreaseScore(1), 100);