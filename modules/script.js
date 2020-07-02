import Menu from "./menu.js";

const menu = new Menu(
  "[data-menu]",
  "[data-menu='list']",
  "[data-frases='frase']",
  "[data-frases='cite']"
);
menu.iniciar();

import Accordion from "./ligaAccordion.js";

const accordion = new Accordion(".liga", ".liga h1", ".liga-descricao");
accordion.iniciar();
