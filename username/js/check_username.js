/**
 * Created by Watilah on 25-Dec-16.
 */
$('#username').keyup(function () {

    var username = $(this).val();

    $('#username_status').html('<i class="fa fa-spinner fa-spin"></i>');

    if (username != ''){
        $.post('php/check_username.php', {username:username}, function (data) {
            $('#username_status').html(data);
        });
    }else{
        $('#username_status').html('');
    }
});