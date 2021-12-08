<?php
require_once 'globals.php';


class Callback {
    public function __invoke($name) {
        include($name.'.php');
    }
}

function dispatch($action)
{
    $action = trim($action, '/');
    if($action=='')
        $action='main';

//    $_SESSION['view'] = $action;
    setView($action); //globals

    $callback = new Callback();
    echo call_user_func($callback, 'views/view');  // ==> display view.php

}
