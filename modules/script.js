import Menu from "./menu.js";

const menu = new Menu("[data-menu]", "#menu-list");
menu.iniciar();

import Accordion from "./ligaAccordion.js";

const accordion = new Accordion(
  "[data-liga]",
  "[data-liga] h1",
  "[data-liga='descricao']"
);
accordion.iniciar();
