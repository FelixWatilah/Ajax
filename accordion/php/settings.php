<?php
/**
 * Created by PhpStorm.
 * User: Watilah
 * Date: 25-Dec-16
 * Time: 9:29 PM
 */

include 'init.php';

if (isset($_POST['name'], $_POST['email'])){
    $name = mysqli_real_escape_string($conn,htmlentities($_POST['name']));
    $email = mysqli_real_escape_string($conn,htmlentities($_POST['email']));

    $update = mysqli_query($conn,"UPDATE `users` SET `name` = '$name', `email`='$email' WHERE id=".$_SESSION['id']);

    if ($update === true){
        echo "<p class='text-success'>Settings have been successfully updated</p>";
    }elseif ($update === false){
        echo "<p class='text-danger'>There was a problem updating your settings</p>";
    }
}