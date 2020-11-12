$(function () {
    
    $('.work__card__open-close').on('click', function(){
        if (!$(this).hasClass('isActive')){
            $('.isActive').removeClass('isActive');
            $(this).addClass('isActive');
            $(this).parent().addClass('isActive');
        } else{
            $('.isActive').removeClass('isActive');
        }
    });

    $(document).on('scroll', function(){
        if (window.pageYOffset>=35){
            $('header').addClass('notTop');
            $('.burger__content__button').addClass('notTop');
        } else{
            if($('header').hasClass('notTop')){
                $('header').removeClass('notTop');
                $('.burger__content__button').removeClass('notTop');
            }
        }
    });

    $('img[src="sources/Avaaa.jpg"]').on('click',function(){
        window.scrollTo(0, 0);
        if($('.burger__content__button').hasClass('isOpened')){
            $('.burger__content__button').toggleClass('isOpened');
            $('.burger__content__wrapper').toggleClass('isOpened');
            $('.burger-background').toggleClass('isOpened');
            $('body').toggleClass('isOpened');
        }
    })

    
    $('.burger__content__button').on('click',function(){
        $(this).toggleClass('isOpened');
        $('.burger__content__wrapper').toggleClass('isOpened');
        $('.burger-background').toggleClass('isOpened');
        $('body').toggleClass('isOpened');
    });

    $('.nav-bar a').on('click',function(){
        $('.burger__content__button').toggleClass('isOpened');
        $('.burger__content__wrapper').toggleClass('isOpened');
        $('.burger-background').toggleClass('isOpened');
        $('body').toggleClass('isOpened');
    });

});
