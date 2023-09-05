const jsRoom = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const javaRoom = [6, 5, 8, 9, 5, 6];
const pythonRoom = [7, 3.5, 8, 9.5];

const calculateMedia = (roomNotes) => {
  const notesSum = roomNotes.reduce((acum, note) => {
    return acum + note;
  }, 0);

  const media = notesSum / roomNotes.length;

  return `A media desta sala é igual à ${media}.`;
};

console.log(calculateMedia(pythonRoom));
