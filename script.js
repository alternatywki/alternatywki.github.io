setInterval(function() {
  posiadane += naSekunde;
  document.getElementById("posiadaneSklep").innerHTML =
    "Posiadane Alternatywki: " + posiadane;
  document.getElementById("posiadane").innerHTML =
    "Posiadane Alternatywki: " + posiadane;
  localStorage.setItem("posiadane_zapis", posiadane);
}, 1000);

function jd() {
  document.getElementById("sklep").style.opacity = 1;
  document.getElementById("container").style.zIndex = -1;
  document.getElementById("containerSklep").style.zIndex = -1;
  document.getElementById("sklep").style.transition = "1s";
  document.getElementById("container").style.transition = "1s";
}

function jd2() {
  document.getElementById("sklep").style.opacity = 0;
  document.getElementById("container").style.zIndex = 1;
  document.getElementById("containerSklep").style.zIndex = 1;
}
//ogolem
var posiadane = 0;
var naKlik = 1;
var naSekunde = 0;

function klikanie() {
  posiadane = posiadane + naKlik;
  document.getElementById("posiadaneSklep").innerHTML =
    "Posiadane Alternatywki: " + posiadane;
  document.getElementById("posiadane").innerHTML =
    "Posiadane Alternatywki: " + posiadane;
  localStorage.setItem("posiadane_zapis", posiadane);
}

if (localStorage.getItem("naSekunde_zapis") === null) {
  naSekunde = 0;
  localStorage.naSekunde = naSekunde;
  document.getElementById("naSekunde").innerHTML =
    "Alternatywki Na Sekunde: " + naSekunde;
  localStorage.setItem("naSekunde_zapis", naSekunde);
} else {
  naSekunde = parseInt(localStorage.getItem("naSekunde_zapis"));
  document.getElementById("naSekunde").innerHTML =
    "Alternatywki Na Sekunde: " + naSekunde;
  localStorage.setItem("naSekunde_zapis", naSekunde);
}

if (localStorage.getItem("posiadane_zapis") === null) {
  posiadane = 0;
  localStorage.posiadane = posiadane;
  document.getElementById("posiadaneSklep").innerHTML =
    "Posiadane Alternatywki: " + posiadane;
  document.getElementById("posiadane").innerHTML =
    "Posiadane Alternatywki: " + posiadane;
  localStorage.setItem("posiadane_zapis", posiadane);
} else {
  posiadane = parseInt(localStorage.getItem("posiadane_zapis"));
  document.getElementById("posiadaneSklep").innerHTML =
    "Posiadane Alternatywki: " + posiadane;
  document.getElementById("posiadane").innerHTML =
    "Posiadane Alternatywki: " + posiadane;
  localStorage.setItem("posiadane_zapis", posiadane);
}

if (localStorage.getItem("naKlik_zapis") === null) {
  naKlik = 1;
  localStorage.naKlik = naKlik;
  document.getElementById("naKlikniecie").innerHTML =
    "Alternatywki Na Klikniecie: " + naKlik;
  localStorage.setItem("naKlik_zapis", naKlik);
} else {
  naKlik = parseInt(localStorage.getItem("naKlik_zapis"));
  document.getElementById("naKlikniecie").innerHTML =
    "Alternatywki Na Klikniecie: " + naKlik;
  localStorage.setItem("naKlik_zapis", naKlik);
}

//
//tier1
var koszt1 = 50;
var kupionych1 = 0;
var sklep1Klik = 1;

function sklep1() {
  if (koszt1 <= posiadane) {
    posiadane -= koszt1;
    naKlik += sklep1Klik;
    kupionych1++;
    document.getElementById("naKlikniecie").innerHTML =
      "Alternatywki Na Klikniecie: " + naKlik;
    document.getElementById("posiadaneSklep").innerHTML =
      "Posiadane Alternatywki: " + posiadane;
    document.getElementById("posiadane").innerHTML =
      "Posiadane Alternatywki: " + posiadane;
    koszt1 = Math.floor(koszt1 * 1.1);
    document.getElementById("napisKosztuje1").innerHTML =
      "Kosztuje " + koszt1 + " alternatywek";
    document.getElementById("napisKupione1").innerHTML =
      "Kupionych: " + kupionych1;
    localStorage.setItem("koszt1_zapis", koszt1);
    localStorage.setItem("kupionych1_zapis", kupionych1);
    localStorage.setItem("posiadane_zapis", posiadane);
    localStorage.setItem("naKlik_zapis", naKlik);
  }
}

