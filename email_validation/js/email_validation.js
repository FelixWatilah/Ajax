/**
 * Created by Watilah on 25-Dec-16.
 */

function validate_email(email) {
    $.post('php/email.php', { email:email }, function (data) {
        $('#email_feedback').text(data);
    });
}

$('#email').focusin(function () {
    if ($('#email').val() === ''){
        $('#email_feedback').text('Enter a valid email');
    }else{
        validate_email($('#email').val());
    }
}).blur(function () {
    $('#email_feedback').text('');
}).keyup(function () {
    validate_email($('#email').val());
});