import Menu from "./menu.js";

const menu = new Menu(
  "[data-menu]",
  "[data-menu='list']",
  "[data-frases='frase']",
  "[data-frases='cite']"
);
menu.iniciar();

import Accordion from "./ligaAccordion.js";

const accordion = new Accordion(
  "[data-liga]",
  "[data-liga] h1",
  "[data-liga='descricao']"
);
accordion.iniciar();
