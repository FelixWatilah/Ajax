/**
 * Created by Watilah on 27-Dec-16.
 */
$('#search').keyup(function () {
    var search_term = $(this).val();

    $.post('php/users_online.php', {search_term:search_term}, function (data) {
        $('#search_results').html(data);
    });
});