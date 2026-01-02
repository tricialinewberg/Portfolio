async function typeWords(elementId, text, speed = 400) {
    const element = document.getElementById(elementId);
    const words = text.split(" ");
    
    for (let word of words) {
        const span = document.createElement("span");
        span.textContent = word;
        span.className = "word";
        element.appendChild(span);
        
        // Espera o tempo da próxima palavra
        await new Promise(resolve => setTimeout(resolve, speed));
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    // 1. Escreve o Título
    await typeWords("title-line", "WELCOME TO MY PORTFOLIO", 500);
    
    // 2. Espera um pouco e escreve o Subtítulo
    await new Promise(resolve => setTimeout(resolve, 300));
    await typeWords("subtitle-line", "THE GRANDEST SHOW OF STRATEGY AND DESIGN ON LAND OR BY SCREEN.", 300);

    // 3. Mostra o Botão e a Foto
    setTimeout(() => {
        document.getElementById("ticket").classList.add("reveal-final");
        document.querySelector(".photo-container").classList.add("reveal-final");
    }, 500);
});
