<?php
namespace src\controllers;
use src\gateways as Gateway;


/**
 * Controller class that gets requests and deals with 
 * data from the api/authors end-point
 * 
 * The content is displayed in JSON format.
 * 
 * @author Scott Mains w18003567
 * 
 */

class ForgotPassword extends Controller {

     
    protected function setGateway() {
        $this->gateway = new Gateway\UserGateway();
    }
    
    protected function processRequest() {

        $email = $this->getRequest()->getParameter("email");
       
      
       if ($this->getRequest()->getRequestMethod() === "POST") {
            if (!is_null($email)) {
                $this->getGateway()->sendForgotPasswordEmail($email);
            }

        }
     else {
        $this->getResponse()->setMessage("Method not allowed");
        $this->getResponse()->setStatusCode(405);
    }

        return $this->getGateway()->getResult();
    }
}