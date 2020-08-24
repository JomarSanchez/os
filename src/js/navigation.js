import '../css/navigation.css';

window.addEventListener('scroll', () => {
    const headerDis = document.querySelector('header');
    headerDis.classList.toggle('sticky', window.scrollY > 0);
});
