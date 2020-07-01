window.sr=ScrollReveal();

$(document).ready(function(){
    // Reveal elements on scroll
    sr.reveal(".scroll-up", {
        duration: 800,
        delay: 400,
        distance: '120px',
        origin: 'bottom'
    });

    // Onepage Nav scrolling
    $('.main-nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 500,
        scrollThreshold: 0.5,
        easing: 'swing'
    });
});
