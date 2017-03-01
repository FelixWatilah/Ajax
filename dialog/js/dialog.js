/**
 * Created by Watilah on 25-Dec-16.
 */
$('#save').click(function () {
    $('#dialog').attr('title','Saved').text('Settings were saved.').dialog({ buttons:{'OK': function () {
        $(this).dialog('close');
    }}, closeOnEscape: true, draggable:false, resizable:false, show:'fade', modal:true});
});