export default class Menu {
  // selecionando o botão que controla o menu
  // e a lista do menu
  constructor(botao, menu) {
    this.botao = document.querySelector(botao);
    this.menu = document.querySelector(menu);
  }

  // quando for clicado no menu
  // será prevenido o padrão
  // e adicionado a classe ativo ou remover,
  // caso já tenha
  clicouMenu(event) {
    event.preventDefault();
    this.menu.classList.toggle("ativo");

    setTimeout(document.addEventListener("click", this.clicouFora), 1000);
  }

  clicouFora(event) {
    const array = Array.from(event.path);

    if (
      array.find((item) => {
        return this.botao === item;
      })
    ) {
      this.menu.classList.remove("ativo");
    }

    // if (!event.path.contains(this.botao)) {
    //   this.menu.classList.remove("ativo");
    // }
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
    this.addEvents();

    return this;
  }
}
