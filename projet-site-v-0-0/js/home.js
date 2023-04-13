import {navBar, section, title, footer} from './layout.js';

let container = document.getElementById('container');
navBar(container);
section(container);
let titleHome = "Home page";
let sectionPage = document.getElementById('section');
title(titleHome, sectionPage);
footer(container);
