// Function to load an external HTML file into a specified element
function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// Function to close all submenus
function closeAllSubmenus() {
    document.querySelectorAll('.submenu').forEach(submenu => {
        submenu.style.display = 'none';
    });
    document.querySelectorAll('.arrow').forEach(arrow => {
        arrow.classList.remove('rotate');
    });
}

// Load navigation and footer
window.onload = function() {
    loadHTML('nav-placeholder', 'nav.html');
    loadHTML('footer-placeholder', 'footer.html');

    // Add event listeners to menu links after loading the navigation
    document.addEventListener('click', function(event) {
        const link = event.target.closest('.menu-link');
        if (link) {
            event.preventDefault();
            const filePath = link.getAttribute('href');
            loadHTML('main-content', filePath);

            // Close all submenus
            closeAllSubmenus();

            // Handle submenu visibility if the clicked link is a parent of a submenu
            const parent = link.parentElement;
            if (parent.classList.contains('has-submenu')) {
                const submenu = parent.querySelector('.submenu');
                if (submenu.style.display === 'block') {
                    submenu.style.display = 'none';
                } else {
                    submenu.style.display = 'block';
                    const arrow = parent.querySelector('.arrow');
                    arrow.classList.toggle('rotate');
                }
            }
        }
    });
};
