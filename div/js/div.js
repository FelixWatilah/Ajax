/**
 * Created by Watilah on 25-Dec-16.
 */
$(document).ready(function () {

    var current_top = parseInt($('#follow').css('top'));
    var speed = 1000;

    $('#follow').fadeIn(speed).click(function () {
        $(this).fadeOut(speed);
    });

    $(window).scroll(function () {
        var top = $(window).scrollTop();
        $('#follow').css('top', top + current_top)
    });
});