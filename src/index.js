import './style.css'
import {createHeader, createFooter} from './modules/base';
import { createHero, createInfo } from './modules/home';
import {createMenuLayout, createFoodItem} from './modules/menu';





createHeader();
createMenuLayout();
createFoodItem('Sandwiches','Lorem ipsum dolor sit amet, consectetur adipiscing elit','£3.50');
createFoodItem('Panini', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', '£5.45');
createFoodItem('Pasta Salad', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', '£5.25');
createFoodItem('Full English', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', '£6.50');
createFoodItem('Afternoon Tea', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', '£9.95')
createFooter();