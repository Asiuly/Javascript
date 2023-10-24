//criando uma classe, com o construtor falamos qual as propriedades da nossa classe
class Pessoa {
  constructor(primeiroNome, segundoNome, idade) {
    (this.primeiroNome = primeiroNome), (this.segundoNome = segundoNome);
    this.idade = idade;
  }

  getNomeInteiro() {
    console.log(`${this.primeiroNome} ${this.segundoNome}`);
  }

  //função estática: não utiliza nenhuma propriedade da classe entao nao precisa de instancia para ser executada, pode ser utilizada pela propria classe
  static fale() {
    console.log("Hello World!");
  }
}

const pessoa1 = new Pessoa("Luisa", "Tavares", 18);
console.log(pessoa1);

pessoa1.getNomeInteiro();
Pessoa.fale();

//Questão de HERANÇASS

//criando uma classe animal
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`${this.nome} fez um barulho`);
  }
}

const animal1 = new Animal("Simba");
animal1.falar();

//classe cachorro extende a classe Animal, herda seus métodos
class Cachorro extends Animal {
  constructor(nome) {
    super(
      nome
    ); /*aproveita a lógica utilizada para criar o animal, oq o construtor de animal faz para
                                    propriedade nome, ele vai fazer para a classe cachorro*/
  }

  //sobreescrevendo o método falar que existe em animal
  falar() {
    console.log(`${this.nome} latiu!`);
  }
}

const cachorro1 = new Cachorro("Gamora");
cachorro1.falar();
