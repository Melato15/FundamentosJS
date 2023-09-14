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

const callClient = (comercialPhone, residencialPhone) => {
  console.log(`Ligando para ${comercialPhone}`);
  console.log(`Ligando para ${residencialPhone}`);
};

callClient(...clients.phone);

const order = {
  destiny: clients.name,
  ...clients.adresses[0],
};

console.log(order);
