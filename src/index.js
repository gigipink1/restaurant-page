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

function createHero() {
    const main = document.querySelector('#content');
    const div = document.createElement('div');
    const innerDiv = document.createElement('div');
    const text = document.createElement('p');

    div.classList.add('hero');
    innerDiv.classList.add('words');
    text.classList.add('heading');
    text.textContent = 'This is a nice heading about the place';
    innerDiv.appendChild(text.cloneNode(1));
    text.classList.add('subheading');
    text.classList.remove('heading');
    text.textContent = 'This is some even more nice words about the place'
    innerDiv.appendChild(text.cloneNode(1));
    div.appendChild(innerDiv);
    main.appendChild(div);
   


}

createHeader();
createHero();