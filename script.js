function reveal(el, delay) {
    if (!el) return; // Segurança caso o elemento não exista
    setTimeout(() => {
        el.classList.add("fade-in");
    }, delay);
}

document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os elementos
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");
    const subtitle = document.getElementById("subtitle");
    const desc = document.getElementById("desc");
    const ticket = document.getElementById("ticket");
    const photo = document.querySelector(".photo-container");

    // Sequência de aparição (ajuste os números se quiser mais rápido ou devagar)
    reveal(line1, 400);   // "WELCOME"
    reveal(line2, 1200);  // "WELCOME TO"
    reveal(line3, 2000);  // "MY PORTFOLIO"
    
    reveal(subtitle, 3000); // Subtítulo
    
    // Revela a descrição (o CSS cuidará do efeito de leitura/fade)
    reveal(desc, 3300); 
    
    reveal(ticket, 5600);   // Botão Admit One
    reveal(photo, 6500);    // Foto por último
});
