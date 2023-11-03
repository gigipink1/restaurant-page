function createAboutBody() {
     const main = document.querySelector('#content');
     const div = document.createElement('div');
     div.classList.add('about-body');
     main.appendChild(div);

}

function createContact(){
    const body = document.querySelector('.about-body');
    const div = document.createElement('div');
    const header = document.createElement('h2');
    const subheader = document.createElement('h4');
    const para = document.createElement('p');
    div.classList.add('contact-details');
    header.textContent = 'Come and Vist!';
    div.appendChild(header);
    subheader.textContent = 'Address';
    div.appendChild(subheader.cloneNode(1));
    para.textContent = '123 Fake Building, Imaginary Town, Fantasy Land, FR43 2GH'
    div.appendChild(para.cloneNode(1));
    subheader.textContent = 'Phone Number';
    div.appendChild(subheader.cloneNode(1));
    para.textContent = '0113 9496 0105';
    div.appendChild(para.cloneNode(1));
    body.appendChild(div);
    
}

function createOpeningHours() {
    const body = document.querySelector('.about-body');
    const div = document.createElement('div');
    const para = document.createElement('p');
    const header = document.createElement('h2');
    
    div.classList.add('opening-hours');
    header.textContent = 'Opening Hours';
    div.appendChild(header);
    para.textContent = 'Tuesday to Saturday'
    div.appendChild(para.cloneNode(1));
    para.textContent = '7am to 6pm';
    div.appendChild(para.cloneNode(1));
    para.textContent = 'Sunday';
    div.appendChild(para.cloneNode(1));
    para.textContent = '10am - 4pm';
    div.appendChild(para.cloneNode(1));
    para.textContent = 'Monday';
    div.appendChild(para.cloneNode(1));
    para.textContent = 'Closed';
    div.appendChild(para.cloneNode(1));
    body.appendChild(div);

}

export {createAboutBody, createContact, createOpeningHours};