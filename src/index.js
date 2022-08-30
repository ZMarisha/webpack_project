import '../layout/style.scss';

import { items } from './items.js';
import { renderItems } from './renderItems.js';


const galaryCards = document.querySelector('#galaryCards');
items.map(el => {galaryCards.appendChild(renderItems(el))});