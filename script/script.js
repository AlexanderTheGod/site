$(document).ready(function(){

    $('.contact__info').css('height', $('.last__content__data').css('height'))

    $('.contact__info__background').css('width',((parseInt($('.container').css('width'))-parseInt($('.content').css('width')))/2+368)+'px')

    // if (parseInt($('.container').css('width'))<=1278){
    //     $('.fourth__content__people__person__other').prepend('<div class="fourth__content__people__person__other__image other__image__active"><img src="sources/rectangleOther.png" alt=""><p class="active">someone</p></div>')
    // }

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
            breakpoint: 320,
            settings:{
                slidesToShow: 1,
                touchThreshold: 4,
                arrows: false,
            }
        }],
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
            breakpoint: 320,
            settings:{
                slidesToShow: 1,
                touchThreshold: 4,
                arrows: false,
            }
        }],
    })}

    //!================================RESIZE===========================
    // var activeWasAdded=false
    $(window).on('resize', function(){
        $('.contact__info__background').css('width',((parseInt($('.container').css('width'))-parseInt($('.content').css('width')))/2+368)+'px')
    
        if (parseInt($('.container').css('width'))>=768 && parseInt($('.container').css('width'))<=1278){
            var lastContentWidth= parseInt($('.container').css('width'))-parseInt($('.contact__info__background').css('width'))-55
            $('.last__content__data').css('max-width', lastContentWidth)
        } else if(parseInt($('.container').css('width'))<768){
            $('.last__content__data').css('max-width', '100%')
        }

        // let activeWasAdded=false
        // if (parseInt($('.container').css('width'))<=1278){
        //     if (activeWasAdded==false){
        //         activeWasAdded=true
        //         $('.fourth__content__people__person__other').prepend('<div class="fourth__content__people__person__other__image other__image__active"><img src="sources/rectangleOther.png" alt=""><p class="active">someone</p></div>')
        //     }
        // } else{
        //     $('.other__image__active').remove()
        //     activeWasAdded=false
        // }
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
                    breakpoint: 320,
                    settings:{
                        slidesToShow: 1,
                        touchThreshold: 4,
                        arrows: false,
                    }
                }],
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
                    breakpoint: 320,
                    settings:{
                        slidesToShow: 1,
                        touchThreshold: 4,
                        dots: false,
                    }
                }],
                
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

})
