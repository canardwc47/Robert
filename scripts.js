document.addEventListener('DOMContentLoaded', function () {
    const logo = document.getElementById('logo');
    
    logo.addEventListener('mouseover', function () {
        logo.classList.add('bounce');
    });
    
    logo.addEventListener('animationend', function () {
        logo.classList.remove('bounce');
    });
});