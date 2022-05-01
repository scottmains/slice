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

class Timeslots extends Controller {

     
    protected function setGateway() {
        $this->gateway = new Gateway\ReservationGateway();
    }
    
    protected function processRequest() {

        $bookingdate = $this->getRequest()->getParameter("bookingDate");
       
      
       if ($this->getRequest()->getRequestMethod() === "POST") {
            if (!is_null($bookingdate)) {
                $this->getGateway()->checkBookingDate($bookingdate);
            }
        }
     else {
        $this->getResponse()->setMessage("Method not allowed");
        $this->getResponse()->setStatusCode(405);
    }

        return $this->getGateway()->getResult();
    }
}