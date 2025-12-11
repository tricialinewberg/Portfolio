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

    // Seleciona os elementos CORRETAMENTE
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");
    const subtitle = document.getElementById("subtitle");
    const ticket = document.getElementById("ticket");
    const photo = document.querySelector(".photo-container");
    const desc = document.getElementById("desc");

    // Mantém exatamente o fluxo que você APROVOU:
    reveal(line1, 400);     // WELCOME
    reveal(line2, 1200);    // WELCOME TO
    reveal(line3, 2000);    // MY PORTFOLIO
    reveal(subtitle, 3000); // perfeito – aparece suave
    reveal(ticket, 5600);   // Admit One no final
    reveal(photo, 6500);    // foto depois

    // efeito de digitação lento no parágrafo
    const text = desc.innerText;
    typeParagraph(desc, text, 80, 3300);
});
