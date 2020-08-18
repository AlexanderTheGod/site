$(document).ready(function(){

    $('.contact__info').css('height', $('.last__content__data').css('height'))

    $('.contact__info__background').css('width',((parseInt($('.container').css('width'))-parseInt($('.content').css('width')))/2+368)+'px')

    if (parseInt($('.container').css('width'))<=1278){
        if ($('.enablability').hasClass('disabled'))
            $('.enablability').removeClass('disabled').addClass('enabled')
    }else{
        if ($('.enablability').hasClass('enabled'))
            $('.enablability').removeClass('enabled').addClass('disabled')
    }

    if (parseInt($('.container').css('width'))<=1278){$('.fird__content__pics').slick({
        dots:true,
        slidesToShow: 3,
        touchThreshold: 8,
        centerMode:true,
        responsive:[{
            breakpoint: 768,
            settings:{
                slidesToShow: 2,
                touchThreshold: 6,
            }
        },{
            breakpoint: 420,
            settings:{
                slidesToShow: 1,
                touchThreshold: 4,
                arrows: false,
            }
        }],
        variableWidth: true
    })}

    if (parseInt($('.container').css('width'))<1070){$('.fourth__content__people__person__other').slick({
        dots:true,
        slidesToShow: 3,
        touchThreshold: 8,
        centerMode:true,
        responsive:[{
            breakpoint: 768,
            settings:{
                slidesToShow: 2,
                touchThreshold: 6,
            }
        },{
            breakpoint: 420,
            settings:{
                slidesToShow: 1,
                touchThreshold: 4,
                arrows: false,
            }
        }],
        variableWidth: true
    })}

    //!================================RESIZE===========================
    $(window).on('resize', function(){
        $('.contact__info__background').css('width',((parseInt($('.container').css('width'))-parseInt($('.content').css('width')))/2+368)+'px')
    
        if (parseInt($('.container').css('width'))>=768 && parseInt($('.container').css('width'))<=1278){
            var lastContentWidth= parseInt($('.container').css('width'))-parseInt($('.contact__info__background').css('width'))-55
            $('.last__content__data').css('max-width', lastContentWidth)
        } else if(parseInt($('.container').css('width'))<768){
            $('.last__content__data').css('max-width', '100%')
        }

        if (parseInt($('.container').css('width'))<=1278){
            if ($('.enablability').hasClass('disabled'))
                $('.enablability').removeClass('disabled').addClass('enabled')
        }else{
            if ($('.enablability').hasClass('enabled'))
                $('.enablability').removeClass('enabled').addClass('disabled')
        }
    
        if (parseInt($('.container').css('width'))<1070){
            $('.fourth__content__people__person__other').slick({
                dots:true,
                slidesToShow: 3,
                touchThreshold: 8,
                centerMode:true,
                responsive:[{
                    breakpoint: 768,
                    settings:{
                        slidesToShow: 2,
                        touchThreshold: 6,
                    }
                },{
                    breakpoint: 420,
                    settings:{
                        slidesToShow: 1,
                        touchThreshold: 4,
                        arrows: false,
                    }
                }],
                variableWidth: true
            })
        } else{
            $('.fourth__content__people__person__other').slick('unslick')
        };

        if (parseInt($('.container').css('width'))<=1278){
            $('.fird__content__pics').slick({
                dots:true,
                slidesToShow: 3,
                touchThreshold: 8,
                centerMode:true,
                responsive:[{
                    breakpoint: 768,
                    settings:{
                        slidesToShow: 2,
                        touchThreshold: 6,
                    }
                },{
                    breakpoint: 420,
                    settings:{
                        slidesToShow: 1,
                        touchThreshold: 4,
                        arrows: false,
                    }
                }],
                variableWidth: true
            })
        }else{
            $('.fird__content__pics').slick('unslick')
        };
    })

    //!===============burger=====================

    $('.burger').on('click', function(){
        $(this).toggleClass('burger-active')
        $('.burger__back').toggleClass('burger-active')
    })

    $('.burger__back__list li').on('click', function(){
        $('.burger').toggleClass('burger-active')
        $('.burger__back').toggleClass('burger-active')
    })

})


