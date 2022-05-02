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
 * data from the api/authors end-point
 * 
 * The content is displayed in JSON format.
 * 
 * @author Scott Mains w18003567
 * 
 */

class UserDeleteBooking extends Controller {

     
    protected function setGateway() {
        $this->gateway = new Gateway\AdminGateway();
    }
    
    protected function processRequest() {

        $userid = $this->getRequest()->getParameter("userid");
        $token = $this->getRequest()->getParameter("token");

        if ($this->getRequest()->getRequestMethod() === "GET") {
           $this->getGateway()->showAllBookings();
        }
        else if ($this->getRequest()->getRequestMethod() === "POST") {

            $key = SECRET_KEY;
            $decoded = JWT::decode($token, new Key($key, 'HS256'));
            $userCheck = $decoded->userid;

    if ($userid === $userCheck) { 
            if (!is_null($userid)) {
                $this->getGateway()->removeBookingUser($userid);
            }
        }
    }
    
     else {
        $this->getResponse()->setMessage("Method not allowed");
        $this->getResponse()->setStatusCode(405);
    }

        return $this->getGateway()->getResult();
    }
}