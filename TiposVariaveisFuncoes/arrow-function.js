// // Função Clássica
function multiplyOrDivide(x, y) {
  
}

// Arrow Function
const apresentArrow = nome => `Meu nome é ${nome}`
const calc = ((x, y) => x > y ? 'x / y = ' + x / y : 'x * y = ' + x * y);

console.log(`Olá, ${apresentArrow('Melato')}, e a conta que eu fiz foi ${calc(8, 2)}`);