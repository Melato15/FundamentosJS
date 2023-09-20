const client = require("./workingWithJson/clients.json");

const find = (list, key, value) => {
  return list.find((item) => item[key] === value);
};

const finded = find(client, "nome", "Kirby");

console.log(finded);