if (localStorage.getItem("koszt1_zapis") === null) {
  koszt1 = 50;
  localStorage.koszt1 = koszt1;
  document.getElementById("napisKosztuje1").innerHTML =
    "Kosztuje " + koszt1 + " alternatywek";
  localStorage.setItem("koszt1_zapis", koszt1);
} else {
  koszt1 = parseInt(localStorage.getItem("koszt1_zapis"));
  document.getElementById("napisKosztuje1").innerHTML =
    "Kosztuje " + koszt1 + " alternatywek";
  localStorage.setItem("koszt1_zapis", koszt1);
}

if (localStorage.getItem("kupionych1_zapis") === null) {
  kupionych1 = 0;
  localStorage.kupionych1 = kupionych1;
  document.getElementById("napisKupione1").innerHTML =
    "Kupionych: " + kupionych1;
  localStorage.setItem("kupionych1_zapis", kupionych1);
} else {
  kupionych1 = parseInt(localStorage.getItem("kupionych1_zapis"));
  document.getElementById("napisKupione1").innerHTML =
    "Kupionych: " + kupionych1;
  localStorage.setItem("kupionych1_zapis", kupionych1);
}
//

//tier 2
var koszt2 = 300;
var kupionych2 = 0;
var sklep2Klik = 1;
var sklep2Sekunda = 2;

function sklep2() {
  if (koszt2 <= posiadane) {
    naKlik += sklep2Klik;
    naSekunde += sklep2Sekunda;
    posiadane -= koszt2;
    kupionych2++;
    koszt2 = Math.floor(koszt2 * 1.1);
    localStorage.setItem("koszt2_zapis", koszt2);
    localStorage.setItem("kupionych2_zapis", kupionych2);
    localStorage.setItem("posiadane_zapis", posiadane);
    localStorage.setItem("naKlik_zapis", naKlik);
    localStorage.setItem("naSekunde_zapis", naSekunde);
    document.getElementById("naKlikniecie").innerHTML =
      "Alternatywki Na Klikniecie: " + naKlik;
    document.getElementById("posiadaneSklep").innerHTML =
      "Posiadane Alternatywki: " + posiadane;
    document.getElementById("posiadane").innerHTML =
      "Posiadane Alternatywki: " + posiadane;
    document.getElementById("napisKosztuje2").innerHTML =
      "Kosztuje " + koszt2 + " alternatywek";
    document.getElementById("napisKupione2").innerHTML =
      "Kupionych: " + kupionych2;
    document.getElementById("naSekunde").innerHTML =
      "Alternatywki Na Sekunde: " + naSekunde;
  }
}

if (localStorage.getItem("koszt2_zapis") === null) {
  koszt2 = 300;
  localStorage.koszt2 = koszt2;
  document.getElementById("napisKosztuje2").innerHTML =
    "Kosztuje " + koszt2 + " alternatywek";
  localStorage.setItem("koszt2_zapis", koszt2);
} else {
  koszt2 = parseInt(localStorage.getItem("koszt2_zapis"));
  document.getElementById("napisKosztuje2").innerHTML =
    "Kosztuje " + koszt2 + " alternatywek";
  localStorage.setItem("koszt2_zapis", koszt2);
}

if (localStorage.getItem("kupionych2_zapis") === null) {
  kupionych2 = 0;
  localStorage.kupionych2 = kupionych2;
  document.getElementById("napisKupione2").innerHTML =
    "Kupionych: " + kupionych2;
  localStorage.setItem("kupionych2_zapis", kupionych2);
} else {
  kupionych2 = parseInt(localStorage.getItem("kupionych2_zapis"));
  document.getElementById("napisKupione2").innerHTML =
    "Kupionych: " + kupionych2;
  localStorage.setItem("kupionych2_zapis", kupionych2);
}
//

