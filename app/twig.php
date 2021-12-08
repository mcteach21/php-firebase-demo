<?php
require_once 'vendor/autoload.php';

// Specify our Twig templates location
$loader = new Twig_Loader_Filesystem( 'views/templates');

// Instantiate our Twig
$twig = new Twig_Environment($loader);