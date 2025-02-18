document.addEventListener('DOMContentLoaded', () => {
    const spawnInterval = 50;
    const gravity = 0.5; 
    const fadeSpeed = 0.01;

    let lastMouseX = 0;
    let lastMouseY = 0;

    function spawnNumber(x, y) {
        const number = document.createElement('span');
        number.textContent = Math.random() > 0.5 ? '1' : '0';
        number.className = `jejak-kursor ${Math.random() > 0.5 ? 'magenta' : ''}`;
        number.style.position = 'absolute';
        number.style.left = `${x}px`;
        number.style.top = `${y}px`;
        number.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(number);

        let velocity = 0;
        let opacity = 1;

        function update() {
            velocity += gravity;
            opacity -= fadeSpeed;
            number.style.top = `${parseFloat(number.style.top) + velocity}px`;
            number.style.opacity = opacity;

            if (opacity > 0) {
                requestAnimationFrame(update);
            } else {
                number.remove();
            }
        }

        requestAnimationFrame(update);
    }

    document.addEventListener('mousemove', (event) => {
        spawnNumber(event.pageX, event.pageY);
        lastMouseX = event.pageX;
        lastMouseY = event.pageY;
    });


    setInterval(() => {
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        spawnNumber(x, y);
        spawnNumber(lastMouseX, lastMouseY);
    }, spawnInterval);
});
