function createMenu() {
    const main = document.querySelector('#content');
    const outerDiv = document.createElement('div');
    const div = document.createElement('div');
    const header = document.createElement('h2');
    const listOne = document.createElement('ul');
    const listTwo = document.createElement('ul');
    const listItem = document.createElement('li');

    outerDiv.classList.add('menu-page');
    header.classList.add('food-header');
    header.textContent = 'Food';
    outerDiv.appendChild(header.cloneNode(1));
    div.classList.add('food-section');
    listOne.classList.add('food-list');
    listItem.textContent = 'Carrot Cake';
    listOne.appendChild(listItem.cloneNode(1));
    listItem.textContent = 'Pancakes with Bacon';
    listOne.appendChild(listItem.cloneNode(1));
    listItem.textContent = 'Ham and Cheese Panini';
    listOne.appendChild(listItem.cloneNode(1));
    listItem.textContent = 'Pasta Salad';
    listOne.appendChild(listItem.cloneNode(1));
    listItem.textContent = 'Muffin';
    listOne.appendChild(listItem.cloneNode(1));
    listItem.textContent = 'Porridge';
    listOne.appendChild(listItem.cloneNode(1));

    div.appendChild(listOne.cloneNode(1));
    outerDiv.appendChild(div.cloneNode(1));
    
    header.classList.remove('food-header');
    header.classList.add('drinks-header');
    header.textContent = 'Drinks';
    outerDiv.appendChild(header.cloneNode(1));
    div.classList.remove('food-section');
    div.classList.add('drinks-section');
    div.removeChild(div.firstChild);
    listTwo.classList.add('drinks-list');
    listItem.textContent = 'Drink 1';
    listTwo.appendChild(listItem.cloneNode(1));
    listItem.textContent = 'Drink 2';
    listTwo.appendChild(listItem.cloneNode(1));
    listItem.textContent = 'Drink 3';
    listTwo.appendChild(listItem.cloneNode(1));
    listItem.textContent = 'Drink 4';
    listTwo.appendChild(listItem.cloneNode(1));
    div.appendChild(listTwo)
    outerDiv.appendChild(div);
    main.appendChild(outerDiv);

}

export {createMenu};
