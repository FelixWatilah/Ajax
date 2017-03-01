/**
 * Created by Watilah on 25-Dec-16.
 */
$(document).ready(function () {

    $('.name,.place').draggable({containment:'window', revert:true});

    $('#drop').droppable({ hoverClass:'border', tolerance: 'pointer', accept:'.name',
        over:function () {
        $('#drop').text('Something has been hovered over me');
    },
    out:function () {
        $('#drop').text('Something has been dragged out.');
    },
    drop:function () {
        $('#drop').text('Something dropped');
    }});

});
