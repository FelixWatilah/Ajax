/**
 * Created by Watilah on 25-Dec-16.
 */
$('#save_button').click(function () {
    //grab values
    var name = $('#name').val();
    var email = $('#email').val();

    //disable button
    $(this).attr('disabled', true);

    //change value attribute of button
    $(this).attr('value','Updating...');

    //show spinning icon
    $('#save_status').html('<i class="fa fa-spinner fa-spin"></i>');

    //perform http request
    $.post('php/settings.php', { name:name, email:email }, function (data) {

        //
        $('#save_button').attr('value','Update');

        //enable button
        $('#save_button').attr('disabled', false);

        //display data from php file
        $('#save_status').html(data).fadeOut(3000);
    });
});
