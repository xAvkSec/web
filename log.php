<?php
file_put_contents("log.txt", date("Y-m-d H:i:s") . " - " . $_SERVER['REMOTE_ADDR'] . " - " . $_SERVER['REQUEST_URI'] . " - " . file_get_contents("php://input") . "\n", FILE_APPEND);
echo "OK";
?>
