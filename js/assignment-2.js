// Zadanie 2
// Napisz program, który wylosuje liczbę całkowitą pomiędzy 1 a 10. Następnie program pozwoli użytkownikowi wpisać w konsoli swój “strzał”. Jeśli użytkownik zgadnie, to program wyświetli informację “Udało się”, w przeciwnym razie: “Spróbuj ponownie”.


let randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;


let myNumber = window.prompt("Wpisz numer: ");

  if (parseFloat(myNumber) === parseFloat(randomNumber)) {
    alert("Udalo sie!");
  } else {
    alert("Sprobuj jeszcze raz!");
  }





