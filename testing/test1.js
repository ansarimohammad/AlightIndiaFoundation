document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector('.box');

    document.documentElement.addEventListener('click', (event) => {
        if (!box.contains(event.target)) {
            box.style.backgroundColor = 'red';
        }
    });

    box.addEventListener('click', (event) => {
        event.stopPropagation();  // Prevent the click event from bubbling up to the document
        box.style.backgroundColor = 'blue';
    });
});
