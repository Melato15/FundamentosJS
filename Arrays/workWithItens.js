const notes = [10, 6.5, 8, 7.5]
const media = (notes[0] + notes[1] + notes[2] + notes[3]) / notes.length
console.log(media);

// ESTA NÃO É UMA BOA PRÁTICA. Para fazer um calculo assim, utilizando elementos de uma 
// Array, o melhor é iterar por ela utilizando um loop.