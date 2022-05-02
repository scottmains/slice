<?php

/**
 *The main config file that defines all the basepaths for
 * the web application and database.
 * 
 * Also sets the secret_key and sets the exception handlers 
 * to the appropriate one.
 * 
 * @author Scott Mains w18003567
 * 
 */

define('BASEPATH', '/backend/');

define('DEVELOPMENT_MODE', true);
define('SECRET_KEY', '&MY[5lx,xb#b""E/8eB&>x2}T^JDaV');

ini_set('display_errors', DEVELOPMENT_MODE);
ini_set('display_startup_errors', DEVELOPMENT_MODE);

include 'config/autoloader.php';
spl_autoload_register("autoloader");

include 'config/htmlexceptionhandler.php';
include 'config/jsonexceptionhandler.php';
set_exception_handler("JSONexceptionHandler");

include 'config/errorhandler.php';
set_error_handler("errorHandler");