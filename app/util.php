<?php
session_start();

$_SESSION['firebase'] = 1;
echo 'session updated : '.$_SESSION['firebase'];
