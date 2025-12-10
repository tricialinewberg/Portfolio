const text1 = "WELCOME WELCOME TO MY PORTFOLIO";
const text2 = "The Grandest Show of Strategy and Design on Land or By Screen.";
const text3 = "Step inside, and you'll witness more purposeful design than most creatives reveal in a lifetime. You can decode the strategy in the pixels and buy a new vision for your product. But before you fully enter my world, remember: it’s all design, and design is the game.";

function typeWriter(element, text, speed) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

window.onload = () => {
    typeWriter(document.getElementById("welcome"), text1, 60);

    setTimeout(() => {
        typeWriter(document.getElementById("subtitle"), text2, 45);
    }, text1.length * 60 + 500);

    setTimeout(() => {
        typeWriter(document.getElementById("description"), text3, 30);
    }, text1.length * 60 + text2.length * 45 + 1000);
};
