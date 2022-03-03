<?php


/**
 * 
 * Basic error handler which provides error
 * variables to be logged in development mode
 * and throws exceptions
 * 
 * @author Scott Mains w18003567
 * 
 */
function errorHandler($errno, $errstr, $errfile, $errline) {
    if (($errno != 2 && $errno != 8) || DEVELOPMENT_MODE) {
        throw new Exception("Error Detected: [$errno] $errstr file: $errfile line: $errline", 1);
    }
}