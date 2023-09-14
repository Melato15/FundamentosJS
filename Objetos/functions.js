const clients = {
  name: "Joao",
  age: 30,
  email: "joao@firma.com",
  phone: [5555555555, 5155515151],
  saldo: 200,
  makePayment: function (value) {
    if (value > this.saldo) {
      return `Saldo insuficiente. Seu saldo: ${this.saldo}`;
    } else {
      this.saldo -= value;
      return `Compra efetuada. Seu saldo: ${this.saldo}`;
    }
  },
};

console.log(clients.makePayment(null));
