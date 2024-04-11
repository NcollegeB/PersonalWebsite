const rainArea = document.getElementById('rain');

function createRainDrop() {
    const rainDrop = document.createElement('div');
    rainDrop.classList.add('rain-drop');
    rainDrop.style.left = Math.random() * 100 + 'vw';
    rainDrop.style.animationDuration = Math.random() * 2 + 3 + 's'; // Between 3 and 5 seconds for each drop
    rainDrop.style.opacity = Math.random();
    rainDrop.style.transform = 'scale(' + Math.random() + ')';

    rainArea.appendChild(rainDrop);

    setTimeout(() => {
        rainDrop.remove();
    }, 5000); // Remove raindrop after 5 seconds
}

setInterval(createRainDrop, 100); // Create a new raindrop every 100ms
