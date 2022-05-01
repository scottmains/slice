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

class AdminSettings extends Controller {

     
    protected function setGateway() {
        $this->gateway = new Gateway\AdminGateway();
    }
    
    protected function processRequest() {

        $openingTime = $this->getRequest()->getParameter("hours_open");
        $closingTime = $this->getRequest()->getParameter("hours_closed");
        $timeInterval = $this->getRequest()->getParameter("timeInterval");
        $max_occupancy = $this->getRequest()->getParameter("max_occupancy");
        $token = $this->getRequest()->getParameter("token");
     
        if ($this->getRequest()->getRequestMethod() === "POST") {

            $key = SECRET_KEY;
            $decoded = JWT::decode($token, new Key($key, 'HS256'));
            $isAdmin = $decoded->isAdmin;

            if ($isAdmin === "1") { 
            if (!is_null($openingTime)){
                $this->getGateway()->changeOpeningTime($openingTime);
            }
            elseif (!is_null($closingTime)){
                $this->getGateway()->changeClosingTime($closingTime);
        } elseif (!is_null($timeInterval)){
            $this->getGateway()->changeTimeInterval($timeInterval);
    } elseif (!is_null($max_occupancy)){
        $this->getGateway()->changeMaxOccupancy($max_occupancy);
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