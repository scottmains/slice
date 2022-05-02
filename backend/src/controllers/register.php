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

class Register extends Controller {

    
    protected function setGateway() {
        $this->gateway = new Gateway\UserGateway();
    }

        protected function processRequest() {

            if ($this->getRequest()->getRequestMethod() === "POST") {

                $email = $this->getRequest()->getParameter("email");
                $password = $this->getRequest()->getParameter("password");
                $name = $this->getRequest()->getParameter("name");
                $phonenumber = $this->getRequest()->getParameter("phonenumber");

                $this->getGateway()->checkEmailExists($email); 
                $this->getGateway()->checkFields($name, $phonenumber, $email, $password);
                $this->getGateway()->addUser($name, $phonenumber, $email, $password);
            }
            else {
                $this->getResponse()->setMessage("Method not allowed");
                $this->getResponse()->setStatusCode(405);
            }
            return $this->getGateway()->getResult();
        }
    }