export default class Menu {
  // selecionando o botão que controla o menu
  // e a lista do menu
  constructor(botao, menu, frase, cite) {
    this.botao = document.querySelector(botao);
    this.menu = document.querySelector(menu);
    this.frase = document.querySelector(frase);
    this.cite = document.querySelector(cite);

    this.html = document.documentElement;
  }

  // quando for clicado no menu
  // será prevenido o padrão
  // e adicionado a classe ativo ou remover,
  // caso já tenha sido clicado
  // será adicionado o evento
  // de click no html, esse evento
  // será adicionado com o setTimeout, pois
  // assim irá ser adicionado apenas depois da
  // execução de todos os eventos (event bubble)
  clicouMenu(event) {
    event.preventDefault();

    this.menu.classList.toggle("ativo");

    this.html.addEventListener("click", this.clicouFora);

    // setTimeout(() => {
    //   this.html.addEventListener("click", this.clicouFora);
    // }, 0);
  }

  // verifica não foi clicado
  // no botão do menu e
  // na lista do menu, caso não
  // remove a classe ativo do menu
  // e remove o evento do html
  clicouFora(event) {
    if (event.target !== this.botao && event.target !== this.menu) {
      this.menu.classList.remove("ativo");

      this.html.removeEventListener("click", this.clicouFora);
    }
  }

  // animação da frase e da citação
  // para simular uma máquina de escrever
  // é separado a frase em um array, onde cada
  // caracter será uma posição
  // depois é alterado o texto da frase e citação
  // para vazio, depois é feito um foreach na lista
  // de caracteres e adicionado na frase,
  // porém com um intervalo de tempo de 100ms vezes a posição
  // do item na lista, assim será adicionado com um tempo diferente
  // cada letra na tela, dando a impressão que está digitando
  // depois é feito o mesmo processo para a citação
  // é usado um setTimeout em citação toda,
  // pois é calculado o tempo que deve demorar para começar
  // que é 100 * o total da lista de array frase, pois assim
  // só começa depois que terminou de escrever a frase
  escrevendo() {
    const arrayFrase = this.frase.innerText.split("");
    const arrayCite = this.cite.innerText.split("");

    this.frase.innerText = "";
    this.cite.innerText = "";

    let contador = 100 * arrayFrase.length;

    arrayFrase.forEach((caracter, index) => {
      setTimeout(() => {
        this.frase.innerText += caracter;
      }, 100 * index);
    });

    setTimeout(() => {
      arrayCite.forEach((caracter, index) => {
        setTimeout(() => {
          this.cite.innerText += caracter;
        }, 100 * index);
      });
    }, contador);
  }

  // alterando referências dos callbacks
  bind() {
    this.clicouMenu = this.clicouMenu.bind(this);
    this.clicouFora = this.clicouFora.bind(this);
  }

  // adicionando evento de click
  addEvents() {
    this.botao.addEventListener("click", this.clicouMenu);
  }

  // iniciando os métodos de bind e addEvents,
  // retornando referência da classe
  iniciar() {
    this.bind();

    if (this.botao && this.menu) {
      this.addEvents();
      this.escrevendo();
    }

    return this;
  }
}
