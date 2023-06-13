$(function () {
    $('.mopen').on('click', function () {
        $(this).toggleClass('on')
        $('.header .gnb').toggleClass('on')
    })

    $('.gnb').on('wheel touchmove', function (e) {
        e.preventDefault();
    })



    $(window).on('scroll', function(){
        let sct = $(window).scrollTop();
        if(sct>0) { 
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    $('.mainSlide').slick ({
        arrows: false,
        fade: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    })

    $('.mainVisual .arrows .left').on('click', function() {
        $('.mainSlide').slick('slickPrev')
    })
    $('.mainVisual .arrows .right').on('click', function() {
        $('.mainSlide').slick('slickNext')
    })



})