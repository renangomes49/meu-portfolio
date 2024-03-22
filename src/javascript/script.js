$(document).ready(function() {

    $('#btn-mobile').on('click', function () {
        $('#menu-mobile').toggleClass('show-menu-mobile');
        $('#btn-mobile').find('i').toggleClass('fa-x');
    })

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function (){

        const header = $('header');
        const scrollPosicao = $(window).scrollTop() - header.outerHeight();

        let indexSecaoAtiva = 0;

        sections.each(function(indice) {
            const secao = $(this);
            const secaoTop = secao.offset().top - 250;
            const secaoBottom = secaoTop + secao.outerHeight();

            if(scrollPosicao >= secaoTop && scrollPosicao < secaoBottom){
                indexSecaoAtiva = indice;
                return;
            }
        })

        navItems.removeClass('active');
        $(navItems[indexSecaoAtiva]).addClass('active');
    })
});
