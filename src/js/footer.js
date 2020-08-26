import '../css/footer.css'

const year = document.querySelector("#year");
const anio = new Date().getFullYear();

year.innerHTML = anio;