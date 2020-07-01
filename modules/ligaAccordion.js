export default class Accordion {
  constructor(ligas, arrow, descricao) {
    this.ligas = document.querySelectorAll(ligas);
    this.arrow = document.querySelectorAll(arrow);
    this.descricao = document.querySelectorAll(descricao);
  }

  // adicionando classe ativo ou removendo
  // com isso será alterado a arrow de posição
  // é também será exibido o conteúdo
  ativo(index) {
    this.ligas[index].classList.toggle("ativo");
    this.descricao[index].classList.toggle("ativo");
  }

  // alterando referência do método de callback
  bind() {
    this.ativo = this.ativo.bind(this);
  }

  // adicionando eventos nos itens
  addEvents() {
    this.arrow.forEach((item, index) => {
      item.addEventListener("click", () => {
        this.ativo(index);
      });
    });
  }

  // inicia métodos para funcionamento do código
  // e já coloca como ativo o primeiro item
  iniciar() {
    if (this.ligas.length && this.descricao.length && this.arrow.length) {
      this.bind();
      this.addEvents();
      this.ativo(0);
    }

    return this;
  }
}
