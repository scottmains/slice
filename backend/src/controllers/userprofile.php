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

class UserProfile extends Controller {

     
    protected function setGateway() {
        $this->gateway = new Gateway\AdminGateway();
    }
    
    protected function processRequest() {

        $userid = $this->getRequest()->getParameter("userid");
        $name = $this->getRequest()->getParameter("name");
        $phonenumber = $this->getRequest()->getParameter("phonenumber");
        $email = $this->getRequest()->getParameter("email");
        
     
        if ($this->getRequest()->getRequestMethod() === "POST") {
            if (!is_null($name)) {
                $this->getGateway()->changeName($userid, $name);
            } elseif (!is_null($email)){
                $this->getGateway()->changeEmail($userid, $email);
            } elseif (!is_null($phonenumber)){
                $this->getGateway()->changeNumber($userid, $phonenumber);
            } 
            
     else {
        $this->getResponse()->setMessage("Method not allowed");
        $this->getResponse()->setStatusCode(405);
    }

        return $this->getGateway()->getResult();
         }
    }
}