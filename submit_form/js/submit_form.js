/**
 * Created by Watilah on 25-Dec-16.
 */

$(document).ready(function () {
    $('input[type="file"]').change(function () {
        $(this).parent().submit();
    });
});