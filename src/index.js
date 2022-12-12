import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const content = document.querySelector('.content');
const navButtons = ['Home', 'Menu', 'Contact'];

function createHeader() { 
    const header = document.createElement('div');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurantName');
    restaurantName.textContent = 'Ahnenerbe';

    const nav = document.createElement('nav');
    for (let i = 0; i < navButtons.length; i++) {
        const navButton = document.createElement('button');
        navButton.classList.add('navElement');
        navButton.textContent = navButtons[i];
        navButton.id = navButtons[i];
        navButton.addEventListener('click', e => handleNavClick(e.target));
        if (i == 0) {
            navButton.classList.add('active');
        }
        nav.appendChild(navButton);
    }

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