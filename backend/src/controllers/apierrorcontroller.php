<?php

namespace src\controllers;


/**
 * Controller class that gets with a end-point
 * path that doesn't exist.
 * 
 * The content is displayed in JSON format.
 * 
 * @author Scott Mains w18003567
 * 
 */

class ApiErrorController extends Controller {

    protected function processRequest() {
        $data['message'] = "Endpoint not found";
        $data['documentation'] = "";

        return $data;
    }
}