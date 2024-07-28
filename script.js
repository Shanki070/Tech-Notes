// script.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.submenu-toggle');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const submenu = this.nextElementSibling;
            const arrow = this.querySelector('.arrow');

            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
                arrow.style.transform = 'rotate(0deg)'; // Rotate back to down
            } else {
                submenu.style.display = 'block';
                arrow.style.transform = 'rotate(180deg)'; // Rotate to up
            }
        });
    });
});
