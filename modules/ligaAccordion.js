export default class Accordion {
  constructor(ligas, arrow, descricao) {
    this.ligas = document.querySelectorAll(ligas);
    this.arrow = document.querySelectorAll(arrow);
    this.descricao = document.querySelectorAll(descricao);
  }

  ativo(index) {
    this.ligas[index].classList.toggle("ativo");
    this.descricao[index].classList.toggle("ativo");
  }

  bind() {
    this.ativo = this.ativo.bind(this);
  }

  addEvents() {
    this.arrow.forEach((item, index) => {
      item.addEventListener("click", () => {
        this.ativo(index);
      });
    });
  }

  iniciar() {
    if (this.ligas.length && this.descricao.length && this.arrow.length) {
      this.bind();
      this.addEvents();
      this.ativo(0);
    }

    return this;
  }
}
