<?php
/**
 * Created by PhpStorm.
 * User: Watilah
 * Date: 25-Dec-16
 * Time: 9:29 PM
 */
if (isset($_POST['name'], $_POST['string'])){
    $name = $_POST['name'];
    $string = $_POST['string'];

    echo '<strong>'.$name.'</strong> says <i>'.$string.'</i>';
}