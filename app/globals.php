<?php
session_start();

if(!isset($_SESSION['view']))
    $_SESSION['view']= 'main';

function setView($view){
    $_SESSION['view'] = $view;
}
function getView(){
    return $_SESSION['view'];
}

function formatted($s){
    return strtoupper(substr($s,0,1)).substr($s,1);
}