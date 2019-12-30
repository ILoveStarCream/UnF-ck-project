$(document).on('click', '.hide-nav', function () {

    //вставляем в переменную hide-nav
    let hideNav = $('.hide-nav');

    //вставляем в переменную меню которое будет искать
    let nav = $('.nav');

    //При нажатие на hide-nav добавляется класс active
    $(hideNav).toggleClass('active');

    // Делаем условие : if=если меню не видно и оно скрыто то при нажатие будет вскрываться
    if (nav.is(':visible')) {
        nav.slideUp();

        // в противном случае оно будет прятаться 
    } else {
        nav.slideDown();
    }
})
//   slider

$('.slider').slick({
    dots: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                adaptiveHeight: true
            }
        }
    ]
}
);


// popup
$(function () {
    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});