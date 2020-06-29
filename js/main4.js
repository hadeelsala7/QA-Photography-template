$(document).ready(function(){
    $('.burger').on('click', function(){
        $('.header__nav__list').toggleClass('open')
    })
})

$(document).ready(function(){
    $('.burger').on('click', function(){
        $(this).toggleClass('open')
    })
})