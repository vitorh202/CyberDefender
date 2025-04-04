document.addEventListener("DOMContentLoaded", function () {
    let text = "Aprenda sobre segurança digital e como se proteger contra ameaças cibernéticas!";
    let speed = 50; // Velocidade da digitação em milissegundos
    let index = 0;
    let typingElement = document.getElementById("typing-effect");

    typingElement.innerHTML = '<span id="cursor"></span>'; // Inicia com apenas o cursor

    function typeEffect() {
        if (index < text.length) {
            typingElement.innerHTML = text.substring(0, index) + '<span id="cursor">|</span>';
            index++;
            setTimeout(typeEffect, speed);
        }
    }

    typeEffect(); // Inicia a digitação
});