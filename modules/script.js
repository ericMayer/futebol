import Menu from "./menu.js";

const menu = new Menu("[data-menu]", "#menu-list");
menu.iniciar();

import Accordion from "./ligaAccordion.js";

const accordion = new Accordion(".liga", ".liga h1", ".liga-descricao");
accordion.iniciar();
