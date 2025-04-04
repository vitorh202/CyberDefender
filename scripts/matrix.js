const matrixContainer = document.getElementById('matrix');
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    function createRainChar() {
        const char = document.createElement('span');
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        char.style.left = Math.random() * window.innerWidth + 'px';
        char.style.animationDuration = Math.random() * 3 + 2 + 's';
        char.style.fontSize = Math.random() * 20 + 12 + 'px';
        matrixContainer.appendChild(char);

        setTimeout(() => {
            matrixContainer.removeChild(char);
        }, 5000);
    }

    setInterval(createRainChar, 100);