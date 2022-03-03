<?php

/**
 * Exception handler that  deals with 
 * errors that relate to HTMLdata. This
 * handler will usually be called when 
 * dealing outside the API endpoint
 * 
 * The content is displayed in HTML format.
 * 
 * @author Scott Mains w18003567
 * 
 */

function HTMLexceptionHandler($e) {
    echo "<p>internal server error! (Status 500)</p>";
        if (DEVELOPMENT_MODE) {
            echo "<p>";
            echo "Message: ".  $e->getMessage();
            echo "<br>File: ". $e->getFile();
            echo "<br>Line: ". $e->getLine();
            echo "</p>";
        }
}