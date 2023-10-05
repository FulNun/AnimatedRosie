// app.js
document.addEventListener('DOMContentLoaded', function () {
    const letters = document.querySelectorAll('.letter');
    let currentColorIndex = 0;
    const colors = ['red', 'green', 'blue', 'orange', 'purple'];

    function changeColor() {
        const color = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;

        letters.forEach(letter => {
            letter.style.color = color;
        });
    }

    setInterval(changeColor, 1000);
});

