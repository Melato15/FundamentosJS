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

console.log(clients.adresses);

clients.adresses.push({
  street: "John Snow",
  number: 5598,
  apartament: true,
  complement: "ap 565",
});

console.log(clients.adresses);