//tier 3
var koszt3 = 600;
var kupionych3 = 0;
var sklep3Klik = 2;
var sklep3Sekunda = 3;

function sklep3() {
  if (koszt3 <= posiadane) {
    naKlik += sklep3Klik;
    naSekunde += sklep3Sekunda;
    posiadane -= koszt3;
    kupionych3++;
    koszt3 = Math.floor(koszt3 * 1.1);
    localStorage.setItem("koszt3_zapis", koszt3);
    localStorage.setItem("kupionych3_zapis", kupionych3);
    localStorage.setItem("posiadane_zapis", posiadane);
    localStorage.setItem("naKlik_zapis", naKlik);
    localStorage.setItem("naSekunde_zapis", naSekunde);
    document.getElementById("naKlikniecie").innerHTML =
      "Alternatywki Na Klikniecie: " + naKlik;
    document.getElementById("posiadaneSklep").innerHTML =
      "Posiadane Alternatywki: " + posiadane;
    document.getElementById("posiadane").innerHTML =
      "Posiadane Alternatywki: " + posiadane;
    document.getElementById("napisKosztuje3").innerHTML =
      "Kosztuje " + koszt3 + " alternatywek";
    document.getElementById("napisKupione3").innerHTML =
      "Kupionych: " + kupionych3;
    document.getElementById("naSekunde").innerHTML =
      "Alternatywki Na Sekunde: " + naSekunde;
  }
}

if (localStorage.getItem("koszt3_zapis") === null) {
  koszt3 = 600;
  localStorage.koszt3 = koszt3;
  document.getElementById("napisKosztuje3").innerHTML =
    "Kosztuje " + koszt3 + " alternatywek";
  localStorage.setItem("koszt3_zapis", koszt3);
} else {
  koszt3 = parseInt(localStorage.getItem("koszt3_zapis"));
  document.getElementById("napisKosztuje3").innerHTML =
    "Kosztuje " + koszt3 + " alternatywek";
  localStorage.setItem("koszt3_zapis", koszt3);
}

if (localStorage.getItem("kupionych3_zapis") === null) {
  kupionych3 = 0;
  localStorage.kupionych3 = kupionych3;
  document.getElementById("napisKupione3").innerHTML =
    "Kupionych: " + kupionych3;
  localStorage.setItem("kupionych3_zapis", kupionych3);
} else {
  kupionych3 = parseInt(localStorage.getItem("kupionych3_zapis"));
  document.getElementById("napisKupione3").innerHTML =
    "Kupionych: " + kupionych3;
  localStorage.setItem("kupionych3_zapis", kupionych3);
}
//

//tier 4
var koszt4 = 2000;
var kupionych4 = 0;
var sklep4Klik = 3;
var sklep4Sekunda = 5;

function sklep4() {
  if (koszt4 <= posiadane) {
    naKlik += sklep4Klik;
    naSekunde += sklep4Sekunda;
    posiadane -= koszt4;
    kupionych4++;
    koszt4 = Math.floor(koszt4 * 1.1);
    localStorage.setItem("koszt4_zapis", koszt4);
    localStorage.setItem("kupionych4_zapis", kupionych4);
    localStorage.setItem("posiadane_zapis", posiadane);
    localStorage.setItem("naKlik_zapis", naKlik);
    localStorage.setItem("naSekunde_zapis", naSekunde);
    document.getElementById("naKlikniecie").innerHTML =
      "Alternatywki Na Klikniecie: " + naKlik;
    document.getElementById("posiadaneSklep").innerHTML =
      "Posiadane Alternatywki: " + posiadane;
    document.getElementById("posiadane").innerHTML =
      "Posiadane Alternatywki: " + posiadane;
    document.getElementById("napisKosztuje4").innerHTML =
      "Kosztuje " + koszt4 + " alternatywek";
    document.getElementById("napisKupione4").innerHTML =
      "Kupionych: " + kupionych4;
    document.getElementById("naSekunde").innerHTML =
      "Alternatywki Na Sekunde: " + naSekunde;
  }
}

