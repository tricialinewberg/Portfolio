function reveal(el, delay) {
    setTimeout(() => {
        el.classList.add("fade-in");
    }, delay);
}

function typeParagraph(el, text, delayStart, speed = 45) {
    el.innerHTML = "";
    let i = 0;
    setTimeout(() => {
        let interval = setInterval(() => {
            el.innerHTML += text[i];
            i++;
            if (i >= text.length) clearInterval(interval);
        }, speed);
    }, delayStart);
}

document.addEventListener("DOMContentLoaded", () => {

    // Títulos - NÃO ALTEREI NADA
    reveal(line1, 400);
    reveal(line2, 1200);
    reveal(line3, 2000);

    // Subtítulo - NÃO ALTEREI NADA
    reveal(subtitle, 3000);

    // PARÁGRAFO — AQUI SIM
    let paragraphText = 
        "STEP INSIDE, AND YOU’LL WITNESS MORE PURPOSEFUL DESIGN THAN MOST CREATIVES REVEAL IN A LIFETIME. " +
        "YOU CAN DECODE THE STRATEGY IN THE PIXELS AND BUY A NEW VISION FOR YOUR PRODUCT. " +
        "BUT BEFORE YOU FULLY ENTER MY WORLD, REMEMBER: IT’S ALL DESIGN, AND DESIGN IS THE GAME.";

    typeParagraph(desc, paragraphText, 4000, 45);

    // Admit One
    reveal(ticket, 9500);

    // Foto
    reveal(document.querySelector(".photo-container"), 11000);
});

