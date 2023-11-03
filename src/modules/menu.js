function createMenuLayout() {
    const main = document.querySelector('#content');
    const outerDiv = document.createElement('div');
    const div = document.createElement('div');
    const header = document.createElement('h2');
    const listOne = document.createElement('ul');
    const listTwo = document.createElement('ul');
    

    outerDiv.classList.add('menu-page');
    header.classList.add('food-header');
    header.textContent = 'Food';
    outerDiv.appendChild(header.cloneNode(1));
    div.classList.add('food-section');
    listOne.classList.add('food-list');
   
    div.appendChild(listOne);
    outerDiv.appendChild(div.cloneNode(1));
    
    header.classList.remove('food-header');
    header.classList.add('drinks-header');
    header.textContent = 'Drinks';
    outerDiv.appendChild(header.cloneNode(1));
    div.classList.remove('food-section');
    div.classList.add('drinks-section');
    div.removeChild(div.firstChild);
    listTwo.classList.add('drinks-list');
    div.appendChild(listTwo)
    outerDiv.appendChild(div);
    main.appendChild(outerDiv);

}

function createFoodItem(name, desc, price) {
    const list = document.querySelector('.food-list');
    const listItem = document.createElement('li');
    const subList = document.createElement('ul');
    listItem.textContent = desc;
    subList.appendChild(listItem.cloneNode(1));
    listItem.textContent = price;
    subList.appendChild(listItem.cloneNode(1));
    listItem.textContent = name;
    listItem.classList.add('food-item')
    listItem.appendChild(subList);
    list.appendChild(listItem.cloneNode(1));


}

export {createMenuLayout, createFoodItem};
