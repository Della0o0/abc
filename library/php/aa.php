<?php
  $hide = $_REQUEST["hide"];
  // echo($hide);
  $conn = mysqli_connect("127.0.0.1","root","","h52002",3306);
  mysqli_query($conn,"SET NAMES utf8");
  echo($hide);

?>