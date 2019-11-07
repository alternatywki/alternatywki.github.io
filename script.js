let ilosc_na_klikniecie = 1;
let posiadane_alternatywki = 0;
var dzwiek = document.getElementById("elo");

function farma() {
  posiadane_alternatywki = posiadane_alternatywki + ilosc_na_klikniecie;
  document.getElementById("posiadane").innerHTML =
    "Posiadane alternatywki: " + posiadane_alternatywki;
  localStorage.setItem("posiadane_alternatywki_zapis", posiadane_alternatywki);
}

function sklep1() {
  if (posiadane_alternatywki >= 100) {
    posiadane_alternatywki = posiadane_alternatywki - 100;
    ilosc_na_klikniecie = 1 + ilosc_na_klikniecie;
    document.getElementById("posiadane").innerHTML =
      "Posiadane alternatywki:" + "" + posiadane_alternatywki;
    document.getElementById("ilosc").innerHTML =
      "Ilość alternatywek na kliknięcie: " + ilosc_na_klikniecie;
    localStorage.setItem(
      "posiadane_alternatywki_zapis",
      posiadane_alternatywki
    );
    localStorage.setItem("ilosc_na_klikniecie_zapis", ilosc_na_klikniecie);
  }
}

function sklep2() {
  if (posiadane_alternatywki >= 1000) {
    posiadane_alternatywki = posiadane_alternatywki - 1000;
    ilosc_na_klikniecie = 25 + ilosc_na_klikniecie;
    document.getElementById("posiadane").innerHTML =
      "Posiadane alternatywki:" + "" + posiadane_alternatywki;
    document.getElementById("ilosc").innerHTML =
      "Ilość alternatywek na kliknięcie: " + ilosc_na_klikniecie;
    localStorage.setItem(
      "posiadane_alternatywki_zapis",
      posiadane_alternatywki
    );
    localStorage.setItem("ilosc_na_klikniecie_zapis", ilosc_na_klikniecie);
  }
}

function sklep3() {
  if (posiadane_alternatywki >= 10000) {
    posiadane_alternatywki = posiadane_alternatywki - 10000;
    ilosc_na_klikniecie = 100 + ilosc_na_klikniecie;
    document.getElementById("posiadane").innerHTML =
      "Posiadane alternatywki:" + "" + posiadane_alternatywki;
    document.getElementById("ilosc").innerHTML =
      "Ilość alternatywek na kliknięcie: " + ilosc_na_klikniecie;
    localStorage.setItem(
      "posiadane_alternatywki_zapis",
      posiadane_alternatywki
    );
    localStorage.setItem("ilosc_na_klikniecie_zapis", ilosc_na_klikniecie);
  }
}

function sklep4() {
  if (posiadane_alternatywki >= 100000) {
    posiadane_alternatywki = posiadane_alternatywki - 100000;
    ilosc_na_klikniecie = 200 + ilosc_na_klikniecie;
    document.getElementById("posiadane").innerHTML =
      "Posiadane alternatywki:" + "" + posiadane_alternatywki;
    document.getElementById("ilosc").innerHTML =
      "Ilość alternatywek na kliknięcie: " + ilosc_na_klikniecie;
    localStorage.setItem(
      "posiadane_alternatywki_zapis",
      posiadane_alternatywki
    );
    localStorage.setItem("ilosc_na_klikniecie_zapis", ilosc_na_klikniecie);
  }
}

function zapisPosiadane() {
  posiadane_alternatywki = parseInt(
    localStorage.getItem("posiadane_alternatywki_zapis")
  );

  document.getElementById("posiadane").innerHTML =
    "Posiadane alternatywki: " + posiadane_alternatywki;
}

function zapisIlosc() {
  ilosc_na_klikniecie = parseInt(
    localStorage.getItem("ilosc_na_klikniecie_zapis")
  );

  document.getElementById("ilosc").innerHTML =
    "Ilość alternatywek na kliknięcie: " + ilosc_na_klikniecie;
}

function wyczysc() {
  posiadane_alternatywki = 0;
  localStorage.posiadane_alternatywki = posiadane_alternatywki;
  document.getElementById("posiadane").innerHTML =
    "Posiadane alternatywki: " + posiadane_alternatywki;
  localStorage.setItem("posiadane_alternatywki_zapis", posiadane_alternatywki);
  ilosc_na_klikniecie = 1;
  localStorage.ilosc_na_klikniecie = ilosc_na_klikniecie;
  document.getElementById("ilosc").innerHTML =
    "Ilość alternatywek na kliknięcie: " + ilosc_na_klikniecie;
  localStorage.setItem("ilosc_na_klikniecie_zapis", ilosc_na_klikniecie);
  wyczyscPosiadne();
  wyczyscIlosc();
}

function wyczyscPosiadne() {
  posiadane_alternatywki = parseInt(
    localStorage.getItem("posiadane_alternatywki_zapis")
  );
}

function wyczyscIlosc() {
  ilosc_na_klikniecie = parseInt(
    localStorage.getItem("ilosc_na_klikniecie_zapis")
  );
}

if (localStorage.key("posiadane_alternatywki_zapis") < 0) {
  wyczysc();
} else {
  zapisPosiadane();
}

if (localStorage.key("ilosc_na_klikniecie_zapis") < 1) {
  wyczysc();
} else {
  zapisIlosc();
}

document.addEventListener("click", function() {
  dzwiek.play();
});

dzwiek.addEventListener("ended", odtwarzanie);

function odtwarzanie() {
  var i = Math.floor(Math.random() * 11);
  dzwiek.src = tablica[i];
  dzwiek.play();
  dzwiek.addEventListener("ended", odtwarzanie);
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
