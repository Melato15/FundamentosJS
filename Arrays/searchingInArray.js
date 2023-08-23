const students = ['Guilherme', 'Filipe', 'Lucas', 'Michael', 'Cristian', 'Gustavo']
const medias = [10, 9, 8, 7.5, 8.5, 9.5]
const studentsAndMedias = [students, medias]

const showNameAndNote = ((student) => {
  if(studentsAndMedias[0].includes(student)){
    // Ao invés de declarar duas variáveis, uma para 'students'  
    // e outra para medias, declaramos uma:
    const [students, medias] = studentsAndMedias;
    
    const index = students.indexOf(student);
    const studentMedia = medias[index];

    console.log(`${student} tem a média igual à ${studentMedia}`);
    
  }else{
    console.log(`${student} não está cadastrado.`);
  }
})

showNameAndNote('Michael');