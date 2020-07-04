export default class CampeonatoPassado {
  constructor(url, times, dados) {
    this.times = document.querySelector(times);
    this.dados = document.querySelector(dados);
    this.url = url;
  }

  async fetchCampeonato(url) {
    const dados = await (await fetch(url)).json();
    console.log(dados.table);
  }

  iniciar() {
    if (this.dados && this.times && this.url) {
      this.fetchCampeonato(this.url);
    }

    return this;
  }
}
