/**
 * Created by Watilah on 25-Dec-16.
 */
$('#button').click(function () {
    $.ajax({
        url: 'pages/page.html',
        statusCode: {
            404: function () {
                $('#content').html('Page not found');
            }
        },
        success: function (data) {
            $('#content').html(data);
        }
    });
});
