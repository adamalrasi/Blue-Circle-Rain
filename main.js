function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');

    circle.style.left = Math.random() * 100 + "vw";
    circle.style.animationDuration = Math.random() * 2 + 3 + "s";

    circle.innerText = '🔵';
    document.body.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 5000);
}

setInterval(createCircle, 300);