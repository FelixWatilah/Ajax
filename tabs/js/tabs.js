/**
 * Created by Watilah on 25-Dec-16.
 */
$('#tabs').tabs({ ajaxOptions: {error: function (xhr, index, status, anchor) {
    $(anchor.hash).text('Could not load page.');
}} });