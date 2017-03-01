/**
 * Created by Watilah on 27-Dec-16.
 */
$(document).ready(function () {

    $('#submit').click(function () {
        var username = $('#username').val();

        //send username to users_online.php, action: joined
        $.post('php/users_online.php', {username:username, action:'joined'});

        $(window).unload(function () {
            //remove users from database table
            $.post('php/users_online.php',{username:username, action:'left'}, function (data) {
                $('#users_online').html(data);
            });
        });

    });

    setInterval(function () {
        //get list of users, action: list
        $.post('php/users_online.php',{action:'list'},function (data) {
            $('#users_online').html(data);
        });
    }, 500);

});