class Book {
  constructor(name, edictor, pages) {
    this.name = name;
    this.edictor = edictor;
    this.pages = pages;
  }

  anounceTitle() {
    console.log(`Título: ${this.name}`);
  }

  describeTitle() {
    console.log(
      `${this.name} é um livro da editora ${this.edictor} e tem ${this.pages} páginas.`
    );
  }
}

const NodeJS = new Book("Primeiros passos com NodeJS", "Casa do Código", 195);

NodeJS.anounceTitle();
NodeJS.describeTitle();

class BookCollection extends Book {
  constructor(name, collectionName) {
    super(name);
    this.collectionName = collectionName;
  }

  describeCollection() {
    console.log(
      `O livro ${this.name} faz parte da coleção ${this.collectionName}`
    );
  }
}

const LogicaDeProgramacao = new BookCollection(
  "Lógica de Programação",
  "Comece a Programar"
);
LogicaDeProgramacao.describeCollection();
