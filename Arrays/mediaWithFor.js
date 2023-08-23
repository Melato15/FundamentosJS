const notes = [10, 7.5, 10, 7.5];
let notesSum = 0

for(let i = 0; i < notes.length; i++){
  notesSum += notes[i]; // Mesma coisa que 'notesSum = notesSum + notes[i]' e o valor da soma é sempre guardado.
}

const media = notesSum / notes.length
console.log(`A média das notas é ${media}`);