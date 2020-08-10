const fab = document.getElementById('floating-action-button'),
    menu = document.getElementById('menu')


fab.addEventListener('click', () => menu.classList.toggle('active'))