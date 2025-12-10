// FRASES DO TÍTULO
const w1 = "WELCOME";
const w2 = "WELCOME TO";
const w3 = "MY PORTFOLIO";

// SUBTÍTULO
const text2 = "The Grandest Show of Strategy and Design on Land or By Screen.";

// DESCRIÇÃO
const text3 = "Step inside, and you'll witness more purposeful design than most creatives reveal in a lifetime. You can decode the strategy in the pixels and buy a new vision for your product. But before you fully enter my world, remember: it’s all design, and design is the game.";

function typeWriter(element, text, speed, callback) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            callback();
        }
    }
    typing();
}

window.onload = () => {

    // 1 — WELCOME
    typeWriter(document.getElementById("w1"), w1, 60, () => {

        // 2 — WELCOME TO
        typeWriter(document.getElementById("w2"), w2, 60, () => {

            // 3 — MY PORTFOLIO
            typeWriter(document.getElementById("w3"), w3, 60, () => {

                // SUBTÍTULO
                typeWriter(document.getElementById("subtitle"), text2, 45, () => {

                    // DESCRIÇÃO
                    typeWriter(document.getElementById("description"), text3, 30, () => {

                        // ADMIT ONE APARECE SÓ AGORA
                        const ticket = document.querySelector(".ticket");
                        ticket.style.opacity = "1";
                        ticket.style.transform = "translateY(0)";
                    });
                });
            });
        });
    });
};
