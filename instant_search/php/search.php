<?php
/**
 * Created by PhpStorm.
 * User: Watilah
 * Date: 25-Dec-16
 * Time: 9:29 PM
 */

include 'init.php';

if (isset($_POST['search_term'])){
    $search_term = mysqli_real_escape_string($conn,htmlentities($_POST['search_term']));

    if (!empty($search_term)){

        $sql = "SELECT `place`, `description` FROM `places` WHERE `place` LIKE '%$search_term%'";
        $result = mysqli_query($conn,$sql);
        $result_count = mysqli_num_rows($result);

        $suffix = ($result_count != 1) ? 's' : '';
        echo "<p>Your search for <strong class='text-success'>" ,$search_term, "</strong> returned <strong class='text-danger'>" ,$result_count, "</strong> result",$suffix,"</p>";

        while ($row = mysqli_fetch_assoc($result)){
            echo '<p><strong>',$row['place'],'</strong><br />',$row['description'],'</p>';
        }

    }else{
        echo 'Enter something to search';
    }

}else{
    echo 'check on your variable';
}