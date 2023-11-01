import './style.css'


function createHeader() {
    const main = document.querySelector('#content');
    const div = document.createElement('div');
    const list = document.createElement('ul');
    const listItem = document.createElement('li')
    const hOne = document.createElement('h1');

    div.classList.add('header');
    hOne.textContent = 'The Paisley Tea Parlor';
    div.appendChild(hOne);
    list.classList.add('tabs');
    div.appendChild(list);
    listItem.classList.add('home');
    listItem.textContent = 'Home';
    list.appendChild(listItem.cloneNode(1));
    listItem.classList.remove('home');
    listItem.classList.add('menu');
    listItem.textContent = 'Menu';
    list.appendChild(listItem.cloneNode(1));
    listItem.classList.remove('menu');
    listItem.classList.add('about');
    listItem.textContent = 'About'
    list.appendChild(listItem.cloneNode(1));
    main.appendChild(div);

}

createHeader();