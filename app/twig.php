<?php
require_once 'vendor/autoload.php';

// Twig templates location
$loader = new Twig_Loader_Filesystem( 'views/templates');
// Instantiate Twig
$twig = new Twig_Environment($loader);

$twig->addGlobal('session', $_SESSION);

//$function = new \Twig_SimpleFunction('info', function () {
//    return $_SESSION['firebase'];
//});
//$twig->addFunction($function);

//$twig->addFilter('info', new Twig_Filter_Function(function(){
//    return $_SESSION['firebase'];
//}));

//function getSessions(){
//    return 'Session (Firebase) = '.$_SESSION['firebase'];
//}
//
//$twig->addFilter('getSession', new Twig_Filter_Function('getSessions'));
