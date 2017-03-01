/**
 * Created by Watilah on 25-Dec-16.
 */
$(document).ready(function () {
    $('#drag').draggable({ containment:'document', cursor:'pointer', revert:true, opacity:0.60, grid:[20,20],
        start: function () {
            $('#event').text('Dragging started.');
    },
    drag:function () {
        $('#event').text('Dragging');
    },
    stop:function () {
        $('#event').text('Dragging stopped.');
    }});
});
