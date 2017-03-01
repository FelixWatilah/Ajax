<?php
/**
 * Created by PhpStorm.
 * User: Watilah
 * Date: 25-Dec-16
 * Time: 9:29 PM
 */
if (isset($_GET['input'])){
    $string = $_GET['input'];
    echo strrev($string);
}