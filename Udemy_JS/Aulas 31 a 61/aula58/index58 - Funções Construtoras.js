// Funções construtoras - retorna objetos
// precisamos iniciar com letras Maiusculas   'new Exemplo'

function Pessoa(nome, sobrenome) {
  //metodos ou atributos privados
  const id = 123456;
  const metodoInterno = () => {};

  //metodos ou atributos publicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(this.nome + " : sou um método.");
  };
}

const p1 = new Pessoa("Luiz", "Otávio");
const p2 = new Pessoa("Maria", "Silva");

p1.metodo();
