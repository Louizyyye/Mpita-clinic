// JavaScript for handling navbar interactions
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    if (navbarToggle) {
        navbarToggle.addEventListener('click', function() {
            document.querySelector('.navbar').classList.toggle('active');
        });
    }
});
