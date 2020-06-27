export default class Menu {
  constructor(botao, menu) {
    this.botao = document.querySelector(botao);
    this.menu = document.querySelector(menu);
  }

  clicouMenu(event) {
    event.preventDefault();
    this.menu.classList.toggle("ativo");
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
