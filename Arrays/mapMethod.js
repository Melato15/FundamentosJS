const notes = [10, 9.5, 7, 6];

const newNotes = notes.map((nota) => {
  if (nota > 9) {
    return 10;
  } else {
    return nota + 1;
  }
});

console.log(newNotes);

const names = ["guilherme", "GaBriEla", "Eduardo"];

const newNames = names.map((nome) => nome.toLocaleUpperCase());

console.log(newNames);
