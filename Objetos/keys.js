const clients = {
  name: "Joao",
  age: 30,
  email: "joao@firma.com",
  phone: [5555555555, 5155515151],
};

clients.adresses = [
  {
    street: "R. José Oswald",
    number: 3556,
    apartament: false,
    complement: null,
  },
];

const objectKeys = Object.keys(clients);

console.log(objectKeys);

if (!objectKeys.includes("adresses")) {
  console.error("Erro. É necessário ter um endereço cadastrado. ");
}
