function reveal(el, delay) {
    setTimeout(() => {
        el.classList.add("fade-in");
    }, delay);
}

// efeito de “leitura suave” só no parágrafo
function typeParagraph(element, text, speed, delayStart = 0) {
    element.textContent = "";
    let i = 0;

    setTimeout(() => {
        const interval = setInterval(() => {
            element.textContent += text[i];
            i++;
            if (i === text.length) clearInterval(interval);
        }, speed);
    }, delayStart);
}

document.addEventListener("DOMContentLoaded", () => {

    // restaura seu fluxo perfeito anterior:
    reveal(line1, 400);     // WELCOME
    reveal(line2, 1200);    // WELCOME TO
    reveal(line3, 2000);    // MY PORTFOLIO
    reveal(subtitle, 3000); // perfeito – NÃO TOQUEI
    reveal(ticket, 5600);   // Admit One no final
    reveal(document.querySelector(".photo-container"), 6500);

    // aplica efeito de leitura suave no parágrafo
    const desc = document.getElementById("desc");
    const text = desc.innerText;

    // velocidade mais lenta (80ms por letra)
    // começa depois do subtítulo aparecer
    typeParagraph(desc, text, 80, 3300);
});
