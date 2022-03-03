<?php


/**
 * 
 * autoloader that autoloads all the 
 * classes in the src folder.
 * 
 * @author Scott Mains w18003567
 * 
 */
function autoloader($className) {
    $filename = strtolower($className) . ".php";
    $filename = str_replace('\\', DIRECTORY_SEPARATOR, $filename);
    if (is_readable($filename)) {
        include_once $filename;
    } else {
        throw new exception("File not found: " . $className . " (" . $filename . ")");
    }
}