/**
 * Created by Watilah on 25-Dec-16.
 */
$('#button').click(function () {
    var name = $('#name').val();
    var string = $('#string').val();

    $.post('php/email.php', {string:string, name:name}, function (data) {
        $('#feedback').html(data);
    }).error(function () {
        $('#messages').append('An error occurred.');
    }).complete(function () {
        $('#messages').append('Request complete.');
    }).success(function () {
        $('#messages').append('Request successful.');
    });

});
