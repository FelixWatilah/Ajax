/**
 * Created by Watilah on 25-Dec-16.
 */
$('#names, #places').sortable({
    containment:'parent',
    tolerance:'pointer',
    cursor:'pointer',
    revert: true,
    opacity: 0.60,
    connectWith:'#names, #places',
    update:function () {
        var content = $(this).text();
        $('#sort_status').text(content);
    }
});
