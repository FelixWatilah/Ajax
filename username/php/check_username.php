<?php
/**
 * Created by PhpStorm.
 * User: Watilah
 * Date: 25-Dec-16
 * Time: 9:29 PM
 */

include 'init.php';

if (isset($_POST['username'])){
    $username = mysqli_real_escape_string($conn,htmlentities($_POST['username']));

    if (!empty($username)){
        $username_query = mysqli_query($conn,"SELECT `name` FROM `users` WHERE `name`='$username'");
        $row = mysqli_fetch_assoc($username_query);

        if ($row > 0){
            echo "<i class='text-success'>User available</i>";
        }else{
            echo "<i class='text-danger'>Not available</i>";
        }
    }else{
        echo "Enter a username to search";
    }

}