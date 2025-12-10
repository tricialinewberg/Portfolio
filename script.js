function show(element, delay) {
    setTimeout(() => {
        element.classList.add("fade-up");
    }, delay);
}

document.addEventListener("DOMContentLoaded", () => {

    const l1 = document.getElementById("line1");
    const l2 = document.getElementById("line2");
    const l3 = document.getElementById("line3");
    const subtitle = document.getElementById("subtitle");
    const desc = document.getElementById("desc");
    const ticket = document.getElementById("ticket");

    show(l1, 300);      // WELCOME
    show(l2, 1300);     // WELCOME TO
    show(l3, 2300);     // MY PORTFOLIO
    show(subtitle, 3300);
    show(desc, 4200);
    show(ticket, 5500); // aparece SÓ no final
});
