const students = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reproved = students.filter((_, i) => {
  return medias[i] < 7;
});

console.log(reproved);
