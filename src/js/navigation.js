import '../css/navigation.css';

window.addEventListener('scroll', () => {
    const headerDis = document.querySelector('header');
    headerDis.classList.toggle('sticky', window.scrollY > 0);
});

const menu      = document.querySelector('.menuToggle');
const listmenu  = document.querySelector('.listMenu');
menu.addEventListener('click',() =>{
    menu.classList.toggle('active');
    listmenu.classList.toggle('active');
})
