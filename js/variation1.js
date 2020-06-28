$(document).ready(function(){
    AOS.init();

    // Onepage Nav scrolling
    $('.main-nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 500,
        scrollThreshold: 0.5,
        easing: 'swing'
    });
});
