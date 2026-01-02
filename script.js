async function typeWords(elementId, text, speed = 300) {
    const element = document.getElementById(elementId);
    const words = text.split(" "); // Quebra a frase em palavras
    
    for (let word of words) {
        element.innerHTML += word + " "; // Adiciona a palavra + espaço
        // Espera o tempo definido antes de ir para a próxima palavra
        await new Promise(resolve => setTimeout(resolve, speed));
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    // 1. Escreve o Título
    await typeWords("title-line", "WELCOME TO MY PORTFOLIO", 400);
    
    // 2. Espera um pouco e escreve o Subtítulo
    await new Promise(resolve => setTimeout(resolve, 500));
    await typeWords("subtitle-line", "THE GRANDEST SHOW OF STRATEGY AND DESIGN ON LAND OR BY SCREEN.", 250);

    // 3. Mostra o Botão e a Foto
    const ticket = document.getElementById("ticket");
    const photo = document.querySelector(".photo-container");
    
    setTimeout(() => {
        ticket.classList.add("reveal-final");
        photo.classList.add("reveal-final");
    }, 500);
});
