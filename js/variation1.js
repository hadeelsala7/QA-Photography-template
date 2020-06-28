window.sr=ScrollReveal();

$(document).ready(function(){
    // Reveal elements on scroll
    sr.reveal(".scroll-right", {
        duration: 800,
        distance: '120px',
        origin: 'left'
    });

    sr.reveal(".scroll-left", {
        duration: 800,
        delay: 300,
        distance: '120px',
        origin: 'right'
    });

    sr.reveal(".scroll-up", {
        duration: 800,
        delay: 400,
        distance: '120px',
        origin: 'bottom'
    });

    sr.reveal(".scroll-down", {
        duration: 800,
        delay: 400,
        distance: '120px',
        origin: 'top'
    });

    // Onepage Nav scrolling
    $('.main-nav').onePageNav({
        currentClass: 'current',
        changeHash: true,
        scrollSpeed: 500,
        scrollThreshold: 0.5,
        easing: 'swing'
    });
});
