const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
      
    } else if (e.target.matches(".sobre *")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");

            setTimeout(() => {
                carta.classList.remove("mostrar-carta");
                carta.classList.add("abierta");
            }, 500);
            envoltura.classList.add("desactivar-sobre")
        } else {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta")
                carta.classList.remove("abierta")
            }, 500);
        }

    } 
})

// Al final de tu archivo script_v2.js, añade lo siguiente:

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const numHearts = 20; // Número de corazones que quieres

    for (let i = 0; i < numHearts; i++) {
        let heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Duración de animación aleatoria (entre 2s y 5s)
        heart.style.animationDelay = Math.random() * 2 + 's'; // Retraso de animación aleatorio
        heart.style.fontSize = (Math.random() * 10 + 10) + 'px'; // Tamaño aleatorio
        body.appendChild(heart);
    }
});
