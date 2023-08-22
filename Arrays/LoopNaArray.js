const students = ['Guilherme', 'Filipe', 'Lucas', 'Michael', 'Cristian', 'Gustavo']
const medias = [10, 9, 8, 7.5, 8.5, 9.5]
const studentsAndMedias = [students, medias]

const showNameAndNote = ((student) => {
  if(studentsAndMedias[0].includes(student)){
    const index = studentsAndMedias[0].indexOf(student);
    const studentMedia = studentsAndMedias[1][index];

    console.log(`${student} tem a média igual à ${studentMedia}`);
    
  }else{
    console.log(`${student} não está cadastrado.`);
  }
})

showNameAndNote('Michael')

/*

const students = ['Guilherme', 'Filipe', 'Lucas', 'Michael', 'Cristian', 'Gustavo']

const studentExists = ((student) => {
  for (let index = 0; index < students.length; index++) {
    if(students[index] === student){
      console.log(index);
      return true
    }
  }
  return false
})

if(studentExists('Michael')){
  console.log('The student exists in the list');
}else{
  console.log('The student does not exists in the list');
}

*/