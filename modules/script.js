import Menu from "./menu.js";

const menu = new Menu(
  "[data-menu]",
  "[data-menu='list']",
  "[data-frases='frase']",
  "[data-frases='cite']"
);
menu.iniciar();

import Accordion from "./home/ligaAccordion.js";

const accordion = new Accordion(
  "[data-liga]",
  "[data-liga] h1",
  "[data-liga='descricao']"
);
accordion.iniciar();

import CampeonatoPassado from "./campeonatos/campeonatosPassados.js";

const brasileirao = new CampeonatoPassado(
  "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4351&s=2019",
  '[data-campeonato="times"]',
  '[data-campeonato="dados"]'
);
brasileirao.iniciar();
