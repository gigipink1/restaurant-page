import './style.css'
import {createHeader, createFooter} from './modules/base';
import { createHero, createInfo } from './modules/home';
import {createMenuLayout, addMenuItems} from './modules/menu';
import {createAboutBody, createContact, createOpeningHours} from './modules/about';


createHeader();
createHero();
createInfo();
createFooter();

const content = document.querySelector('#content');
const menu = document.querySelector('.menu');
const home = document.querySelector('.home');
const about =document.querySelector('.about');

menu.addEventListener('click', () => {
    while (content.childNodes.length > 2) {
        content.removeChild(content.lastChild);
    }
    createMenuLayout();
    addMenuItems();
    createFooter();
   
})

home.addEventListener('click', () => {
    while (content.childNodes.length > 2) {
        content.removeChild(content.lastChild);
    }
    createHero();
    createInfo();
    createFooter();
})

about.addEventListener('click', ()=> {
    while (content.childNodes.length > 2) {
        content.removeChild(content.lastChild);
    }
    createAboutBody();
    createContact();
    createOpeningHours();
    createFooter();
})