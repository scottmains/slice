<?php


/**
 * Exception handler that  deals with 
 * errors that relate to JSON data. This
 * handler will usually be called when 
 * dealing with the API endpoint.
 * 
 * The content is displayed in JSON format.
 * 
 * @author Scott Mains w18003567
 * 
 */

function JSONexceptionHandler($e) {
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    $output['error'] = "internal server error! (Status 500)";

    if (DEVELOPMENT_MODE) {
        $output['Message'] = $e->getMessage();
        $output['File'] = $e->getFile();
        $output['Line'] = $e->getLine();
    }

    echo json_encode($output);
}