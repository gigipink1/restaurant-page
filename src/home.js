import tasty from './tasty.jpg';
import cozy from './cozy.jpg';
import friendly from './friendly.jpg';


const main = document.querySelector('#content');


function createHero() {
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
    text.textContent = 'This is some even more nice words about the place.'
    innerDiv.appendChild(text.cloneNode(1));
    div.appendChild(innerDiv);
    main.appendChild(div);
}

function createInfo() {
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('info');
    const innerDiv = document.createElement('div');
    const img = document.createElement('img');
    const header = document.createElement('h3');
    const para = document.createElement('p');

    innerDiv.classList.add('box-one');
    header.classList.add('box-header');
    header.textContent = 'Friendly';
    innerDiv.appendChild(header.cloneNode(1));
    img.src = friendly;
    innerDiv.appendChild(img);
    para.classList.add('box-words');
    para.textContent = 'Some words about how this is a friendly and wonderful place to eat and drink';
    innerDiv.appendChild(para.cloneNode(1));
    outerDiv.appendChild(innerDiv.cloneNode(1));
    innerDiv.classList.add('box-two');
    innerDiv.classList.remove('box-one');
    header.textContent = 'Cozy';
    innerDiv.appendChild(header);
    img.src = cozy;
    innerDiv.appendChild(img);
    innerDiv.appendChild(para);
    para.textContent = 'Some words about how this is a small and cozy establishment';
    innerDiv.removeChild(innerDiv.firstChild);
    innerDiv.removeChild(innerDiv.firstChild);
    outerDiv.appendChild(innerDiv.cloneNode(1));
    innerDiv.classList.add('box-three');
    innerDiv.classList.remove('box-two');
    header.textContent = 'Tasty';
    innerDiv.appendChild(header);
    img.src = tasty;
    innerDiv.appendChild(img);
    innerDiv.appendChild(para);
    para.textContent = 'Some words about how tasty the food and drinks are';
    outerDiv.appendChild(innerDiv.cloneNode(1));
    main.appendChild(outerDiv);



}

export { createHero, createInfo };