import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const content = document.querySelector('.content');

function createHeader() { 
    const header = document.createElement('div');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurantName');
    restaurantName.textContent = 'Ahnenerbe';

    const nav = document.createElement('nav');
    const navHome = document.createElement('button'); 
    const navMenu = document.createElement('button'); 
    const navContact = document.createElement('button');
    
    navHome.classList.add('navElement', 'active');
    navMenu.classList.add('navElement');
    navContact.classList.add('navElement');
    navHome.id = 'Home';
    navMenu.id = 'Menu';
    navContact.id = 'Contact';
    navHome.textContent = 'Home';
    navMenu.textContent = 'Menu';
    navContact.textContent = 'Contact';
    navHome.addEventListener('click', e => handleNavClick(e.target));
    navMenu.addEventListener('click', e => handleNavClick(e.target));
    navContact.addEventListener('click', e => handleNavClick(e.target));
    
    nav.appendChild(navHome);
    nav.appendChild(navMenu);
    nav.appendChild(navContact);

    header.appendChild(restaurantName);
    header.appendChild(nav);
    content.appendChild(header);

    const main = document.createElement('main');
    main.classList.add('main');
    content.appendChild(main);
}

function handleNavClick(button) {
    if (button.classList.contains('active'))
        return;
    if (button.id == 'Home')
        loadHome();
    if (button.id == 'Menu')
        loadMenu();
    if (button.id == 'Contact')
        loadContact();
    setActiveButton(button);
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('.navElement');
    buttons.forEach( b => {
        if(b !== button)
            b.classList.remove('active');  
    });
    button.classList.add('active');
}

createHeader();
loadHome();