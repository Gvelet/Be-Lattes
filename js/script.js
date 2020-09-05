
$(document).ready(function(){
    $('.menu__burger').click(function(event){
        $('.menu__burger,.menu__top,.menu,.menu__logo').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.slider').slick({
        arrows:false,
        dots:true,
    });
});

