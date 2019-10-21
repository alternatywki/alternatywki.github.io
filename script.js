let ilosc_na_klikniecie = 1;
let posiadane_alternatywki = 0;

function farma() {
  posiadane_alternatywki = posiadane_alternatywki + ilosc_na_klikniecie;
  document.getElementById("posiadane").innerHTML =
    "Posiadane alternatywki: " + posiadane_alternatywki;
}

function sklep1() {
  if (posiadane_alternatywki >= 100) {
    posiadane_alternatywki = posiadane_alternatywki - 100;
    ilosc_na_klikniecie = 1 + ilosc_na_klikniecie;
    document.getElementById("posiadane").innerHTML =
      "Posiadane alternatywki:" + "" + posiadane_alternatywki;
    document.getElementById("ilosc").innerHTML =
      "Ilość alternatywek na kliknięcie: " + ilosc_na_klikniecie;
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
  }
}
