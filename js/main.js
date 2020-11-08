$(document).ready(function () {
    const boton = document.querySelector('#boton');
    boton.addEventListener('change', () => {
        validTheme();
    });
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        $("#boton").prop("checked", true);
    }
    function validTheme() {
        let theme;
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'light') {
            $('body').removeClass('light-theme');
            $('body').addClass('dark-theme');
            theme = document.body.classList.contains('light-theme') ? 'light' : 'dark'
        } else if (currentTheme === 'dark') {
            $('body').removeClass('dark-theme');
            $('body').addClass('light-theme');
            theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
        }
        localStorage.setItem('theme', theme);
    }
    let $btns = $('.project-area .button-group button');
    $btns.click(function (e) {
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');
        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });
        return false;
    })
    $('.project-area .button-group #btn1').trigger('click');
    //   let nav_offset_top = $('.header_area').height()-50;
    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= 50) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }
    navbarFixed();
});