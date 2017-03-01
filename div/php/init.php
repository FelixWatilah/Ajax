<?php
/**
 * Created by PhpStorm.
 * User: Watilah
 * Date: 26-Dec-16
 * Time: 11:33 AM
 */

session_start();
$_SESSION['id']= '1';

$conn=mysqli_connect('localhost', 'root', '');
mysqli_select_db($conn,'jQuery');
