'use strict'
//Задача №1
function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  let arr = [];

  if (d === 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }
  return arr;
}

console.log(solveEquation(1, 2, 2));


// Задача №2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthRate = percent / 100 / 12;
  let creditBody = amount - contribution;
  let monthPay = creditBody * (monthRate + (monthRate / ((1 + monthRate) ** countMonths - 1)));
  let totalPay = monthPay * countMonths;
  return Math.round(totalPay * 100) / 100;
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000, 24));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));