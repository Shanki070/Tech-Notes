// script.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.submenu-toggle');

    // Function to handle submenu toggle and save state to localStorage
    function handleToggle(button) {
        const submenu = button.nextElementSibling;
        const arrow = button.querySelector('.arrow');

        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
            arrow.style.transform = 'rotate(0deg)'; // Rotate back to down
            localStorage.setItem(button.dataset.submenuId, 'closed');
        } else {
            submenu.style.display = 'block';
            arrow.style.transform = 'rotate(180deg)'; // Rotate to up
            localStorage.setItem(button.dataset.submenuId, 'open');
        }
    }

    toggleButtons.forEach(button => {
        // Initialize submenu state based on localStorage
        const state = localStorage.getItem(button.dataset.submenuId);
        const submenu = button.nextElementSibling;
        const arrow = button.querySelector('.arrow');

        if (state === 'open') {
            submenu.style.display = 'block';
            arrow.style.transform = 'rotate(180deg)'; // Rotate to up
        } else {
            submenu.style.display = 'none';
            arrow.style.transform = 'rotate(0deg)'; // Rotate back to down
        }

        // Add click event listener
        button.addEventListener('click', function() {
            handleToggle(this);
        });
    });
});
