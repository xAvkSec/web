<?php
file_put_contents("log.txt", $_SERVER['REMOTE_ADDR'] . " - " . $_GET['c'] . "\n", FILE_APPEND);
?>
