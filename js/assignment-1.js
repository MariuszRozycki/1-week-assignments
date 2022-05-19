// Zadanie 1 
// Napisz program, który będzie posiadał stałą YEAR z określoną wartością (wybierz dowolną wartość, nie musi być aktualny rok). Program na konsoli powinien wyświetlić informację, czy rok jest przestępny.

// const leap = new Date().getFullYear();
const year = 2036;
let leapYearChecker = year % 4 === 0;


if (leapYearChecker) {
  console.log("Leap year! February has 29 days!");
} else {
  console.log("It's not leap year :(");
}