if (localStorage.getItem("koszt4_zapis") === null) {
  koszt4 = 2000;
  localStorage.koszt4 = koszt4;
  document.getElementById("napisKosztuje4").innerHTML =
    "Kosztuje " + koszt4 + " alternatywek";
  localStorage.setItem("koszt4_zapis", koszt4);
} else {
  koszt4 = parseInt(localStorage.getItem("koszt4_zapis"));
  document.getElementById("napisKosztuje4").innerHTML =
    "Kosztuje " + koszt4 + " alternatywek";
  localStorage.setItem("koszt4_zapis", koszt4);
}

if (localStorage.getItem("kupionych4_zapis") === null) {
  kupionych4 = 0;
  localStorage.kupionych4 = kupionych4;
  document.getElementById("napisKupione4").innerHTML =
    "Kupionych: " + kupionych4;
  localStorage.setItem("kupionych4_zapis", kupionych4);
} else {
  kupionych4 = parseInt(localStorage.getItem("kupionych4_zapis"));
  document.getElementById("napisKupione4").innerHTML =
    "Kupionych: " + kupionych4;
  localStorage.setItem("kupionych4_zapis", kupionych4);
}
//

//tier 5
var koszt5 = 4000;
var kupionych5 = 0;
var sklep5Klik = 4;
var sklep5Sekunda = 7;

function sklep5() {
  if (koszt5 <= posiadane) {
    naKlik += sklep5Klik;
    naSekunde += sklep5Sekunda;
    posiadane -= koszt5;
    kupionych5++;
    koszt5 = Math.floor(koszt5 * 1.1);
    localStorage.setItem("koszt5_zapis", koszt5);
    localStorage.setItem("kupionych5_zapis", kupionych5);
    localStorage.setItem("posiadane_zapis", posiadane);
    localStorage.setItem("naKlik_zapis", naKlik);
    localStorage.setItem("naSekunde_zapis", naSekunde);
    document.getElementById("naKlikniecie").innerHTML =
      "Alternatywki Na Klikniecie: " + naKlik;
    document.getElementById("posiadaneSklep").innerHTML =
      "Posiadane Alternatywki: " + posiadane;
    document.getElementById("posiadane").innerHTML =
      "Posiadane Alternatywki: " + posiadane;
    document.getElementById("napisKosztuje5").innerHTML =
      "Kosztuje " + koszt5 + " alternatywek";
    document.getElementById("napisKupione5").innerHTML =
      "Kupionych: " + kupionych5;
    document.getElementById("naSekunde").innerHTML =
      "Alternatywki Na Sekunde: " + naSekunde;
  }
}

if (localStorage.getItem("koszt5_zapis") === null) {
  koszt5 = 4000;
  localStorage.koszt5 = koszt5;
  document.getElementById("napisKosztuje5").innerHTML =
    "Kosztuje " + koszt5 + " alternatywek";
  localStorage.setItem("koszt5_zapis", koszt5);
} else {
  koszt5 = parseInt(localStorage.getItem("koszt5_zapis"));
  document.getElementById("napisKosztuje5").innerHTML =
    "Kosztuje " + koszt5 + " alternatywek";
  localStorage.setItem("koszt5_zapis", koszt5);
}

if (localStorage.getItem("kupionych5_zapis") === null) {
  kupionych5 = 0;
  localStorage.kupionych5 = kupionych5;
  document.getElementById("napisKupione5").innerHTML =
    "Kupionych: " + kupionych5;
  localStorage.setItem("kupionych5_zapis", kupionych5);
} else {
  kupionych5 = parseInt(localStorage.getItem("kupionych5_zapis"));
  document.getElementById("napisKupione5").innerHTML =
    "Kupionych: " + kupionych5;
  localStorage.setItem("kupionych5_zapis", kupionych5);
}
//

//tier 6
var koszt6 = 7500;
var kupionych6 = 0;
var sklep6Klik = 5;
var sklep6Sekunda = 10;

