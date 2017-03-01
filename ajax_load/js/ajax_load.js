/**
 * Created by Watilah on 25-Dec-16.
 */
$('#button').click(function () {
    var name = $('#name').val();

    $.ajax({
        url: 'php/email.php',
        data:'name='+name,
        success: function (data) {
            $('#content').html(data);
        }
    }).error(function () {
        alert ('An error occurred');
    }).complete(function () {
        alert ('Completed');
    }).success(function () {
        alert ('Successful');
    });

});
