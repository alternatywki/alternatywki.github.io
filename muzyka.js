var muzyka = new Audio("audio/angeldust.mp3");
document.addEventListener("click", function() {
  muzyka.play();
});

muzyka.addEventListener("ended", odtwarzanie);

function odtwarzanie() {
  var i = Math.floor(Math.random() * 11);
  muzyka.src = tablica[i];
  muzyka.play();
  muzyka.addEventListener("ended", odtwarzanie);
}

var tablica = [
  "audio/starshopping.mp3",
  "audio/save.mp3",
  "audio/witchblades.mp3",
  "audio/crybaby.mp3",
  "audio/rafonix.mp3",
  "audio/16lines.mp3",
  "audio/angeldust.mp3",
  "audio/crash.mp3",
  "audio/hauntu.mp3",
  "audio/homealone.mp3",
  "audio/suckblood.mp3"
];

function skip() {
  odtwarzanie();
}

function pauza() {
  muzyka.src = "jd";
}

function minus() {
  muzyka.volume -= 0.1;
}

function plus() {
  muzyka.volume += 0.1;
}