function sklep6() {
  if (koszt6 <= posiadane) {
    naKlik += sklep6Klik;
    naSekunde += sklep6Sekunda;
    posiadane -= koszt6;
    kupionych6++;
    koszt6 = Math.floor(koszt6 * 1.1);
    localStorage.setItem("koszt6_zapis", koszt6);
    localStorage.setItem("kupionych6_zapis", kupionych6);
    localStorage.setItem("posiadane_zapis", posiadane);
    localStorage.setItem("naKlik_zapis", naKlik);
    localStorage.setItem("naSekunde_zapis", naSekunde);
    document.getElementById("naKlikniecie").innerHTML =
      "Alternatywki Na Klikniecie: " + naKlik;
    document.getElementById("posiadaneSklep").innerHTML =
      "Posiadane Alternatywki: " + posiadane;
    document.getElementById("posiadane").innerHTML =
      "Posiadane Alternatywki: " + posiadane;
    document.getElementById("napisKosztuje6").innerHTML =
      "Kosztuje " + koszt6 + " alternatywek";
    document.getElementById("napisKupione6").innerHTML =
      "Kupionych: " + kupionych6;
    document.getElementById("naSekunde").innerHTML =
      "Alternatywki Na Sekunde: " + naSekunde;
  }
}

if (localStorage.getItem("koszt6_zapis") === null) {
  koszt6 = 7500;
  localStorage.koszt6 = koszt6;
  document.getElementById("napisKosztuje6").innerHTML =
    "Kosztuje " + koszt6 + " alternatywek";
  localStorage.setItem("koszt6_zapis", koszt6);
} else {
  koszt6 = parseInt(localStorage.getItem("koszt6_zapis"));
  document.getElementById("napisKosztuje6").innerHTML =
    "Kosztuje " + koszt6 + " alternatywek";
  localStorage.setItem("koszt6_zapis", koszt6);
}

if (localStorage.getItem("kupionych6_zapis") === null) {
  kupionych6 = 0;
  localStorage.kupionych6 = kupionych6;
  document.getElementById("napisKupione6").innerHTML =
    "Kupionych: " + kupionych6;
  localStorage.setItem("kupionych6_zapis", kupionych6);
} else {
  kupionych6 = parseInt(localStorage.getItem("kupionych6_zapis"));
  document.getElementById("napisKupione6").innerHTML =
    "Kupionych: " + kupionych6;
  localStorage.setItem("kupionych6_zapis", kupionych6);
}
//

//tier 7
var koszt7 = 10000;
var kupionych7 = 0;
var sklep7Klik = 7;
var sklep7Sekunda = 12;

function sklep7() {
  if (koszt7 <= posiadane) {
    naKlik += sklep7Klik;
    naSekunde += sklep7Sekunda;
    posiadane -= koszt7;
    kupionych7++;
    koszt7 = Math.floor(koszt7 * 1.1);
    localStorage.setItem("koszt7_zapis", koszt7);
    localStorage.setItem("kupionych7_zapis", kupionych7);
    localStorage.setItem("posiadane_zapis", posiadane);
    localStorage.setItem("naKlik_zapis", naKlik);
    localStorage.setItem("naSekunde_zapis", naSekunde);
    document.getElementById("naKlikniecie").innerHTML =
      "Alternatywki Na Klikniecie: " + naKlik;
    document.getElementById("posiadaneSklep").innerHTML =
      "Posiadane Alternatywki: " + posiadane;
    document.getElementById("posiadane").innerHTML =
      "Posiadane Alternatywki: " + posiadane;
    document.getElementById("napisKosztuje7").innerHTML =
      "Kosztuje " + koszt7 + " alternatywek";
    document.getElementById("napisKupione7").innerHTML =
      "Kupionych: " + kupionych7;
    document.getElementById("naSekunde").innerHTML =
      "Alternatywki Na Sekunde: " + naSekunde;
  }
}

if (localStorage.getItem("koszt7_zapis") === null) {
  koszt7 = 10000;
  localStorage.koszt7 = koszt7;
  document.getElementById("napisKosztuje7").innerHTML =
    "Kosztuje " + koszt7 + " alternatywek";
  localStorage.setItem("koszt7_zapis", koszt7);
} else {
  koszt7 = parseInt(localStorage.getItem("koszt7_zapis"));
  document.getElementById("napisKosztuje7").innerHTML =
    "Kosztuje " + koszt7 + " alternatywek";
  localStorage.setItem("koszt7_zapis", koszt7);
}

