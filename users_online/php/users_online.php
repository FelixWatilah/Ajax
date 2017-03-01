<?php
/**
 * Created by PhpStorm.
 * User: Watilah
 * Date: 25-Dec-16
 * Time: 9:29 PM
 */

include 'init.php';

//user joined
function user_joined($username){
    $username = mysql_real_escape_string(htmlentities($username));
    mysql_query("INSERT INTO `users` VALUES ('$username')");
}

//user left
function user_left($username){
    $username = mysql_real_escape_string($username);
    mysql_query("DELETE FROM `users` WHERE username = '$username'");
}

//user list
function user_list(){
    $user_list = array();
    $users_query = mysql_query("SELECT `username` FROM `users`");
    $users_count = mysql_num_rows($users_query);

    echo $users_count."&nbsp; users online";

    while ($row = mysql_fetch_assoc($users_query)){
        $user_list[] = $row['username'];
    }
    return $user_list;
}

if (isset($_POST['username'], $_POST['action']) || isset($_POST['action'])){
    $username = $_POST['username'];
    $action = $_POST['action'];

    if ($action == 'joined'){
        user_joined($username);
    }elseif ($action == 'list'){
        foreach (user_list() as $user){
            echo $user, "&nbsp;<i class='text-success fa fa-circle'></i> <br />";
        }
    }elseif ($action == 'left'){
        user_left($username);
    }
}