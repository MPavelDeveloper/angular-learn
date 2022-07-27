import {createElem} from "./utils.js";

import "../style/style.scss"

const elem = createElem('div', 'header__title');
elem.textContent = 'File JS';
const header = document.querySelector('header');
header.append(elem);
