
    // JavaScript code here
    const hamburger = document.querySelector('.hamburger');
    const slideBox = document.querySelector('.slide-box');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        slideBox.classList.toggle('active');
    });
    function toggleCustomMessage() {
        const hamburger = document.querySelector('.hamburger');
        const slideBox = document.querySelector('#slide-box');

        
        hamburger.classList.toggle('active');
        slideBox.classList.toggle('active');
    }

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }
// Show or hide the Go to Top button based on scroll position
window.onscroll = function() {
    var goToTopButton = document.getElementById('go-to-top');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        goToTopButton.style.display = "block";
    } else {
        goToTopButton.style.display = "none";
    }
};

// Scroll to the top of the page smoothly
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
    