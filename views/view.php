<?php
require 'app/twig.php';
require_once 'app/globals.php';

$view = getView(); // globals

//
//echo '<hr/>********************************<br/>';
//print_r($_SESSION);
//echo '<br/>********************************<hr/>';


// Render view
set_error_handler(
/**
 * @throws ErrorException
 */ function ($severity, $message, $file, $line) {
        throw new ErrorException($message, $severity, $severity, $file, $line);
    }
);
try {
    echo $twig->render($view.'.html.twig', [
            'title' => formatted($view),
            'session' => $_SESSION,
        ]);
} catch(Exception $e){
    echo $twig->render('error.html.twig', ['title' => 'Error']);
}
restore_error_handler();