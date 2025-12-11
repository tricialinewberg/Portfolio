// efeito normal (título, subtítulo e foto)
function reveal(el, delay) {
    setTimeout(() => {
        el.classList.add("fade-in");
    }, delay);
}

// efeito de leitura suave SOMENTE no parágrafo
function typeParagraph(element, speed, delayStart = 0) {

    const original = element.innerText.trim(); // texto original
    element.innerText = "";                    // limpa depois
    let i = 0;

    setTimeout(() => {
        const interval = setInterval(() => {
            element.innerText += original[i];
            i++;
            if (i >= original.length) clearInterval(interval);
        }, speed);
    }, delayStart);
}

document.addEventListener("DOMContentLoaded", () => {

    // mantém seu timing perfeito original
    reveal(line1, 400);      // WELCOME
    reveal(line2, 1200);     // WELCOME TO
    reveal(line3, 2000);     // MY PORTFOLIO
    reveal(subtitle, 3000);  // perfeito como antes
    reveal(ticket, 5600);    // botão no final
    reveal(document.querySelector(".photo-container"), 6500);

    // aplica leitura suave no parágrafo
    const desc = document.getElementById("desc");

    // inicia a digitação APÓS o subtítulo aparecer
    typeParagraph(desc, 55, 3500);
});
