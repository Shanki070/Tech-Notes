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

// Load navigation and footer
window.onload = function() {
    loadHTML('nav-placeholder', 'nav.html');
    loadHTML('footer-placeholder', 'footer.html');

    // Add event listeners to menu links after loading the navigation
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const filePath = this.getAttribute('href');
            loadHTML('main-content', filePath);
        });
    });
};
