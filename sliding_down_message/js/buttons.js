/**
 * Created by Watilah on 27-Dec-16.
 */

function slideNotice(text) {
    $('#slideNotice').html('<h3>' + text + '</h3>').slideDown().delay(1000).slideUp();
}

$('#save').click(function () {
    slideNotice('Your settings have been saved!');
});

$('#delete').click(function () {
    slideNotice('Your account has been deleted...');
});