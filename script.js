function reveal(el, delay) {
    if (!el) return;
    setTimeout(() => {
        el.classList.add("fade-in");
    }, delay);
}

document.addEventListener("DOMContentLoaded", () => {
    // Seleção dos elementos
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");
    const subtitle = document.getElementById("subtitle");
    const desc = document.getElementById("desc");
    const ticket = document.getElementById("ticket");
    const photo = document.querySelector(".photo-container");

    // Sequência de ativação
    reveal(line1, 400);   
    reveal(line2, 1200);  
    reveal(line3, 2000);  
    reveal(subtitle, 3000); 
    reveal(desc, 4000);     // Começa a leitura do parágrafo
    reveal(ticket, 7000);   // Botão no final
    reveal(photo, 7500);    // Foto por último
});
