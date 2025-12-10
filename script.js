function reveal(el, delay) {
    setTimeout(() => {
        el.classList.add("fade-in");
    }, delay);
}

document.addEventListener("DOMContentLoaded", () => {

    reveal(line1, 400);     // WELCOME
    reveal(line2, 1200);    // WELCOME TO
    reveal(line3, 2000);    // MY PORTFOLIO
    reveal(subtitle, 3000);
    reveal(desc, 4200);
    reveal(ticket, 5600);   // Admit One só no final
    reveal(document.querySelector(".photo-container"), 6500);
});
