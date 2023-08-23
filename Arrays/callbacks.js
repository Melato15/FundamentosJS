const { EagerLoadingError } = require("sequelize");

const notes = [10, 7.5, 10, 7.5];
let notesSum = 0;

notes.forEach(function (notes, i) {
  notesSum += notes;
  console.log(i);
});

const media = notesSum / notes.length;

console.log(media);

// Também podemos utilizar assim:

const names = ["Guilherme", "Gabi", "Matteo"];

names.forEach((names) => {
  console.log(names);
});

// E também assim:

const fruits = ["Maçã", "Banana", "Uva"];

function printFruits(fruit) {
  console.log(fruit);
}

fruits.forEach(printFruits);