if (localStorage.getItem("kupionych7_zapis") === null) {
  kupionych7 = 0;
  localStorage.kupionych7 = kupionych7;
  document.getElementById("napisKupione7").innerHTML =
    "Kupionych: " + kupionych7;
  localStorage.setItem("kupionych7_zapis", kupionych7);
} else {
  kupionych7 = parseInt(localStorage.getItem("kupionych7_zapis"));
  document.getElementById("napisKupione7").innerHTML =
    "Kupionych: " + kupionych7;
  localStorage.setItem("kupionych7_zapis", kupionych7);
}
//

//tier 8
var koszt8 = 20000;
var kupionych8 = 0;
var sklep8Klik = 9;
var sklep8Sekunda = 15;

function sklep8() {
  if (koszt8 <= posiadane) {
    naKlik += sklep8Klik;
    naSekunde += sklep8Sekunda;
    posiadane -= koszt8;
    kupionych8++;
    koszt8 = Math.floor(koszt8 * 1.1);
    localStorage.setItem("koszt8_zapis", koszt8);
    localStorage.setItem("kupionych8_zapis", kupionych8);
    localStorage.setItem("posiadane_zapis", posiadane);
    localStorage.setItem("naKlik_zapis", naKlik);
    localStorage.setItem("naSekunde_zapis", naSekunde);
    document.getElementById("naKlikniecie").innerHTML =
      "Alternatywki Na Klikniecie: " + naKlik;
    document.getElementById("posiadaneSklep").innerHTML =
      "Posiadane Alternatywki: " + posiadane;
    document.getElementById("posiadane").innerHTML =
      "Posiadane Alternatywki: " + posiadane;
    document.getElementById("napisKosztuje8").innerHTML =
      "Kosztuje " + koszt8 + " alternatywek";
    document.getElementById("napisKupione8").innerHTML =
      "Kupionych: " + kupionych8;
    document.getElementById("naSekunde").innerHTML =
      "Alternatywki Na Sekunde: " + naSekunde;
  }
}

if (localStorage.getItem("koszt8_zapis") === null) {
  koszt8 = 20000;
  localStorage.koszt8 = koszt8;
  document.getElementById("napisKosztuje8").innerHTML =
    "Kosztuje " + koszt8 + " alternatywek";
  localStorage.setItem("koszt8_zapis", koszt8);
} else {
  koszt8 = parseInt(localStorage.getItem("koszt8_zapis"));
  document.getElementById("napisKosztuje8").innerHTML =
    "Kosztuje " + koszt8 + " alternatywek";
  localStorage.setItem("koszt8_zapis", koszt8);
}

if (localStorage.getItem("kupionych8_zapis") === null) {
  kupionych8 = 0;
  localStorage.kupionych8 = kupionych8;
  document.getElementById("napisKupione8").innerHTML =
    "Kupionych: " + kupionych8;
  localStorage.setItem("kupionych8_zapis", kupionych8);
} else {
  kupionych8 = parseInt(localStorage.getItem("kupionych8_zapis"));
  document.getElementById("napisKupione8").innerHTML =
    "Kupionych: " + kupionych8;
  localStorage.setItem("kupionych8_zapis", kupionych8);
}
//

//tier 9
var koszt9 = 50000;
var kupionych9 = 0;
var sklep9Klik = 11;
var sklep9Sekunda = 18;

function sklep9() {
  if (koszt9 <= posiadane) {
    naKlik += sklep9Klik;
    naSekunde += sklep9Sekunda;
    posiadane -= koszt9;
    kupionych9++;
    koszt9 = Math.floor(koszt9 * 1.1);
    localStorage.setItem("koszt9_zapis", koszt9);
    localStorage.setItem("kupionych9_zapis", kupionych9);
    localStorage.setItem("posiadane_zapis", posiadane);
    localStorage.setItem("naKlik_zapis", naKlik);
    localStorage.setItem("naSekunde_zapis", naSekunde);
    document.getElementById("naKlikniecie").innerHTML =
      "Alternatywki Na Klikniecie: " + naKlik;
    document.getElementById("posiadaneSklep").innerHTML =
      "Posiadane Alternatywki: " + posiadane;
    document.getElementById("posiadane").innerHTML =
      "Posiadane Alternatywki: " + posiadane;
    document.getElementById("napisKosztuje9").innerHTML =
      "Kosztuje " + koszt9 + " alternatywek";
    document.getElementById("napisKupione9").innerHTML =
      "Kupionych: " + kupionych9;
    document.getElementById("naSekunde").innerHTML =
      "Alternatywki Na Sekunde: " + naSekunde;
  }
}

