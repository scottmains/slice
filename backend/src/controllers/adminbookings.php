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

class AdminBookings extends Controller {

     
    protected function setGateway() {
        $this->gateway = new Gateway\AdminGateway();
    }
    
    protected function processRequest() {

        $bookingid = $this->getRequest()->getParameter("bookingid");
        $userid = $this->getRequest()->getParameter("userid");
     
        if ($this->getRequest()->getRequestMethod() === "GET") {
           $this->getGateway()->showAllBookings();
        }

        else if ($this->getRequest()->getRequestMethod() === "POST") {
            if (!is_null($bookingid)) {
                $this->getGateway()->removeBooking($bookingid);
            } else if (!is_null($userid)) {
                $this->getGateway()->removeBookingUser($userid);
            }
        }
     else {
        $this->getResponse()->setMessage("Method not allowed");
        $this->getResponse()->setStatusCode(405);
    }

        return $this->getGateway()->getResult();
    }
}