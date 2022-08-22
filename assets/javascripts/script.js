const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler');

// Open Mobile Menu
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// Close Mobile Menu
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// Apply Dark Theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

