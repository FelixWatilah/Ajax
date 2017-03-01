<?php
/**
 * Created by PhpStorm.
 * User: Watilah
 * Date: 25-Dec-16
 * Time: 9:29 PM
 */

if (isset($_POST['email'])){
    $email = $_POST['email'];
    if (!empty($email)){
        if (filter_var($email, FILTER_VALIDATE_EMAIL) === false){
            echo 'That\'s not a valid email';
        }else{
            echo 'Valid email';
        }
    }
}
