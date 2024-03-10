class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    exibirResultado(`<p>Meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.</p>`);
  }

  trabalhar() {
    exibirResultado(`<p>Estou trabalhando como ${this.cargo}.</p>`);
  }
}
class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    exibirResultado(`<p>Estou gerenciando o departamento ${this.departamento}.</p>`);
  }
}
class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    exibirResultado(`<p>Estou programando em ${this.linguagem}.</p>`);
  }
}

function exibirResultado(texto) {
  document.getElementById("resultado").innerHTML += texto;
}

