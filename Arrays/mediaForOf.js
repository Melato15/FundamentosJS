const notes = [10, 7.5, 10, 7.5];
let notesSum = 0;

for (let note of notes) {
  notesSum += note;
}

const media = notesSum / notes.length;

console.log(`A média das notas é ${media}`);
