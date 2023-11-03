function createMenuLayout() {
    const main = document.querySelector('#content');
    const outerDiv = document.createElement('div');
    const div = document.createElement('div');
    const header = document.createElement('h2');
    
    outerDiv.classList.add('menu-page');
    header.classList.add('food-header');
    header.textContent = 'Food';
    outerDiv.appendChild(header.cloneNode(1));
    div.classList.add('food-section');
    
    outerDiv.appendChild(div.cloneNode(1));
    
    header.classList.remove('food-header');
    header.classList.add('drinks-header');
    header.textContent = 'Drinks';
    outerDiv.appendChild(header.cloneNode(1));
    div.classList.remove('food-section');
    div.classList.add('drinks-section');
   
   
    outerDiv.appendChild(div);
    main.appendChild(outerDiv);

}

export {createMenuLayout};
