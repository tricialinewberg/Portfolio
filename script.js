function typeEffect(element, text, delay = 40, startDelay = 0) {
    element.innerHTML = "";
    element.style.opacity = "1";

    let i = 0;
    setTimeout(() => {
        const typer = setInterval(() => {
            element.innerHTML += text.charAt(i);
            i++;

            if (i >= text.length) clearInterval(typer);
        }, delay);
    }, startDelay);
}

document.addEventListener("DOMContentLoaded", () => {

    // Títulos
    typeEffect(line1, "WELCOME", 50, 300);
    typeEffect(line2, "WELCOME TO", 50, 1400);
    typeEffect(line3, "MY PORTFOLIO", 50, 2600);

    // Subtítulo
    typeEffect(
        subtitle,
        "THE GRANDEST SHOW OF STRATEGY AND DESIGN ON LAND OR BY SCREEN.",
        18,
        4000
    );

    // Parágrafo
    typeEffect(
        desc,
        "STEP INSIDE, AND YOU’LL WITNESS MORE PURPOSEFUL DESIGN THAN MOST CREATIVES REVEAL IN A LIFETIME. YOU CAN DECODE THE STRATEGY IN THE PIXELS AND BUY A NEW VISION FOR YOUR PRODUCT. BUT BEFORE YOU FULLY ENTER MY WORLD, REMEMBER: IT’S ALL DESIGN, AND DESIGN IS THE GAME.",
        14,
        6000
    );

    // Admit One no final
    setTimeout(() => {
        ticket.classList.add("fade-in");
    }, 12000);

    // Foto no final também
    setTimeout(() => {
        document.querySelector(".photo-container").classList.add("fade-in");
    }, 13000);

});
