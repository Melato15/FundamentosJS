console.time();
function sum(a, b){
  return a + b;
}

// console.log(sum());

// Ordem dos Parametros
function nameAge(name, age){
  return `Meu nome é ${name} e tenho ${age} anos.`;
};

// console.log(nameAge('Guilherme', 20));

function multiply(x, y){
  return x * y;
};

console.log(multiply(sum(2, 6)));

// console.timeEnd();