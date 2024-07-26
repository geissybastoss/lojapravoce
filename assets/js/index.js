const gap = 16;

// Função para atualizar botões de navegação
function updateButtons(carousel, content, prev, next) {
    const maxScrollLeft = content.scrollWidth - carousel.clientWidth;
    prev.style.display = carousel.scrollLeft > 0 ? "flex" : "none";
    next.style.display = carousel.scrollLeft < maxScrollLeft ? "flex" : "none";
}

// Carrossel Feminino
const carousel = document.getElementById("carousel");
const content = document.getElementById("content");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let width = carousel.offsetWidth;

next.addEventListener("click", () => {
    carousel.scrollBy(width + gap, 0);
    updateButtons(carousel, content, prev, next);
});
prev.addEventListener("click", () => {
    carousel.scrollBy(-(width + gap), 0);
    updateButtons(carousel, content, prev, next);
});

window.addEventListener("resize", () => {
    width = carousel.offsetWidth;
    updateButtons(carousel, content, prev, next);
});

// Carrossel Masculino
const carousel2 = document.getElementById("carousel2");
const content2 = document.getElementById("content2");
const next2 = document.getElementById("next2");
const prev2 = document.getElementById("prev2");
let width2 = carousel2.offsetWidth;

next2.addEventListener("click", () => {
    carousel2.scrollBy(width2 + gap, 0);
    updateButtons(carousel2, content2, prev2, next2);
});
prev2.addEventListener("click", () => {
    carousel2.scrollBy(-(width2 + gap), 0);
    updateButtons(carousel2, content2, prev2, next2);
});

window.addEventListener("resize", () => {
    width2 = carousel2.offsetWidth;
    updateButtons(carousel2, content2, prev2, next2);
});
