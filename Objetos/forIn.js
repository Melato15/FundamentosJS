const clients = {
  name: "Joao",
  age: 30,
  email: "joao@firma.com",
  phone: [5555555555, 5155515151],
  makePayment: function (value) {
    if (value > this.saldo) {
      return `Saldo insuficiente. Seu saldo: ${this.saldo}`;
    } else {
      this.saldo -= value;
      return `Compra efetuada. Seu saldo: ${this.saldo}`;
    }
  },
};

clients.adresses = [
  {
    street: "R. José Oswald",
    number: 3556,
    apartament: false,
    complement: null,
  },
];

for (let key in clients) {
  let type = typeof clients[key];
  if (type !== "object" && type !== "function") {
    console.log(`A chave ${key} tem o valor ${clients[key]}`);
  }
}
