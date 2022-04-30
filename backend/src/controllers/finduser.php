<?php

namespace src\controllers;

use src\gateways as Gateway;

/**
 * Controller class that gets requests and deals with 
 * data from the api/papers end-point
 * 
 * The content is displayed in JSON format.
 * 
 * @author Scott Mains w18003567
 * 
 */

class FindUser extends Controller {
    
    protected function setGateway() {
        $this->gateway = new Gateway\UserGateway();
    }
    
    protected function processRequest() {

        if ($this->getRequest()->getRequestMethod() === "POST") {

            $input['userid'] = filter_has_var(INPUT_POST, 'userid') ? $_POST['userid'] : null;
            $this->getGateway()->findUser($input['userid']);
        }
        else {
            $this->getResponse()->setMessage("Method not allowed");
            $this->getResponse()->setStatusCode(405);
        }
        return $this->getGateway()->getResult();
    }
}