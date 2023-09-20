const clients = require("./workingWithJson/clients.json");

const sort = (list, property) => {
  const result = list.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1;
    } else if (a[property] > b[property]) {
      return 1;
    }
    return 0;
  });
  return result;
};

const sortNames = sort(clients, "nome");

console.log(sortNames);
