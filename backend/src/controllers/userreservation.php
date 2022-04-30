<?php
namespace src\controllers;
require_once 'src/firebase/jwt/BeforeValidException.php';
require_once 'src/firebase/jwt/ExpiredException.php';
require_once 'src/firebase/jwt/SignatureInvalidException.php';
require_once 'src/firebase/jwt/JWT.php';
require_once 'src/firebase/jwt/Key.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

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

class UserReservation extends Controller {

    
    protected function setGateway() {
        $this->gateway = new Gateway\ReservationGateway();
    }

        protected function processRequest() {

            if ($this->getRequest()->getRequestMethod() === "POST") {

                $userid = !empty($_POST['userid']) ? trim($_POST['userid']) : null;
                $partysize = !empty($_POST['partysize']) ? trim($_POST['partysize']) : null;
                $bookingdate = !empty($_POST['bookingdate']) ? trim($_POST['bookingdate']) : null;
                $bookingstart = !empty($_POST['bookingstart']) ? trim($_POST['bookingstart']) : null;
            
                
                $this->getGateway()->checkReservationExists($userid);
                $this->getGateway()->addUserReservation($userid, $partysize, $bookingdate, $bookingstart);
                $this->getGateway()->addLoyalty($userid);
            }

            else {
                $this->getResponse()->setMessage("Method not allowed");
                $this->getResponse()->setStatusCode(405);
            }
            return $this->getGateway()->getResult();
        }
    }