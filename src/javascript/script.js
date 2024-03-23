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

//Modal
function abrirModalJava(){
    new bootstrap.Modal("#modal-java").show();
}

function abrirModalVueJs(){
    new bootstrap.Modal("#modal-vue-js").show();
}

function abrirModalSpring(){
    new bootstrap.Modal("#modal-spring").show();
}

function abrirModalPostgreSql(){
    new bootstrap.Modal("#modal-postegre-sql").show();
}

function abrirModalGit(){
    new bootstrap.Modal("#modal-git").show();
}

function abrirModalGitLab(){
    new bootstrap.Modal("#modal-git-lab").show();
}

function abrirModalJunit(){
    new bootstrap.Modal("#modal-junit").show();
}
function abrirModalMockito(){
    new bootstrap.Modal("#modal-mockito").show();
}

function abrirModalSwagger(){
    new bootstrap.Modal("#modal-swagger").show();
}

function abrirModalDocker(){
    new bootstrap.Modal("#modal-docker").show();
}

function abrirModalMysql(){
    new bootstrap.Modal("#modal-my-sql").show();
}

