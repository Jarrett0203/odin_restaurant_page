function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    p1.textContent = 'LANCER GA SHINDA!';
    p2.textContent = 'KONO HITO DA NASHI!';

    const img = document.createElement('img');
    img.classList.add('homeImage');
    img.src = 'images/home.jpg';

    const ending = document.createElement('p');
    ending.classList.add('ending');
    ending.textContent = `"Some things are beautiful for the very reason that they're unobtainbale." -AUO`;

    home.appendChild(p1);
    home.appendChild(p2);
    home.appendChild(img);
    home.appendChild(ending);

    return home;
}

function loadHome() {
    const main = document.querySelector('.main');
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;