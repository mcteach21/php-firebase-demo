<?php
session_start();

//$_SESSION = array();

if(!isset($_SESSION['view']))
    $_SESSION['view']= 'main';

//if(!isset($_SESSION['firebase']))
$_SESSION['firebase'] = 0;

function setView($view){
    $_SESSION['view'] = $view;
}
function getView(){
    return $_SESSION['view'];
}

function formatted($s){
    return strtoupper(substr($s,0,1)).substr($s,1);
}