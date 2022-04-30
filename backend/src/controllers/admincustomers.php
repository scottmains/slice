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

class AdminCustomers extends Controller {

     
    protected function setGateway() {
        $this->gateway = new Gateway\AdminGateway();
    }
    
    protected function processRequest() {

        $userid = $this->getRequest()->getParameter("userid");
        $loyaltyPoints = $this->getRequest()->getParameter("loyaltyPoints");
        $comment = $this->getRequest()->getParameter("comment");
     
        if ($this->getRequest()->getRequestMethod() === "GET") {

           $this->getGateway()->showAllCustomers();

        }  elseif ($this->getRequest()->getRequestMethod() === "POST") {
            if (!is_null($loyaltyPoints)){
                $this->getGateway()->changeLoyaltyPoints($userid, $loyaltyPoints);
            }
            elseif (!is_null($comment)){
                $this->getGateway()->changeComment($userid, $comment);
        }



        }
     else {
        $this->getResponse()->setMessage("Method not allowed");
        $this->getResponse()->setStatusCode(405);
    }

        return $this->getGateway()->getResult();
    }
}