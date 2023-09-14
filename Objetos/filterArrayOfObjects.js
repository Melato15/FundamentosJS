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

clients.adresses.push({
  street: "John Snow",
  number: 5598,
  apartament: true,
  complement: "ap 565",
});

const onlyApartaments = clients.adresses.filter(
  (address) => address.apartament === true
);

console.log(clients.adresses);
console.log(onlyApartaments);
