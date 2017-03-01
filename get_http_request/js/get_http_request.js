/**
 * Created by Watilah on 25-Dec-16.
 */
$('#button').click(function () {
    var string = $('#string').val();

    $.get('php/email.php', {input:string}, function (data) {
        $('#feedback').text(data);
    });

});
