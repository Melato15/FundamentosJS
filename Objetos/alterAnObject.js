const person = {
  name: "Rebecca",
  vocation: "Engineer",
};

console.log(person.vocation);
console.log(person.telefone);

person.telefone = 47988471745;

delete person.vocation;

console.log(person);
