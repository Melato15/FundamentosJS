const client = {
  name: "Guilherme",
  age: "20",
  cpf: "85874796936",
  email: "guilherme@dominio.com",
};

console.log(`O nome do cliente é ${client["name"]} 
e os 3 primeiros digitos do seu cpf são ${client["cpf"].substring(0, 3)}\n`);

const keys = ["name", "age", "cpf", "email"];

keys.forEach((key) => {
  console.log(`A chave ${key} tem valor ${client[key]}`);
});
