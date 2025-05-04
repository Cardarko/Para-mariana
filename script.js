
const frases = [
    "Estoy orgulloso de ti, mi mar",
    "Te amo con todas mis almas",
    "Milochomil besos y abrazos",
    "Tú puedes con todo, confía en ti",
    "Eres el amor de mi vida",
    "Confía en ti como yo confío en ti 🫶",
    "El IPN no sabe la suerte que tiene de tenerte ✨",
    "Te veo esforzarte y te admiro cada día más",
    "Estoy contigo aunque no esté cerca físicamente"
];
let i = 0;
const phraseEl = document.getElementById('phrase');
setInterval(() => {
    i = (i + 1) % frases.length;
    phraseEl.textContent = frases[i];
}, 3000);

const images = document.querySelectorAll('.carousel-img');
let current = 0;
setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
}, 3000);
