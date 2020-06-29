export default class Menu {
  // selecionando o botão que controla o menu
  // e a lista do menu
  constructor(botao, menu) {
    this.botao = document.querySelector(botao);
    this.menu = document.querySelector(menu);
    this.html = document.documentElement;
  }

  // quando for clicado no menu
  // será prevenido o padrão
  // e adicionado a classe ativo ou remover,
  // caso já tenha
  clicouMenu(event) {
    event.preventDefault();

    this.menu.classList.toggle("ativo");

    setTimeout(() => {
      this.html.addEventListener("click", this.clicouFora);
    }, 0);
  }

  clicouFora(event) {
    console.log(event.target, this.menu);
    if (event.target !== this.botao && event.target !== this.menu) {
      this.menu.classList.remove("ativo");
      console.log("oi");
      this.html.removeEventListener("click", this.clicouFora);
    }
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
    }

    return this;
  }
}
