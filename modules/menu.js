export default class Menu {
  constructor(botao, menu) {
    this.botao = document.querySelector(botao);
    this.menu = document.querySelector(menu);
  }

  clicouMenu() {
    this.menu.classList.add("ativo");
  }

  bind() {
    this.clicouMenu = this.clicouMenu.bind(this);
  }

  addEvents() {
    this.botao.addEventListener("click", this.clicouMenu);
  }

  iniciar() {
    this.bind();
    this.addEvents();

    return this;
  }
}
