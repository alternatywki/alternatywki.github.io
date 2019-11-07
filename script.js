let ilosc_na_klikniecie = 1;
let posiadane_alternatywki = 0;
var dzwiek = document.getElementById("elo");
var klik1koszt = 100;
var klik1daje = 1;

var klik2koszt = 1100;
var klik2daje = 8;

var klik3koszt = 12000;
var klik3daje = 60;

var klik4koszt = 560000;
var klik4daje = 520;

function farma() {
  posiadane_alternatywki = posiadane_alternatywki + ilosc_na_klikniecie;
  document.getElementById("posiadane").innerHTML =
    "Posiadane alternatywki: " + posiadane_alternatywki;
  localStorage.setItem("posiadane_alternatywki_zapis", posiadane_alternatywki);
}

function zapisz1() {
  klik1koszt = parseInt(localStorage.getItem("klik1_zapis"));
  document.getElementById("wtf1").innerHTML =
    "Kosztuje " + klik1koszt + " alternatywek";
}

function zapisz2() {
  klik2koszt = parseInt(localStorage.getItem("klik2_zapis"));
  document.getElementById("wtf2").innerHTML =
    "Kosztuje " + klik2koszt + " alternatywek";
}

function zapisz3() {
  klik3koszt = parseInt(localStorage.getItem("klik3_zapis"));
  document.getElementById("wtf3").innerHTML =
    "Kosztuje " + klik3koszt + " alternatywek";
}

function zapisz4() {
  klik4koszt = parseInt(localStorage.getItem("klik4_zapis"));
  document.getElementById("wtf4").innerHTML =
    "Kosztuje " + klik4koszt + " alternatywek";
}

function sklep1() {
  if (posiadane_alternatywki >= klik1koszt) {
    posiadane_alternatywki = posiadane_alternatywki - klik1koszt;
    ilosc_na_klikniecie = klik1daje + ilosc_na_klikniecie;
    klik1koszt = Math.floor(klik1koszt * 1.15);
    document.getElementById("posiadane").innerHTML =
      "Posiadane alternatywki:" + "" + posiadane_alternatywki;
    document.getElementById("ilosc").innerHTML =
      "Ilość alternatywek na kliknięcie: " + ilosc_na_klikniecie;
    localStorage.setItem(
      "posiadane_alternatywki_zapis",
      posiadane_alternatywki
    );
    localStorage.setItem("ilosc_na_klikniecie_zapis", ilosc_na_klikniecie);
    document.getElementById("wtf1").innerHTML =
      "kosztuje " + klik1koszt + " alternatywek";
    localStorage.setItem("klik1_zapis", klik1koszt);
  }
}

function sklep2() {
  if (posiadane_alternatywki >= klik2koszt) {
    posiadane_alternatywki = posiadane_alternatywki - klik2koszt;
    ilosc_na_klikniecie = klik2daje + ilosc_na_klikniecie;
    klik2koszt = Math.floor(klik1koszt * 1.15);
    document.getElementById("posiadane").innerHTML =
      "Posiadane alternatywki:" + "" + posiadane_alternatywki;
    document.getElementById("ilosc").innerHTML =
      "Ilość alternatywek na kliknięcie: " + ilosc_na_klikniecie;
    localStorage.setItem(
      "posiadane_alternatywki_zapis",
      posiadane_alternatywki
    );
    localStorage.setItem("ilosc_na_klikniecie_zapis", ilosc_na_klikniecie);
    document.getElementById("wtf2").innerHTML =
      "kosztuje " + klik2koszt + " alternatywek";
    localStorage.setItem("klik2_zapis", klik2koszt);
  }
}

function sklep3() {
  if (posiadane_alternatywki >= klik3koszt) {
    posiadane_alternatywki = posiadane_alternatywki - klik3koszt;
    ilosc_na_klikniecie = klik3daje + ilosc_na_klikniecie;
    klik3koszt = Math.floor(klik3koszt * 1.15);
    document.getElementById("posiadane").innerHTML =
      "Posiadane alternatywki:" + "" + posiadane_alternatywki;
    document.getElementById("ilosc").innerHTML =
      "Ilość alternatywek na kliknięcie: " + ilosc_na_klikniecie;
    localStorage.setItem(
      "posiadane_alternatywki_zapis",
      posiadane_alternatywki
    );
    localStorage.setItem("ilosc_na_klikniecie_zapis", ilosc_na_klikniecie);
    document.getElementById("wtf3").innerHTML =
      "kosztuje " + klik3koszt + " alternatywek";
    localStorage.setItem("klik3_zapis", klik3koszt);
  }
}

function sklep4() {
  if (posiadane_alternatywki >= klik4koszt) {
    posiadane_alternatywki = posiadane_alternatywki - klik4koszt;
    ilosc_na_klikniecie = klik4daje + ilosc_na_klikniecie;
    klik4koszt = Math.floor(klik4koszt * 1.15);
    document.getElementById("posiadane").innerHTML =
      "Posiadane alternatywki:" + "" + posiadane_alternatywki;
    document.getElementById("ilosc").innerHTML =
      "Ilość alternatywek na kliknięcie: " + ilosc_na_klikniecie;
    localStorage.setItem(
      "posiadane_alternatywki_zapis",
      posiadane_alternatywki
    );
    localStorage.setItem("ilosc_na_klikniecie_zapis", ilosc_na_klikniecie);
    document.getElementById("wtf4").innerHTML =
      "kosztuje " + klik4koszt + " alternatywek";
    localStorage.setItem("klik4_zapis", klik4koszt);
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
  aha1();
  aha2();
  aha3();
  aha4();
  wyczyscPosiadne();
  wyczyscIlosc();
  wyczyscZapis1();
  wyczyscZapis2();
  wyczyscZapis3();
  wyczyscZapis4();
}

function aha1() {
  klik1koszt = 100;
  localStorage.klik1koszt = klik1koszt;
  document.getElementById("wtf1").innerHTML =
    "Kosztuje " + klik1koszt + " alternatywek";
  localStorage.setItem("klik1_zapis", klik1koszt);
}

function aha2() {
  klik2koszt = 1100;
  localStorage.klik2koszt = klik2koszt;
  document.getElementById("wtf2").innerHTML =
    "Kosztuje " + klik2koszt + " alternatywek";
  localStorage.setItem("klik2_zapis", klik2koszt);
}

function aha3() {
  klik3koszt = 12000;
  localStorage.klik3koszt = klik3koszt;
  document.getElementById("wtf3").innerHTML =
    "Kosztuje " + klik3koszt + " alternatywek";
  localStorage.setItem("klik3_zapis", klik3koszt);
}

function aha4() {
  klik4koszt = 560000;
  localStorage.klik4koszt = klik4koszt;
  document.getElementById("wtf4").innerHTML =
    "Kosztuje " + klik4koszt + " alternatywek";
  localStorage.setItem("klik4_zapis", klik4koszt);
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

function wyczyscZapis1() {
  klik1koszt = parseInt(localStorage.getItem("klik1_zapis"));
}

function wyczyscZapis2() {
  klik2koszt = parseInt(localStorage.getItem("klik2_zapis"));
}

function wyczyscZapis3() {
  klik3koszt = parseInt(localStorage.getItem("klik3_zapis"));
}

function wyczyscZapis4() {
  klik4koszt = parseInt(localStorage.getItem("klik4_zapis"));
}

if (localStorage.key("klik1_zapis") < 100) {
  wyczysc();
} else {
  zapisIlosc();
  zapisPosiadane();
  zapisz2();
  zapisz3();
  zapisz4();
  zapisz1();
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
