<?php
namespace src\controllers;
use src\gateways as Gateway;

/**
 * Controller class that gets requests and deals with 
 * data from the api/readinglist end-point
 * 
 * The content is displayed in JSON format.
 * 
 * @author Scott Mains w18003567
 * 
 */

class GuestReservation extends Controller {

    
    protected function setGateway() {
        $this->gateway = new Gateway\ReservationGateway();
    }

        protected function processRequest() {

            if ($this->getRequest()->getRequestMethod() === "POST") {

                $partysize = !empty($_POST['partysize']) ? trim($_POST['partysize']) : null;
                $bookingdate = !empty($_POST['bookingdate']) ? trim($_POST['bookingdate']) : null;
                $bookingstart = !empty($_POST['bookingstart']) ? trim($_POST['bookingstart']) : null;
                $phonenumber = !empty($_POST['phonenumber']) ? trim($_POST['phonenumber']) : null;
                $name = !empty($_POST['name']) ? trim($_POST['name']) : null;
                $email = !empty($_POST['email']) ? trim($_POST['email']) : null;
             
                
                $this->getGateway()->addGuest($name, $email, $phonenumber);
                $this->getGateway()->addGuestReservation($partysize, $bookingdate, $bookingstart);
                   
                }

            else {
                $this->getResponse()->setMessage("Method not allowed");
                $this->getResponse()->setStatusCode(405);
            }
            return $this->getGateway()->getResult();
        }
    }