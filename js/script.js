$(document).ready(function(){
    var active = $('.sub-menu-cover').hasClass('active');

    $('.main-menu').mouseenter(function(){
        $('.sub-menu-cover').toggleClass('active');
        $('.heading-wrap').removeClass('on');

    });

    // .sub-menu-cover한테 active가 있으면 .heading-wrap에 on클래스 제거
    $('.header-area .search-icon').click(function(){
        $('.heading-wrap').toggleClass('on');
        $('.sub-menu-cover').removeClass('active');

    });


    $('.header-wrap').mouseleave(function(){
        $('.sub-menu-cover').removeClass('active');
    });
    
    $('.close .close-icon').click(function(){
        $('.notice-wrap').css({'display':'none'});
    });
    $('.btn-box').click(function(){
        // $(this).parent('.btn').siblings('.tabs').children('.target').toggleClass('on');
        let result = $(this).attr('data-tab');
        $('.target').removeClass('on');

        $(`#${result}`).toggleClass('on');

    });
    // $('.btn-box.box2').click(function(){
    //     $('.target.box2').toggleClass('on');
    // });
    // $('.btn-box.box3').click(function(){
    //     $('.target.box3').toggleClass('on');
    // });
    $('.target .close-icon').click(function(){
        $('.target.box1').removeClass('on');
    });
    $('.target .close-icon').click(function(){
        $('.target.box2').removeClass('on');
    });
    $('.target .close-icon').click(function(){
        $('.target.box3').removeClass('on');
    });

    // 토글클래스 하고 리무브


    // 공지영역 버티컬 넘어가는 제이쿼리
    var swiper = new Swiper(".notice-wrap .mySwiper", {
        direction: "vertical",
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay:{
            delay:3200,
            disableOnInteraction: false
        },
    });

    // 배너 오른쪽 스와이퍼 넘어가는 제이쿼리
    var swiper = new Swiper(".main-right .mySwiper", {
        pagination: {
        el: ".swiper-pagination",
        },
        effect: "fade",
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay:{
            delay:3200,
            disableOnInteraction: false
        },
    });

    // sec-3 학과 소개란 제이쿼리
    var swiper = new Swiper(".sec-3 .mySwiper", {
        slidesPerView: '6',
        pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });

    //모바일 서브메뉴 영역
    $('#menu-wrap .menu-txt').click(function(){
        const menuHas = $(this).parent('#menu-wrap .menu').hasClass('on')

        if(menuHas == true){
            $(this).parent('#menu-wrap .menu').removeClass('on');
        }else{
            $(this).parent('#menu-wrap .menu').addClass('on');
            $(this).parent('#menu-wrap .menu').siblings().removeClass('on');
        }
    });

    $('.right-icon .menu-btn').click(function(){
        $('#menu-wrap').toggleClass('active');
    });

    $('.right-icon .kor-btn').click(function(){
        $('.mobile-major-wrap').toggleClass('active');
    });

    const ww = $(window).width();
    if(ww < 960){
        $('.main-footer-sub .txt').insertAfter('.main-footer .search');

    }else{
        $('.main-footer .search').insertAfter('.main-footer-sub .txt');

    }
    
    if(ww < 560){
        $('.sec-1 .container .img-2 .txt').insertAfter('.sec-1 .container .img-2 .img-main');
    }else{
        $('.sec-1 .container .img-2 .txt').insertAfter('.sec-1 .container .img-2 .img-main');

    }



}); //end