if (localStorage.getItem("koszt9_zapis") === null) {
  koszt9 = 50000;
  localStorage.koszt9 = koszt9;
  document.getElementById("napisKosztuje9").innerHTML =
    "Kosztuje " + koszt9 + " alternatywek";
  localStorage.setItem("koszt9_zapis", koszt9);
} else {
  koszt9 = parseInt(localStorage.getItem("koszt9_zapis"));
  document.getElementById("napisKosztuje9").innerHTML =
    "Kosztuje " + koszt9 + " alternatywek";
  localStorage.setItem("koszt9_zapis", koszt9);
}

if (localStorage.getItem("kupionych9_zapis") === null) {
  kupionych9 = 0;
  localStorage.kupionych9 = kupionych9;
  document.getElementById("napisKupione9").innerHTML =
    "Kupionych: " + kupionych9;
  localStorage.setItem("kupionych9_zapis", kupionych9);
} else {
  kupionych9 = parseInt(localStorage.getItem("kupionych9_zapis"));
  document.getElementById("napisKupione9").innerHTML =
    "Kupionych: " + kupionych9;
  localStorage.setItem("kupionych9_zapis", kupionych9);
}
//

//tier10
var koszt10 = 200000;
var kupionych10 = 0;
var sklep10Klik = 15;
var sklep10Sekunda = 25;

function sklep10() {
  if (koszt10 <= posiadane) {
    naKlik += sklep10Klik;
    naSekunde += sklep10Sekunda;
    posiadane -= koszt10;
    kupionych10++;
    koszt10 = Math.floor(koszt10 * 1.1);
    localStorage.setItem("koszt10_zapis", koszt10);
    localStorage.setItem("kupionych10_zapis", kupionych10);
    localStorage.setItem("posiadane_zapis", posiadane);
    localStorage.setItem("naKlik_zapis", naKlik);
    localStorage.setItem("naSekunde_zapis", naSekunde);
    document.getElementById("naKlikniecie").innerHTML =
      "Alternatywki Na Klikniecie: " + naKlik;
    document.getElementById("posiadaneSklep").innerHTML =
      "Posiadane Alternatywki: " + posiadane;
    document.getElementById("posiadane").innerHTML =
      "Posiadane Alternatywki: " + posiadane;
    document.getElementById("napisKosztuje10").innerHTML =
      "Kosztuje " + koszt10 + " alternatywek";
    document.getElementById("napisKupione10").innerHTML =
      "Kupionych: " + kupionych10;
    document.getElementById("naSekunde").innerHTML =
      "Alternatywki Na Sekunde: " + naSekunde;
  }
}

if (localStorage.getItem("koszt10_zapis") === null) {
  koszt10 = 200000;
  localStorage.koszt10 = koszt10;
  document.getElementById("napisKosztuje10").innerHTML =
    "Kosztuje " + koszt10 + " alternatywek";
  localStorage.setItem("koszt10_zapis", koszt10);
} else {
  koszt10 = parseInt(localStorage.getItem("koszt10_zapis"));
  document.getElementById("napisKosztuje10").innerHTML =
    "Kosztuje " + koszt10 + " alternatywek";
  localStorage.setItem("koszt10_zapis", koszt10);
}

if (localStorage.getItem("kupionych10_zapis") === null) {
  kupionych10 = 0;
  localStorage.kupionych10 = kupionych10;
  document.getElementById("napisKupione10").innerHTML =
    "Kupionych: " + kupionych10;
  localStorage.setItem("kupionych10_zapis", kupionych10);
} else {
  kupionych10 = parseInt(localStorage.getItem("kupionych10_zapis"));
  document.getElementById("napisKupione10").innerHTML =
    "Kupionych: " + kupionych10;
  localStorage.setItem("kupionych10_zapis", kupionych10);
}
//
