const clients = require("./workingWithJson/clients.json");

const apartamentWithNoComplement = (clients) => {
  return clients.filter((client) => {
    return (
      client.endereco.apartamento === true &&
      !client.endereco.hasOwnProperty("complemento")
    );
  });
};

const filtered = apartamentWithNoComplement(clients);

console.log(filtered);
